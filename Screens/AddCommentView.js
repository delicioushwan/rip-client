import React, { Component } from 'react';
import { Text, View, TextInput, Button, KeyboardAvoidingView, ScrollView, Image, BackHandler } from 'react-native';
import { Location, Permissions } from 'expo';
import ToiletStarRating from '../componets/starRating'
import styles from './addStyle'
import BackButton from '../componets/BackButton'
import MiniMap from './miniMap'

class AddCommentView extends Component {
  state = {
    address : 'there is no Address in here',
    comment : '',
  }

  static navigationOptions = ({ navigation }) => {
    return{
      headerTitle: 'Add Comments',
      headerRight: (
        <Button
          onPress={()=>{
            navigation.getParam('summitComment')() ;
            navigation.navigate('Home') ;
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
      summitComment:this.summitComment
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


  summitComment = () => {
    fetch('http://13.209.131.247:5000/comments',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comment : this.state.comment,
        toiletId : this.props.navigation.state.params.infos.toiletLocation.id
      }),
    })
    .then(response => console.log('Add Comment Success:',(response)))
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


  render(){
    let { toiletLocation } = this.props.navigation.state.params.infos
    return(
      <KeyboardAvoidingView style={styles.zero} behavior="padding" enabled>
        <ScrollView 
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
              <ToiletStarRating />
            </View>
          </View>
          <View style = {styles.third}>
            <Text>Comment</Text>
            <View style = {styles.commentBox}>
              <ScrollView
                style={{height:100}}
              >
                {toiletLocation.comments.map((toilet,index)=>{
                  return <Text key={index} flexWrap='wrap' style = {styles.commentStyle}>{toilet.comment}</Text>
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
          <View style={{height:100}}></View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}
  
export default AddCommentView;
