import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default class AddButton extends React.Component{
    fuckingRendering = async () => {
        await this.props.getAddress();
        const goToFuckingToilet = await this.props.navigation.navigate('AddToilet',{'location' : this.props})
        
        return goToFuckingToilet;
      }

    render() {
        return(
            <Ionicons
                name="md-add-circle"
                color="#000000"
                size={36.22}
                onPress={()=> {
                    // this.props.getAddress();
                    // return this.props.navigation.navigate('AddToilet',{'location' : this.props})
                    this.fuckingRendering()
                }
                }
            />
        )
    }
}