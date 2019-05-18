import React from 'react';
import { View, TextInput, AsyncStorage, Text ,TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import BackButton from '../componets/BackButton'
import { Ionicons } from '@expo/vector-icons';
import style from '../css'



export default class SignIn extends React.Component {
    state = {
        email:'',
        password:'',
    }
    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'aasertetdbc');
        this.props.navigation.navigate('DrawerNavigatorSignIn');
      };
    render(){
        return(
            <KeyboardAvoidingView style={style.container} behavior="padding" enabled>
                <View style={style.top}></View>
                <View style={style.backbutton}><BackButton navigation={this.props.navigation} /></View>
                <View style={style.inputTag}>
                    <Text style={style.inputText} >USER ID (Email Address)</Text>
                    <TextInput
                        style={style.emailInput}
                        placeholder=" Email Address"

                        // onChangeText={(text) => this.setState({text})}
                    />
                    <Text style={style.inputText} >PASSWORD</Text>
                    <TextInput
                        style={style.passwordInput}
                        placeholder=" Password"

                        onChangeText={(text) => this.setState({text})}
                    />
                    <TouchableOpacity
                        style={style.signinButton}
                        onPress={this._signInAsync}
                    >                
                       <Text style={style.submit}><Ionicons
                        name="md-lock"
                        size={60}
                        color="black"
                        /> SIGN IN</Text>
                    </TouchableOpacity>
            
                </View>
            </KeyboardAvoidingView>    
        )
    
    }

 
}