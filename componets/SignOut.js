import React from 'react';
import { View, TextInput, AsyncStorage, Text ,Button, KeyboardAvoidingView} from 'react-native';

export default class SignOut extends React.Component {
    render(){
        let _SignOut = () => {
            console.log('works')
            AsyncStorage.clear();
            this.props.navigation.navigate('DrawerNavigator');
          }
        return(
            <View>
                <View>
                <Text>왜안돼</Text>
                </View>
                <View><Text>왜안돼</Text></View>
                <View
                onPress={this.props.navigation.navigate('Home')}
                ><Text>Home</Text>
                </View>
                <Button
                title="signout"
                onPress={_SignOut}
                >
                </Button>
            </View>

        )
    }
}