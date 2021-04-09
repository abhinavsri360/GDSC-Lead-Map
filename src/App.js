import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Button from '@material-ui/core/Button'
//import L from 'leaflet'

function App() {
  // const myIcon = L.icon({
  //   iconUrl: 'dirrections_bus',
  //   iconSize: [64,64]
  // });
  return (
    <MapContainer style={{ height: '100vh' }} center={[51.505, -0.09]} zoom={20} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          <h3>This is the lead of nowhere! Comeonnnn!</h3>
          <Button variant="contained" color="primary">
            Read about me :))
          </Button>
        </Popup>
      </Marker>
      <Marker position={[28.5355161, 77.3910265]}>
        <Popup>
          OMG!
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default App;
