import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default class AddButton extends React.Component{
    render() {
        return(
            <Ionicons
                name="md-add-circle"
                color="#000000"
                size={36.22}
                onPress={()=> {
                    return this.props.navigation.navigate('AddToilet',{'location' : this.props.location})}
                }
            />
        )
    }
}