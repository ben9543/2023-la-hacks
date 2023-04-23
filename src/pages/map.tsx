const containerStyle = {
 width: "100%",
 height: "100vh",
};

import { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
 getGeocode,
 getLatLng,
} from "use-places-autocomplete";
import {
 Combobox,
 ComboboxInput,
 ComboboxPopover,
 ComboboxList,
 ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

export default function Places() {
 const { isLoaded } = useLoadScript({
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  libraries: ["places"],
 });

 if (!isLoaded) return <div>Loading...</div>;
 return <Map />;
}

function Map() {
 const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
 const [selected, setSelected] = useState(null);

 return (
  <>
   <div className="places-container">
    <PlacesAutocomplete setSelected={setSelected} />
   </div>
  </>
 );
}

const PlacesAutocomplete = ({ setSelected }) => {
 const {
  ready,
  value,
  setValue,
  suggestions: { status, data },
  clearSuggestions,
 } = usePlacesAutocomplete();

 const handleSelect = async (address) => {
  setValue(address, false);
  clearSuggestions();
  console.log(address);
  const results = await getGeocode({ address });
  const { lat, lng } = await getLatLng(results[0]);
  setSelected({ lat, lng });
 };

 return (
    <Combobox onSelect={handleSelect} className="bg-base-100 h-1/3">
   <ComboboxInput
    value={value}
    onChange={(e) => setValue(e.target.value)}
    disabled={!ready}
    className="w-3/6 text-center mx-auto flex bg-neutral "
    placeholder="Wya neighbor"
   />
   <ComboboxPopover>
    <ComboboxList>
     {status === "OK" &&
      data.map(({ place_id, description }) => (
       <ComboboxOption key={place_id} value={description} className=""/>
      ))}
    </ComboboxList>
   </ComboboxPopover>
  </Combobox>
 );
};


  {/* <Combobox onSelect={handleSelect} >
   <ComboboxInput
    value={value}
    onChange={(e) => setValue(e.target.value)}
    disabled={!ready}
    className="w-3/6 text-center m-auto flex"
    placeholder="Search an address"
   />
   <ComboboxPopover>
    <ComboboxList>
     {status === "OK" &&
      data.map(({ place_id, description }) => (
       <ComboboxOption key={place_id} value={description} />
      ))}
    </ComboboxList>
   </ComboboxPopover>
  </Combobox>*/}