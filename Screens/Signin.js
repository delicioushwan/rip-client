import React from 'react';
import { View, Text } from 'react-native';
import BackButton from '../componets/BackButton'



class SignIn extends React.Component {

    render(){
        return(
            <View>
            <BackButton navigation={this.props.navigation} />
            <Text>Test SignIn screen</Text>
            </View>    
        )
    
    }

 
}

export default SignIn
