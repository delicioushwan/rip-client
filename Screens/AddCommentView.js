import React, { Component } from 'react';
import { Text, View, TextInput, Button, KeyboardAvoidingView, ScrollView, Modal, BackHandler, AsyncStorage } from 'react-native';
import { Location, Permissions } from 'expo';
import ToiletStarRating from '../componets/starRating'
import styles from './addStyle'
import BackButton from '../componets/BackButton'
import MiniMap from './miniMap'

class AddCommentView extends Component {
  state = {
    address : 'there is no Address in here',
    comment : '',
    starCount : 3.5,
    modalVisible: false,
  }

  static navigationOptions = ({ navigation }) => {
    console.log(navigation)
    return{
      headerTitle: 'Add Comments',
      headerRight: (
        <Button
          onPress={()=>{
            navigation.getParam('_submitChain')()
          }}
          title="Submit"
          color="black"
        />
      ),
      headerLeft: (
        <BackButton navigation={navigation} />
      ),
    }
  };

  componentDidMount(){
    this.props.navigation.setParams({
      _submitChain:this._submitChain
    })
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    this._getReverseGeocodeAsync()
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate('Home') // works best when the goBack is async
    return true;
  }

  onStarRatingPress = (rating) => {
    this.setState({
      starCount: rating
    });
  }
 
  summitComment = () => {
    
    fetch('http://13.209.131.247:5000/comments',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comment : this.state.comment,
        toiletId : this.props.navigation.state.params.infos.toiletLocation.id,
      }),
    })
    .then(response => console.log('Add Comment Success:',(response)))
    .catch(error => console.error('Error:', error));
  }

  sendStarRating = () => {
    let starCount = this.state.starCount + 'x'
    fetch(`http://13.209.131.247:5000/toilet/${this.props.navigation.state.params.infos.toiletLocation.id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        rating : starCount
      }),
    })
    .then(response => console.log('Add Rating Success:',(response)))
    .catch(error => console.error('Error:', error));
  }

  _getReverseGeocodeAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    let addressLocation = {
      latitude: Number(this.props.navigation.state.params.infos.toiletLocation.latitude),
      longitude: Number(this.props.navigation.state.params.infos.toiletLocation.longitude),
    }
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
        location,
      });
    }
    let address = await Location.reverseGeocodeAsync(addressLocation);
    let addressKr = address[0].country + ' ' + address[0].region + ' ' + address[0].street + ' ' + address[0].name
    this.setState({address:addressKr});
  }

  _submitChain = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    userToken === 'aasertetdbc' ? (
    this.summitComment(),
    this.sendStarRating() ,
    this.props.navigation.navigate('Home') ) : this.setModalVisible(true);

  }

  _checkLogin = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    console.log('*******************',userToken)
    return userToken
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }



  render(){
    let { toiletLocation } = this.props.navigation.state.params.infos
    // this._checkLogin()
    return(
      <KeyboardAvoidingView style={styles.zero} behavior="padding" enabled>
        <View 
          style={styles.zero}>
          <View style={{
            width :'100%',
            height:300
            }}>
            <MiniMap toiletInfo = {toiletLocation}></MiniMap>
          </View>
          <View style = {styles.first}>
            <Text style = {{padding : 15}}>{ this.state.address }</Text>
          </View>
          <View style = {styles.second}>
            <View style = {{padding:15}}>
              <ToiletStarRating starPress = {this.onStarRatingPress} starCount = {this.state.starCount}/>
            </View>
          </View>
          <View style = {styles.third}>
            <Text>Comment</Text>
            <View style = {styles.commentBox}>
              <ScrollView
                style={{height:100}}
              >
                {toiletLocation.comments.reverse().map((toilet,index)=>{
                  if(toilet.comment.length > 0){
                    return <Text key={index} flexWrap='wrap' style = {styles.commentStyle}>{toilet.comment}</Text>
                  }
                })}
              </ScrollView>
              <TextInput style = {styles.inputStyle}
                onPress = {() => this.summitComment()}
                onChangeText = {(comment) => this.setState({comment})}
                value = {this.state.comment}
                placeholder = "input comments here"
              />
            </View>
          </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <View style = {styles.modalStyle}>
            <View style = {styles.inModalStyle}>
              <Text  style={{color: 'black', fontSize : 15, fontWeight: 'bold', padding : 15}}> You need to sign in! </Text>
              <Button
                title = ' close '
                color = "black"
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text> OK </Text>
              </Button>
            </View>
          </View>
        </Modal>
      </View>
      </KeyboardAvoidingView>
    )
  }
}
  
export default AddCommentView;
