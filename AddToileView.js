import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, KeyboardAvoidingView} from 'react-native';
import AddToiletHeadLine from './AddToiletHeadLine'
import ToiletStarRating from './starRating'
class AddToiletView extends Component {
 
    constructor(props) {
      super(props);
      this.state = {
        locationData : 'fucking location will come to here',
        comment : ''
      };
    }
   
    onPressButton() {
      console.log("fuckkkkkkkkkkkkkk", this.state)
    }

    summit = () => {
      console.log(this.state)
      fetch('http://13.124.90.132:3001/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({address :this.state.locationData}),
      })
      .then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
    }

    render(){
        return(
        <KeyboardAvoidingView style={styles.zero} behavior="padding" enabled>
            <View style = {styles.headLine}>
              <AddToiletHeadLine 
              onPress = {this.onPressButton} summit = {this.summit}/>
            </View>
            <View style = {styles.emptySpace}>
              <Text>This view is for Maps</Text>
            </View>
            <View style = {styles.first}>
                <TextInput defaultValue = {this.state.locationData} />
            </View>
            <View style = {styles.second}>
                <ToiletStarRating />
            </View>
            <View style = {styles.third}>
                <Text>Comment</Text>
                <TextInput onChangeText = {(comment) => this.setState({comment})}
                value = {this.state.comment}/>
            </View>
        </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    zero : {
        flex : 1,
        width : '100%'
    },
    headLine : {
      flex: 0.4,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
    },
    emptySpace : {
      flex: 2,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
    },
    first: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    second: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    third: {
        flex: 2,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
  
export default AddToiletView;