import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default class AddButton extends React.Component{
    render() {
        return(
            <Ionicons
                name="md-sunny"
                color="#000000"
                size={32}
                onPress={()=> {
                    return this.props.navigation.navigate('AddToilet',{'location' : this.props.location})}
                }
            />
        )
    }
}