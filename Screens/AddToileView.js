import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, KeyboardAvoidingView, ScrollView} from 'react-native';
import AddToiletHeadLine from '../componets/AddToiletHeadLine'
import ToiletStarRating from '../componets/starRating'
import MainMap from '../Screens/MainMap'
import styles from './addStyle'
class AddToiletView extends Component {
 
      state = {
        locationData : 'fucking location will come to here',
        comment : ''
      };
   
    onPressButton= () => {
      console.log("fuckkkkkkkkkkkkkk", this.props)
    }

    summit = () => {
      console.log(state)
      fetch('http://13.124.90.132:3001/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({address :state.locationData}),
      })
      .then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
    }

    render(){
      const { navigation } = this.props;
      const location = navigation.getParam('location')
        return(
        <KeyboardAvoidingView style={styles.zero} behavior="padding" enabled>
            {/* <View style = {styles.headLine}>
              <AddToiletHeadLine 
              onPress = {this.onPressButton} summit = {this.summit}/>
            </View> */}
              {/* <MainMap style = {styles.emptySpace}/> */}
              <View style = {styles.emptySpace}></View>
            <View style = {styles.first}>
                <TextInput style = {{fontSize : 17.4}} 
                defaultValue = {this.state.locationData} />
            </View>
            <View style = {styles.second}>
                <ToiletStarRating />
            </View>
            <View style = {styles.third}>
                <Text style = {{fontSize : 19.22}}>Comment</Text>
                <View style = {styles.commentBox}>
                  <KeyboardAvoidingView behavior="padding" enabled>
                  <TextInput onChangeText = {(comment) => this.setState({comment})}
                  value = {this.state.comment}
                  placeholder = "input comments here"/>
                  </KeyboardAvoidingView>
                </View>
            </View>
        </KeyboardAvoidingView>
        )
    }
}

  
export default AddToiletView;