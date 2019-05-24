import React from 'react';
import { MapView } from 'expo';
import { Ionicons } from '@expo/vector-icons';


const ToiletSpot = (props) => {
    let tempArr = [];
    const latitude = Number(props.toiletLocation.latitude)
    const longitude = Number(props.toiletLocation.longitude)
    const starStr = props.toiletLocation.rating + ''
    starStr.split('x').map(i => { if(i.length > 0){tempArr.push(Number(i))}});
    const starAvg = tempArr.reduce((acc, curV) => acc + curV) / (tempArr).length + '';
    const starScore = 'Rating : ' + (starAvg.slice(0,4) || 0)
    console.log(starScore)
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
