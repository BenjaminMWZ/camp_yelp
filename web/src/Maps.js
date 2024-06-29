import GoogleMapReact from 'google-map-react';
import React, {useState} from 'react';

// Maps component
const Maps = ({latlng, zoom}) => {
    const [key] = useState('AIzaSyAOK4XqfpTcYa1b0d2uPiSPP8iaTY3ejlU');

    //{lat:0, lng:0}
    const [inLatLng, setLatLng] = useState(latlng);
    const [inZoom, setZoom] = useState(zoom);

    return (
        <div style={{height: '300px'}}>
            <GoogleMapReact
                bootstrapURLKeys={{key}}
                center={inLatLng}
                defaultZoom={inZoom}
            >
                <ReactMapPointComponent 
                    lat={inLatLng.lat} 
                    lng={inLatLng.lng}
                    text="My Marker"
                />

            </GoogleMapReact>
        </div>
    );
}

const ReactMapPointComponent = () => {
    const markerStyle={
        border: '1px solid white',
        borderRadius: '50%',
        height: '10px',
        width: '10px',
        backgroundColor: 'red',
        cursor : 'pointer',
        zIndex: 10,
    }
    return (
        <div style={markerStyle}/>
    )

}
export default Maps;