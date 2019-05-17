import React from 'react';
import { StyleSheet } from 'react-native';


const style = StyleSheet.create({
    container : {
        flex : 1,
    },
    top : {
        flex : 1,

    },
    backbutton : {
        flex : 1,

    },
    inputTag : {
        flex : 20,
        backgroundColor:'#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    emailInput : {
        height: 60,
        width: '80%',
        borderWidth: 1,
        fontSize : 20

    },
    passwordInput : {
        height: 60,
        width: '80%',
        borderWidth: 1
    },
    inputText : {
        marginTop: 30,
        fontSize : 20
    },
    signinButton : {
        backgroundColor: 'white',
        marginTop: 40,
    },
    submit: {
        fontSize: 50
    },
    checkInput: {
        marginTop: 30,
        fontSize : 20,
        color:'black' 
    }


})

export default style
