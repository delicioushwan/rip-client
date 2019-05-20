import React from 'react';
import { View, TextInput, Text ,TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import BackButton from '../componets/BackButton'
import style from '../css'


export default class SignUp extends React.Component {
    state = {
        email:'',
        password:'',
        nickname:'',
        check:'',
        errorEmail: '',
        errorNickname: '',
        errorPassword: '',
        errorCheck: ''
    }
    _submit = () => {
        fetch('54.180.109.44:5000',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nickname : this.state.nickname,
            email : this.state.email,
            password : this.state.password,
          }),
        })
        .then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
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
        if (this.state.nickname === "") {
            this.setState(() => ({ errorNickname: "Nickname required."}));
          } else {
            this.setState(() => ({ errorNickname: ''}));
          }
        if (this.state.password !== this.state.check) {
            this.setState(() => ({ errorCheck: "Not the same password."}));
          } else {
            this.setState(() => ({ errorCheck: ''}));
          }
    }

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
                    {this._errorMsg ("errorEmail")}  

                    <Text style={style.inputText} >PASSWORD</Text>
                    <TextInput
                        style={style.passwordInput}
                        placeholder=" Password"
                        onChangeText={(text) => this._changeErr('password','errorPassword',text)}
                    />
                    {this._errorMsg("errorPassword")}

                    <Text style={style.checkInput} >CONFIRM PASSWORD</Text>
                    <TextInput
                        style={style.passwordInput}
                        placeholder=" Password"
                        onChangeText={(text) => this._changeErr('check','errorCheck',text)}
                    />
                    {this._errorMsg("errorCheck")}

                    <Text style={style.inputText} >NICKNAME</Text>
                    <TextInput
                        style={style.passwordInput}
                        placeholder=" Nickname"
                        onChangeText={(text) => this._changeErr('nickname','errorNickname',text)}
                    />
                    {this._errorMsg("errorNickname")}

                    <TouchableOpacity
                        style={style.signinButton}
                        onPress={this._errorMessages}
                        // onPress={this._submit}
                    >                
                    <Text style={style.submit}>SIGN UP</Text>
                    </TouchableOpacity>
            
                </View>
                <View style={{flex:2}}>
                </View>
            </KeyboardAvoidingView>    
        )
    
    }
}

