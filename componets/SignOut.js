import React from 'react';
import { View, AsyncStorage } from 'react-native';

export default class SignOut extends React.Component {
    constructor() {
        super();
        this._SignOut();
        this._Submit();
      }
    _SignOut = async() => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('DrawerNavigator');
    }
    _Submit = () => {
      fetch('http://13.209.6.108:5000/users/logout',
      {
        method: 'GET',
      }).then(res => console.log('res success', res))
      .catch(error => console.log(error) );
    }

  
    render(){
          return (
            <View >
            </View>
          );
      }
}