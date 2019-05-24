import React, { Component } from 'react';
import { Text, View, TextInput, Button, KeyboardAvoidingView, BackHandler } from 'react-native';
import ToiletStarRating from '../componets/starRating'
import styles from './addStyle'
import BackButton from '../componets/BackButton'
import MiniMap from './miniMap';


class AddToiletView extends Component {
  static navigationOptions = ({ navigation }) => {
    return{
    title: 'Add Toilet',
    headerRight: (
      <Button
        onPress={()=>{
          navigation.getParam('summit')();
          navigation.getParam('summitComment')()
          navigation.navigate('Home')
        }}
        title="Submit"
        color="black"
      />
    ),
    headerLeft: (
      <BackButton navigation = {navigation}/>
    ),
    }
  };
  state = {
    locationData : '' + this.props.navigation.state.params.location.address[0].country + ' ' +
    this.props.navigation.state.params.location.address[0].region + ' ' +
    this.props.navigation.state.params.location.address[0].street + ' ' +
    this.props.navigation.state.params.location.address[0].name + ' ',
    description : '',
    latitude : this.props.navigation.state.params.location.location.latitude,
    longitude : this.props.navigation.state.params.location.location.longitude,
    starCount : 3.5,
  };

  componentDidMount(){
    this.props.navigation.setParams({
      summit:this.summit,
      summitComment:this.summitComment
    })
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
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

  summit = () => {
    fetch('http://13.209.131.247:5000/toilet',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        longitude : this.state.longitude,
        latitude : this.state.latitude,
        address : this.state.locationData, 
        starRating : '' + this.state.starCount
        // description : this.state.comment
      }),
    })
    .then(response => console.log('Add Toilet Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
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
      }),
    })
    .then(response => JSON.stringify(response))
    .catch(error => console.error('Error:', error));
  }
    
  render(){
    let { location } = this.props.navigation.state.params.location
    return(
    <KeyboardAvoidingView style={styles.zero} behavior="padding" enabled>
    <MiniMap toiletInfo = {location}></MiniMap>
        <View style = {styles.first}>
            <TextInput style = {{fontSize : 17.4}} 
              onChangeText = {(locationData) => this.setState({locationData})}
            defaultValue = {this.state.locationData} />
        </View>
        <View style = {styles.second}>
          <View style = {{padding:15}}>
            <ToiletStarRating starPress = {this.onStarRatingPress} starCount = {this.state.starCount}/>
          </View>
        </View>
        <View style = {styles.third}>
            <Text style = {{fontSize : 19.22}}>Description</Text>
            <View style = {styles.commentBox}>
              <KeyboardAvoidingView behavior="padding" enabled>
              <TextInput onChangeText = {(description) => this.setState({description})}
              value = {this.state.description}
              placeholder = "input description here"/>
              </KeyboardAvoidingView>
            </View>
        </View>
    </KeyboardAvoidingView>
    )
  }
}

  
export default AddToiletView;