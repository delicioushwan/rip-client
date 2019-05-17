import React from 'react';
import { StyleSheet, View } from 'react-native';
import RootAppNavigator from './navigation/RIPNavigation'



export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <RootAppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
