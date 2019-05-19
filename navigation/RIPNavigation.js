import React from 'react'
import { Dimensions } from 'react-native' ;
import { createDrawerNavigator, createAppContainer, createStackNavigator, createSwitchNavigator, DrawerItems } from 'react-navigation' ;

import MainMap from '../Screens/MainMap';
import SignIn from '../Screens/Signin'
import SignUp from '../Screens/Signup'
import AddToilet from '../Screens/AddToileView'
import AddComment from '../Screens/AddCommentView'
import Authload from '../Screens/authload'
import SignOut from '../componets/SignOut'

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

const DrawerNavigatorSignIn = createDrawerNavigator(

    {
        Home: {
            screen : MainMap
        },
        "Sign Out": {
            screen : SignOut
        }
    },{
        DrawerConfig,
    }
)

const FunctionNavigator = createStackNavigator(
    {
        AddToilet : {
            screen : AddToilet
        },
        AddComment : {
            screen : AddComment
        },
    },
)


export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading:Authload,
        DrawerNavigator,
        FunctionNavigator,
        DrawerNavigatorSignIn
    },
    {
        initialRouteName : 'AuthLoading',
    }
));