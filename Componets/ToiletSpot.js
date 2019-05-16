import React from 'react';
import { Image } from 'react-native';
import { MapView } from 'expo';



const ToiletSpot = (props) => {
    // const latitude = props.toiletLocation.lat
    // const longitude = props.toiletLocation.lon

console.log(Number(props.toiletLocation.lat))
console.log(Number(props.toiletLocation.lon))
    return(
        <MapView.Marker
            coordinate={
                { 
                    latitude:Number(props.toiletLocation.lat),
                    longitude:Number(props.toiletLocation.lon),
                }
            }
            title="똥통"
            description="Heaven!"
        >
        <Image source={require('../assets/toilet.png')}/>
        </MapView.Marker>

    )
}

export default ToiletSpot
