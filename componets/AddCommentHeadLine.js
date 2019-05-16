import React from 'react';
import { Text, View, StyleSheet, TextInput, Button, } from 'react-native';

const AddCommentHeadLine = (props) => (
    
    <View style = {styles.buttonStyle}>
        <Button title = "뒤로가기" onPress = {props.onPress}/>
        <Text style = {styles.subject}> 평가하기 </Text>
        <Button title = "확인" onPress = {props.onPress2}/>
    </View>
);

const styles = StyleSheet.create({
    buttonStyle : {
        flex : 1,
        width : '100%',
        flexDirection : 'row',
        justifyContent:'space-between'
    },
    subject : {
        flex : 1,
        width : '100%',
        backgroundColor : 'grey',
        textAlign : 'center'
    },
});

export default AddCommentHeadLine;
