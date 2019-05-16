import React from 'react';
import { View, Text } from 'react-native';
import BackButton from '../componets/BackButton'



class SignUp extends React.Component {

    render(){
        return(
            <View>
            <BackButton navigation={this.props.navigation} />
            <Text>Test SignUp screen</Text>
            </View>    
        )
    
    }

 
}

export default SignUp
