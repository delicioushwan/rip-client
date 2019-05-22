import React from 'react';
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
            onCalloutPress={() => {
                props.navigation.navigate("AddComment",{"infos" : props})}}
        >
            <Ionicons name="md-heart" size={40} color='#FF1493'/>
        </MapView.Marker>

    )
}

export default ToiletSpot
