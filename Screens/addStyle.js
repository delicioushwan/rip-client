import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    zero : {
        flex : 1,
        width : '100%'
    },
    headLine : {
      flex: 0.4,
      alignItems: 'center',
      justifyContent: 'center',
      borderTopWidth: 5,
    },
    emptySpace : {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
      borderTopWidth : 5,
    },
    first: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth : 5,
    },
    second: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth : 5,
    },
    third: {
        flex: 2,
        padding : 20,
        borderTopWidth : 5,
        // backgroundColor: 'blue',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    commentBox : {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth : 5,
    },
    inputStyle : {
        padding : 10,
        fontSize : 15.64,
    },
    commentStyle : {
        padding : 5,
        fontSize : 15.64,
    },
});

export default styles;