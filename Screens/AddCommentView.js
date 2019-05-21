import React, { Component } from 'react';
import { Text, View, TextInput, Button, KeyboardAvoidingView} from 'react-native';
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
      <KeyboardAvoidingView style={styles.zero} behavior="padding" enabled>
          <MiniMap toiletInfo = {toiletLocation}></MiniMap>
        <View style = {styles.first}>
          <Text>{ toiletLocation.address }</Text>
        </View>
        <View style = {styles.second}>
          <ToiletStarRating />
        </View>
        <View style = {styles.third}>
          <Text>Comment</Text>
          <View style = {styles.commentBox}>
            <Text style = {styles.commentStyle}>First Comment will Come to here</Text>
            <Text style = {styles.commentStyle}>Second Comment will Come to here</Text>
            <Text style = {styles.commentStyle}>Third Comment will Come to here</Text>
            <TextInput style = {styles.inputStyle}
            // onChangeText = {(comment) => this.setState({comment})}
            // value = {this.state.comment}
            placeholder = "input comments here"/>
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}
  
export default AddCommentView;
