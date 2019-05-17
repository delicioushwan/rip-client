import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Dimensions, Image } from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';
import ToiletSpot from './ToiletSpot';
import MenuButton from '../componets/MenuButton'
import AddButton from '../componets/AddButton'

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
    console.log(this.state)
    return (
        <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
            <MapView
            style={{ alignSelf: 'stretch', height: '100%' }}
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
            title="똥마려 Wanna take shit"
            description="큰일이다!!"
            >
              <Image source={require('../assets/poop.png')}/>
            </MapView.Marker>
            {this.state.toilet.map(
              (toiletLocation,index)=>{
                return <ToiletSpot key ={index} toiletLocation={toiletLocation}></ToiletSpot>
              }
            )}
            </MapView>
            <View style={
              {
                flex : 1,
                width:'100%',
                flexDirection:"row",
                zIndex: 9,
                position: 'absolute',
                bottom: 30,
                justifyContent:'space-between',
                paddingRight: 30,
                paddingLeft: 30

                }}>
              <Button
                onPress={this._handleMapRegionChange}
                title="Where I am"
                color="#841584"
              />
              <AddButton
                location={this.state.location.coords}
                navigation={this.props.navigation} />


            </View>
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
