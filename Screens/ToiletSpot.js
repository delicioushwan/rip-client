import React from 'react';
import { Image } from 'react-native';
import { MapView } from 'expo';



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
            onCalloutPress={() => {
                props.navigation.navigate("AddComment",{"infos" : props})}}
        >
        <Image source={require('../assets/toilet.png')}/>
        </MapView.Marker>

    )
}

export default ToiletSpot
