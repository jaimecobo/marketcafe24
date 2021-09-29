import React, { Component } from 'react';
import '../css/Map.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import pointer from '../images/edited/00_Pointer04_166x253.png'




class MapContainer extends Component {
    


    render() {
        const coords = {
            // lat: 40.42365763166418,
            // lng: -3.707617356858952
            // lat: 40.42301687,
            // lng: -3.70757773
            lat: 40.423170,
            lng: -3.7076
          };

        //    const marker = new google.maps.Marker({
        //     position: coords,
        //     map: map,
        //     icon: image,
        //     animation: google.maps.Animation.BOUNCE
        // }); 
    
        return (

            <div id="map" className="container-fluid">
                
                <Map
                    className={'map'}
                    initialCenter={coords}
                    google={this.props.google}
                    // style={{width: 500, height: 500, position: 'relative'}}
                    zoom={19}
                    
                    >
                    <Marker 
                        position={coords} 
                        title={'MARKET CAFÉ 24 - SAN BERNARDO 33'}
                        icon={pointer}
                        animation= {this.props.google.maps.Animation.BOUNCE}
                        >
                            {/* <InfoWindow
          marker={this.props.google.maps.activeMarker}
          visible={this.props.google.maps.showingInfoWindow}>
            <div>
              <h1>'MARKET CAFÉ 24 - SAN BERNARDO 33'</h1>
            </div>
        </InfoWindow> */}
                        </Marker>
                        
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



