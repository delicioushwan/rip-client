import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, KeyboardAvoidingView} from 'react-native';
import AddCommentHeadLine from '../componets/AddCommentHeadLine'
import ToiletStarRating from '../componets/starRating'
import styles from './addStyle'
class AddCommentView extends Component {
 
    constructor(props) {
      super(props);
      this.state = {
        locationData : 'fucking location will come to here',
        comment : '',
      };
    }
   
    onPressButton() {
      console.log("Doing....")
    }

    render(){
        return(
        <KeyboardAvoidingView style={styles.zero} behavior="padding" enabled>
            {/* <View style = {styles.headLine}>
              <AddCommentHeadLine 
              onPress = {this.onPressButton} onPress2 = {this.onPressButton}/>
            </View> */}
            <View style = {styles.emptySpace}>
              <Text>This view is for Maps</Text>
            </View>
            <View style = {styles.first}>
                <Text>{this.state.locationData}</Text>
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
                  onChangeText = {(comment) => this.setState({comment})}
                  value = {this.state.comment}
                  placeholder = "input comments here"/>
                </View>
            </View>
        </KeyboardAvoidingView>
        )
    }
}

// const styles = StyleSheet.create({
//     zero : {
//         flex : 1,
//         width : '100%'
//     },
//     headLine : {
//       flex: 0.4,
//       backgroundColor: 'yellow',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     emptySpace : {
//       flex: 2,
//       backgroundColor: 'yellow',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     first: {
//         flex: 1,
//         backgroundColor: 'red',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     second: {
//         flex: 1,
//         backgroundColor: 'grey',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     third: {
//         flex: 2,
//         backgroundColor: 'blue',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });
  
export default AddCommentView;