import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkIcon from '@material-ui/icons/Link'
//import L from 'leaflet'

//import source from '../profiles/one.md'
import one from '../photos/one.png'

class map extends Component {
    render() {
        return (
            <MapContainer style={{ height: '75vh' }} center={[28.5355161, 77.3910265]} zoom={7} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[28.5355161, 77.3910265]}>
                    <Popup>
                    <Card style={{ alignItems: 'center' }}>
                        <CardImg style={{ height: '100px', width: '100px', borderRadius: '50%' }} top src={one} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">Name</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Chapter Name</CardSubtitle>
                            <CardText>Bio</CardText>
                            <GitHubIcon /><LinkedInIcon /><TwitterIcon /><LinkIcon /><br />
                            <Button>Chapter Link</Button>
                        </CardBody>
                    </Card>
                    </Popup>
                </Marker>
            </MapContainer>
        )
    }
}

export default map
