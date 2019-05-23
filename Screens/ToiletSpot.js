import React from 'react';
import { MapView } from 'expo';
import { Ionicons } from '@expo/vector-icons';


const ToiletSpot = (props) => {
    const latitude = Number(props.toiletLocation.latitude)
    const longitude = Number(props.toiletLocation.longitude)
    const starScore = 'SCORE : ' + props.toiletLocation.rating
    return(
        <MapView.Marker
            coordinate={
                { 
                    latitude:latitude,
                    longitude:longitude,
                }
            }
            title= {starScore}
            description={props.toiletLocation.description}
            onCalloutPress={() => {
                props.navigation.navigate("AddComment",{"infos" : props})}}
        >
            <Ionicons name="md-heart" size={40} color='#FF1493'/>
        </MapView.Marker>

    )
}

export default ToiletSpot
