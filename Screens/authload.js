import React from 'react';
import { View, StatusBar, AsyncStorage, ActivityIndicator ,TouchableOpacity, KeyboardAvoidingView} from 'react-native';



export default class AuthLoadingScreen extends React.Component {
    constructor() {
      super();
      this._bootstrapAsync();
    }
  
    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
        console.log(userToken)
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      this.props.navigation.navigate(userToken === 'aasertetdbc' ? 'DrawerNavigatorSignIn' : 'DrawerNavigator');
    };
    render() {
        return (
          <View >
            <ActivityIndicator />
            <StatusBar barStyle="default" />
          </View>
        );
    }
}

