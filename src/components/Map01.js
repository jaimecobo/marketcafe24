import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: 40.42365763166418,
  lng: -3.707617356858952
};

function Map01() {

    console.log("APIKEY IS = " + process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
    console.log("ENV IS = " + process.env.REACT_APP_API_KEY)
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps';

  return (
    <div className="Map01">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={19}
      ></GoogleMap>
    </div>
  );
}

export default Map01;