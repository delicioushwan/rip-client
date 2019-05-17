import React from 'react';
import { View, TextInput, StyleSheet, Text ,TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import BackButton from '../componets/BackButton'
import { Ionicons } from '@expo/vector-icons';
import style from '../css'



export default class SignIn extends React.Component {
    state = {
        email:'',
        password:'',
    }

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

                        // onChangeText={(text) => this.setState({text})}
                    />
                    <TouchableOpacity
                        style={style.signinButton}
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