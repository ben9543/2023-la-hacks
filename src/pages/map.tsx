import React from 'react'
import { useMemo } from 'react'
import {GoogleMap,useLoadScript,Marker} from "@react-google-maps/api";

const containerStyle = {position:"static"};


export default function map(){
    const{isLoaded}=useLoadScript({googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string})
    if(!isLoaded) return <div>loading</div>;
    return <Map/>
}


function Map(){
    return (<div className="mapDiv">
    <GoogleMap zoom={10} center={{lat:44, lng:-80}} mapContainerClassName='penisballs'></GoogleMap></div>)
}