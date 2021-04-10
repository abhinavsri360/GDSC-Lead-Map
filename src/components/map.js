import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
//import Button from '@material-ui/core/Button'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
//import L from 'leaflet'

//import images [Need a better alternative]
import one from '../photos/one.png'

class map extends Component {
    // const myIcon = L.icon({
    //   iconUrl: 'dirrections_bus',
    //   iconSize: [64,64]
    // });
    render() {
        return (
            <MapContainer style={{ height: '75vh' }} center={[28.5355161, 77.3910265]} zoom={7} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[28.5355161, 77.3910265]}>
                    <Popup>
                    <Card>
                        <CardImg top width="100%" src={one} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">Card title</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    </Popup>
                </Marker>
            </MapContainer>
        )
    }
}

export default map
