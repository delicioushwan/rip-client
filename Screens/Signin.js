import React from 'react';
import { View, TextInput, AsyncStorage, Text ,TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import BackButton from '../componets/BackButton'
import { Ionicons } from '@expo/vector-icons';
import style from '../css'



export default class SignIn extends React.Component {
    state = {
        email:'',
        password:'',
        errorEmail: '',
        errorPassword: '',
    }

    _submit = () => {
        fetch('http://13.209.6.108:5000/users/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email : this.state.email,
            password : this.state.password,
          }),
        }).then(res => console.log('res success', res))
        .catch(error => console.log(error) );
    }

    _errorMessages = () => {
        if (this.state.email === "") {
            this.setState(() => ({ errorEmail: "Email Address required."}));
          } else {
            this.setState(() => ({ errorEmail: ''}));
          }
        if (this.state.password === "") {
            this.setState(() => ({ errorPassword: "Password required."}));
          } else {
            this.setState(() => ({ errorPassword: ''}));
          }
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'aasertetdbc');
        this.props.navigation.navigate('DrawerNavigatorSignIn');
    };
    _errorMsg = (check) => {
        const state = this.state
        if(!!state[check]){
            return <Text style={{color: 'red'}}>{state[check]}</Text>
        }
    }

    _changeErr = (key,errName,text) => {
        this.setState(
            {
                [key] : text,
                [errName] : ''
            })
    }

    render(){
        return(
            <KeyboardAvoidingView style={style.container} behavior="padding" enabled>
                <View style={style.backbutton}><BackButton navigation={this.props.navigation} /></View>
                <View style={style.inputTag}>
                    <Text style={style.inputText} >USER ID (Email Address)</Text>
                    <TextInput
                        style={style.emailInput}
                        placeholder=" Email Address"
                        onChangeText={(text) => this._changeErr('email','errorEmail',text)}
                    />
                    {this._errorMsg("errorEmail")}
                    <Text style={style.inputText} >PASSWORD</Text>
                    <TextInput
                        style={style.passwordInput}
                        placeholder=" Password"
                        onChangeText={(text) => this._changeErr('password','errorPassword',text)}
                    />
                    {this._errorMsg("errorPassword")}
                    <TouchableOpacity
                        style={style.signinButton}
                        onPress={this._errorMessages}
                        onPress={this._submit}
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