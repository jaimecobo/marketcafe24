import React, { Component } from 'react';
import '../css/Map.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';





class MapContainer extends Component {
    


    render() {
        const coords = {
            lat: 40.42365763166418,
            lng: -3.707617356858952
          };
    
        return (

            <div id="map">
                
                <Map
                    initialCenter={coords}
                    google={this.props.google}
                    // style={{width: 500, height: 500, position: 'relative'}}
                    zoom={19}
                    >
                    {/* <Circle
                        radius={1200}
                        center={coords}
                        onMouseover={() => console.log('mouseover')}
                        onClick={() => console.log('click')}
                        onMouseout={() => console.log('mouseout')}
                        strokeColor='transparent'
                        strokeOpacity={0}
                        strokeWeight={5}
                        fillColor='#FF0000'
                        fillOpacity={0.2}
                    /> */}
                    </Map>

                
            </div>

);
}
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
  })(MapContainer)



