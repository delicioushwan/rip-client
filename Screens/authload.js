import React from 'react';
import { View, AsyncStorage } from 'react-native';



export default class AuthLoadingScreen extends React.Component {
    constructor() {
      super();
      this._bootstrapAsync();
    }
  
    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      this.props.navigation.navigate(userToken === 'aasertetdbc' ? 'DrawerNavigatorSignIn' : 'DrawerNavigator');
    };
    render() {
        return (
          <View >
          </View>
        );
    }
}

