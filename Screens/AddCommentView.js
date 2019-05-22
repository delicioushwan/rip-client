import React, { Component } from 'react';
import { Text, View, TextInput, Button, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import ToiletStarRating from '../componets/starRating'
import styles from './addStyle'
import BackButton from '../componets/BackButton'
import MiniMap from './miniMap'

class AddCommentView extends Component {
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

  render(){
    let { toiletLocation } = this.props.navigation.state.params.infos
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
          <Text>{ toiletLocation.address }</Text>
        </View>
        <View style = {styles.second}>
          <ToiletStarRating />
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
              // onChangeText = {(comment) => this.setState({comment})}
              // value = {this.state.comment}
            placeholder = "input comments here"/>
          </View>
        </View>
        <View style={{height:100}}></View>

        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}
  
export default AddCommentView;
