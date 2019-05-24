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

    const CalulateToMeters = (lat1, lon1, lat2, lon2) => {
        var R = 6378.137;
        var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
        var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c;
        return d * 1000 ;
    }
    let lat1 = props.currentLocation.latitude
    let lon1 = props.currentLocation.longitude
    let lat2 = props.toiletLocation.latitude
    let lon2 = props.toiletLocation.longitude
    let distance = Math.floor(CalulateToMeters(lat1,lon1,lat2,lon2))
    
    return(
        <MapView.Marker
            coordinate={
                { 
                    latitude:latitude,
                    longitude:longitude,
                }
            }
            title= {starScore}
            description={distance + 'm'}
            onCalloutPress={() => {
                props.navigation.navigate("AddComment",{"infos" : props})}}
        >
            <Ionicons name="md-heart" size={40} color='#FF1493'/>
        </MapView.Marker>

    )
}

export default ToiletSpot
