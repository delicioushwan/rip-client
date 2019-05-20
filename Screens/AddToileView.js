import React, { Component } from 'react';
import { Text, View, TextInput, Button, KeyboardAvoidingView } from 'react-native';
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
        onPress={()=>{console.log('this button works')}}
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
  };

  onPressButton= () => {
    console.log("fuckkkkkkkkkkkkkk", this.props.navigation.state.params.location.address[0])
  }

  // summit = () => {
  //   fetch('http://54.180.86.152:5000/toilet',
  //   {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       lon : this.state.longitude,
  //       lat : this.state.latitude,
  //       address : this.state.locationData, 
  //       description : this.state.comment
  //     }),
  //   })
  //   .then(res => res.json())
  //   .then(response => console.log('Add Toilet Success:', JSON.stringify(response)))
  //   .catch(error => console.error('Error:', error));
  // }

  // summitComment = () => {
  //   fetch('http://54.180.86.152:5000/comments',
  //   {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       comment : this.state.comment,
  //     }),
  //   })
  //   .then(res => res.json())
  //   .then(response => console.log('Add Comment Success:', JSON.stringify(response)))
  //   .catch(error => console.error('Error:', error));
  // }
    
  render(){
    let { location } = this.props.navigation.state.params.location
    console.log('addtoiletview',this.props.navigation.state.params.location)
    return(
    <KeyboardAvoidingView style={styles.zero} behavior="padding" enabled>
    {/* <MiniMap></MiniMap> */}
        <View style = {styles.first}>
            <TextInput style = {{fontSize : 17.4}} 
              onChangeText = {(locationData) => this.setState({locationData})}
            defaultValue = {this.state.locationData} />
        </View>
        <View style = {styles.second}>
            <ToiletStarRating />
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