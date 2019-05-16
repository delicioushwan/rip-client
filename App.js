import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import AddToiletView from './AddToileView'
import AddCommentView from './AddCommentView'
import MainMap from './Componets/MainMap'

export default class App extends React.Component {

render() {
  return (
    <View style={styles.container}>
      <Text>Don't Touch me please :(</Text>
      <AddToiletView/>
      {/* <AddCommentView/> */}
      {/* <MainMap/> */}
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
