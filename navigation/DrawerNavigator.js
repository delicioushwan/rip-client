import React from 'react'
import { Platform, Dimensions } from 'react-native' ;
import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation' ;

import MainMap from '../Screens/MainMap';
import SignIn from '../Screens/Signin'
import SignUp from '../Screens/Signup'

import AddToilet from '../Screens/AddToileView'
import AddComment from '../Screens/AddCommentView'


const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH*0.83,
}


const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen : MainMap
        },
        "Sign In": {
            screen : SignIn
        },
        "Sign Up": {
            screen : SignUp
        },
    },
    DrawerConfig,
); 

const RootAppNavigator = createStackNavigator(
    {
        DrawerNavigator,
        AddToilet : {
            screen : AddToilet
        },
        AddComment : {
            screen : AddComment
        },
    }
)


export default createAppContainer(RootAppNavigator);