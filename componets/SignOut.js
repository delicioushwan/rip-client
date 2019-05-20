import React from 'react';
import { View, AsyncStorage } from 'react-native';

export default class SignOut extends React.Component {
    constructor() {
        super();
        this._SignOut();
      }
    _SignOut = async() => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('DrawerNavigator');
    }

  
    render(){
          return (
            <View >
            </View>
          );
      }
}