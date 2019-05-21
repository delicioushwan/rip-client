import React from 'react';
import { Text, View, StyleSheet, TextInput, Button, } from 'react-native';

const AddToiletHeadLine = (props) => (
    
    <View style = {styles.buttonStyle}>
        <Button title = "뒤로가기" onPress = {props.onPress}/>
        <Text style = {styles.subject}> 화장실 추가 </Text>
        <Button title = "확인" onPress = {() => {props.summit(); /*props.summitComment()*/}} />
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

export default AddToiletHeadLine;
