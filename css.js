import React from 'react';
import { StyleSheet } from 'react-native';
import { Constants } from 'expo';


const style = StyleSheet.create({
    container : {
        flex : 1,
        paddingTop: Constants.statusBarHeight,
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
    },
    modalStyle : {
        flex : 1,
        // flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inModalStyle : {
        height : "22.222%",
        width : "71.242%",
        borderColor: 'black',
        borderWidth: 1.2,
        borderStyle: 'solid',
        backgroundColor : "white",
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default style
