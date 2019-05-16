import React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class AddButton extends React.Component{
    render() {
        return(
            <Ionicons
                name="md-sunny"
                color="#000000"
                size={32}
                // style={styles.menuIcon}
                onPress={()=> {
                    console.log('works')}
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    menuIcon: {
        zIndex: 9,
        position: 'absolute',
        top: 30,
        left: 20,
    }  
})