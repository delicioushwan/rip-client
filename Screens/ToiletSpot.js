import React from 'react';
import { Image, TouchableHighlight, View } from 'react-native';
import { MapView } from 'expo';
import { Ionicons } from '@expo/vector-icons';



const ToiletSpot = (props) => {
    const latitude = Number(props.toiletLocation.lat)
    const longitude = Number(props.toiletLocation.lon)
    
    return(
        <MapView.Marker
            coordinate={
                { 
                    latitude:latitude,
                    longitude:longitude,
                }
            }
            title="똥통"
            description={props.toiletLocation.description}
            onCalloutPress={() => props.navigation.navigate("AddComment")}
        >
        <Image source={require('../assets/toilet.png')}/>
            {/* <Ionicons
                    name="md-star"
                    color="#000000"
                    size={59.22}
                    // style={styles.menuIcon}
            /> */}
        </MapView.Marker>

    )
}

export default ToiletSpot
