import React, { Component } from 'react';
import { Text, View, TextInput, Button, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import { Location, Permissions } from 'expo';
import ToiletStarRating from '../componets/starRating'
import styles from './addStyle'
import BackButton from '../componets/BackButton'
import MiniMap from './miniMap'

class AddCommentView extends Component {
  state = {
    address : 'there is no Address in here',
    comment : ''
  }

  static navigationOptions = ({ navigation }) => {
    return{
      headerTitle: 'Add Comments',
      headerRight: (
        <Button
          onPress={()=>{console.log('this button works')}}
          title="Submit"
          color="black"
        />
      ),
      headerLeft: (
        <BackButton navigation={navigation} />
      ),
    }
  };

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
    .then(res => res.json())
    .then(response => console.log('Add Comment Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
  }

  _getReverseGeocodeAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    let addressLocation = {
      latitude: Number(this.props.navigation.state.params.infos.latitude),
      longitude: Number(this.props.navigation.state.params.infos.longitude),
    }
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
        location,
      });
    }

    let address = await Location.reverseGeocodeAsync(addressLocation);
    this.setState({address:address});
  }
  fuckingRendering = async () => {
    await this._getReverseGeocodeAsync();
}


  render(){
    let { toiletLocation } = this.props.navigation.state.params.infos
    this.fuckingRendering();
    console.log(this.state.address)
    return(
      <KeyboardAvoidingView style={styles.zero} behavior="padding" enabled ='false'>
        <ScrollView style={styles.zero}>
        <View style={{
          width :'100%',
          height:350
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
            <ScrollView >
              <Text flexWrap='wrap' style = {styles.commentStyle}>Firstsdf sdfsdfdsf dsfsdfsdfsdfsdf sdfdsfsd fdsfdsfComment will Come to here</Text>
              <Text style = {styles.commentStyle}>Second Comment will Come to here</Text>
              <Text style = {styles.commentStyle}>Third Comment will Come to here</Text>
            </ScrollView>
            <TextInput style = {styles.inputStyle}
              onChangeText = {(comment) => this.setState({comment})}
              value = {this.state.comment}
              placeholder = "input comments here"
              onPress = {this.summitComment}
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
