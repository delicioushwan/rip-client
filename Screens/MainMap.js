import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';
import ToiletSpot from './ToiletSpot';
import MenuButton from '../componets/MenuButton'
import AddButton from '../componets/AddButton'
import { Ionicons } from '@expo/vector-icons';

let { width, height } = Dimensions.get('window')


export default class MainMap extends Component {
  state = {
    locationResult: null,
    location: {coords: { latitude: 37.78825, longitude: -122.4324}},
    toilet : []
  };

  componentDidMount() {
    this.fetchData();
    this._getLocationAsync();
  }

  fetchData = async () => {
    const response  = await fetch('https://my-json-server.typicode.com/choi8686/fakeserver/toilet')
    const json = await response.json();
    this.setState({toilet : json})
  }

  _handleMapRegionChange = currentLocation => {
    this.setState({ currentLocation });
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
    console.log('getinfo',this.state)
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
                return <ToiletSpot key ={index} toiletLocation={toiletLocation} navigation = {this.props.navigation}></ToiletSpot>
              }
            )}
            </MapView>
            <View style={
              {
                width:'100%',
                flexDirection:"row",
                position: 'absolute',
                justifyContent:'space-between',
                paddingRight: 30,
                paddingLeft: 30,
                bottom : 30
                }}>
              <Ionicons
                onPress={()=> {
                  this._handleMapRegionChange() 
                  }}
                name="md-locate"
                size={36.22}
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
