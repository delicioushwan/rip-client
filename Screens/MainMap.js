import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image, Keyboard } from 'react-native';
import { MapView, Location, Permissions } from 'expo';
import ToiletSpot from './ToiletSpot';
import MenuButton from '../componets/MenuButton'
import AddButton from '../componets/AddButton'
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

let { width, height } = Dimensions.get('window')


export default class MainMap extends Component {
  state = {
    locationResult: null,
    location: {coords: { latitude: 37.78825, longitude: 122.4324}},
    address: 'there is no address',
    toilet : [],
    inputStatus : false
  };

  componentDidMount() {
    this.getData()
  }

  getData = async() => {
    await this._getLocationAsync()
    await this.fetchData()
  }

  fetchData = async () => {
    const response  = await fetch('http://13.209.131.247:5000/toilet',
    {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({
        latitude : this.state.location.coords.latitude,
        longitude : this.state.location.coords.longitude  
      })
    })
    const json = await response.json();
    this.setState({toilet : json})
  }

  _handleMapRegionChange = currentLocation => {
    this.setState({ currentLocation });
  };

  _getReverseGeocodeAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    let addressLocation = {
      latitude: this.state.location.coords.latitude,
      longitude: this.state.location.coords.longitude
    }
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
        location,
      });
    }

    let address = await Location.reverseGeocodeAsync(addressLocation)
    this.setState({address:address});
  }


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
        location
      }
    );
  };

  _getLocationForSearching = async (searchingValue) => {
    let location = await Location.geocodeAsync(searchingValue);
    let coords = {
      latitude: Number(location[0].latitude.toFixed(5)),
      longitude: Number(location[0].longitude.toFixed(5))
    }
    this.setState(
      {
        location:{
          coords:coords
        },
        text:''
      }
    )
    Keyboard.dismiss()
    await this.fetchData()
  }

  _inputToggle = () => {
    this.setState(
      {
        inputStatus:!this.state.inputStatus
      }
    )
  }
  render() {
    return (
        <View style={styles.container}>
          <View style={
            {
              width:'100%',
              flexDirection:"row",
              position: 'absolute',
              justifyContent:'space-between',
              paddingRight: 20,
              paddingLeft: 20,
              top: 30,
            }}
          >               
            <MenuButton navigation={this.props.navigation} />
            <TextInput
              style={
                {
                  zIndex: 9,
                  height: 40,
                  width: '80%',
                  backgroundColor: 'white',
                  display : this.state.inputStatus ? 'flex' : 'none'
                } 
              }
              onChangeText={(text) => this.setState({text})}
              value = {this.state.text}
              />
              <Ionicons
              style={
                {
                  zIndex: 9,
                }
              }
                onPress={()=> {
                  this._inputToggle() 
                  this.state.inputStatus ?
                  (this._getLocationForSearching(this.state.text),
                  this.fetchData())
                   : console.log('hi')
                }
              }
                name="md-search"
                size={40}
              />
            </View>
        



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
            title="똥마려 Wanna take shits"
            description="큰일이다!!"
            >
              <Image source={require('../assets/poop.png')}/>
            </MapView.Marker>
            {this.state.toilet.map(
              (toiletLocation,index)=>{
                return <ToiletSpot key ={index} number={index} currentLocation={this.state.location.coords} toiletLocation={toiletLocation} navigation = {this.props.navigation}></ToiletSpot>
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
                navigation={this.props.navigation}
                address = {this.state.address}
                getAddress = {this._getReverseGeocodeAsync} 
                />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
