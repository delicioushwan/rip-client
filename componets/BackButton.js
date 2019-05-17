import React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class BackButton extends React.Component{
    render() {
        return(
            <Ionicons
                name="md-arrow-back"
                color="#000000"
                size={32}
                style={styles.menuIcon}
                onPress={()=> {
                    return this.props.navigation.navigate('Home')}
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    menuIcon: {
        alignItems: 'flex-start'
    }  
})