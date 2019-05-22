import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Constants, MapView, } from 'expo';

let { width, height } = Dimensions.get('window')


export default class MiniMap extends Component {

  render() {
    // console.log(this)
    let { toiletInfo } = this.props
    let coords = {
      latitude: Number(toiletInfo.latitude),
      longitude: Number(toiletInfo.longitude)
    }
    
    return (
      <View style={styles.container}>
        <MapView
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={
          {
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.01, longitudeDelta: 0.01*(width/height)
          }
        }
        >
        <MapView.Marker
          coordinate={coords}
          title="get props"
          description="get props"
        >
        </MapView.Marker>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2.23,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
