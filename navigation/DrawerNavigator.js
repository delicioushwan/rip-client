import React from 'react'
import { Platform, Dimensions } from 'react-native' ;
import { createDrawerNavigator, createAppContainer } from 'react-navigation' ;

import MainMap from '../Screens/MainMap';
import SignIn from '../Screens/Signin'
import SignUp from '../Screens/Signup'


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
        }
    },
    DrawerConfig
); 

export default createAppContainer(DrawerNavigator);