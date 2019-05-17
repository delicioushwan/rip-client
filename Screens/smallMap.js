import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Dimensions, Image } from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';
import MenuButton from '../componets/MenuButton'

let { width, height } = Dimensions.get('window')


export default class MainMap extends Component {
  state = {
    mapRegion: { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 1, longitudeDelta: 1*(width/height) },
    locationResult: null,
    location: {coords: { latitude: 37.78825, longitude: -122.4324}},
    toilet : []
  };

  componentDidMount() {
    this._getLocationAsync();
    this.fetchData();
  }

  fetchData = async () => {
    const response  = await fetch('https://my-json-server.typicode.com/choi8686/fakeserver/toilet')
    const json = await response.json();
    this.setState({toilet : json})
  }

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
        location,
      });
    }

    let location = await Location.getCurrentPositionAsync({});
      this.setState(
        {
          locationResult: JSON.stringify(location),
          location
        }
      );
  };
  render() {
    return (
        <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
            <MapView
            style={{ alignSelf: 'stretch', height: '70%' }}
            region={
                { 
                latitude: this.state.location.coords.latitude,
                longitude: this.state.location.coords.longitude,
                latitudeDelta: 0.01, longitudeDelta: 0.01*(width/height)
                }
            }
            >
            <MapView.Marker
            coordinate={this.state.location.coords}
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
