import React from 'react';
import { View, TextInput, StyleSheet, Text ,TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import BackButton from '../componets/BackButton'
import style from '../css'


export default class SignUp extends React.Component {
    state = {
        email:'',
        password:'',
        nickname:'',
        checkPassword:'',
        errorEmail: '',
        errorNickname: '',
        errorPassword: '',
        errorCheck: ''
    }



    render(){

        const submit = () => {
            fetch('http://13.124.90.132:3001/',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({address :state.locationData}),
            })
            .then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => { throw(error) });
        }

        const errorMessages = () => {
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
            if (this.state.password !== this.state.checkPassword) {
                this.setState(() => ({ errorCheck: "Not the same password."}));
              } else {
                this.setState(() => ({ errorCheck: ''}));
              }

        }

        return(
            <KeyboardAvoidingView style={style.container} behavior="padding" enabled>
                <View style={style.top}></View>
                <View style={style.backbutton}><BackButton navigation={this.props.navigation} /></View>
                <View style={style.inputTag}>
                    <Text style={style.inputText} >USER ID (Email Address)</Text>
                    <TextInput
                        style={style.emailInput}
                        placeholder=" Email Address"
                        onChangeText={(email) =>{ 
                            this.setState(
                            {
                                email,
                                errorEmail : ''
                            })
                            console.log(this.state)
                        }
                        
                        }
                    />
                    {!!this.state.errorEmail && (
                        <Text style={{color: 'red'}}>{this.state.errorEmail}</Text>
                    )}
                    
                    <Text style={style.inputText} >PASSWORD</Text>
                    <TextInput
                        style={style.passwordInput}
                        placeholder=" Password"
                        onChangeText={(password) => this.setState(
                            {
                                password,
                                errorPassword : ''
                            })}
                    />
                    {!!this.state.errorPassword && (
                        <Text style={{color: 'red'}}>{this.state.errorPassword}</Text>
                    )}

                    <Text style={style.checkInput} >CONFIRM PASSWORD</Text>
                    <TextInput
                        style={style.passwordInput}
                        placeholder=" Password"
                        onChangeText={(checkPassword) => this.setState(
                            {
                                checkPassword,
                                errorCheck : ''
                            })}
                    />
                    {!!this.state.errorCheck && (
                        <Text style={{color: 'red'}}>{this.state.errorCheck}</Text>
                    )}

                    <Text style={style.inputText} >NICKNAME</Text>
                    <TextInput
                        style={style.passwordInput}
                        placeholder=" Nickname"
                        onChangeText={(nickname) => this.setState(
                            {
                                nickname,
                                errorNickname : ''
                            })}
                    />
                    {!!this.state.errorNickname && (
                        <Text style={{color: 'red'}}>{this.state.errorNickname}</Text>
                    )}


                    <TouchableOpacity
                        style={style.signinButton}
                        onPress={()=>errorMessages()}
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

