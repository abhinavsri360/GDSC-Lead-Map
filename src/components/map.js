import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkIcon from '@material-ui/icons/Link'
import data from './json/worldData.json'
//import L from 'leaflet'

//import source from '../profiles/one.md'
import one from '../photos/one.png'

class map extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            world: []
        }
    }

    componentDidMount() {
        this.setState({ world: data })
    }
    
    render() {
        if(this.state.world.length === 0)
            return <div />

        const pugs = this.state.world.length === 0 ? [] : (
            this.state.world.map((item) => {
            console.log("I am hereeeeeeeeeee", item.latitude)
            var temp = []
            temp.push(item.latitude)
            temp.push(item.longitude)
            return (
            <Marker key={item.url} position={temp}>
                <Popup>
                    <Card style={{ alignItems: 'center' }}>
                        <CardImg style={{ height: '100px', width: '100px', borderRadius: '50%' }} top src={one} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">{item.name}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{item.chapterName}</CardSubtitle>
                            <CardText>{item.bio}</CardText>
                            <GitHubIcon /><LinkedInIcon /><TwitterIcon /><LinkIcon /><br />
                            <Button onClick={(e) => { e.preventDefault(); window.location.href=item.url }}>Chapter Link</Button>
                        </CardBody>
                    </Card>
                </Popup>
            </Marker>
            )
        })
        )
        //console.log(pugs)
        return (
            <MapContainer style={{ height: '75vh' }} center={[28.5355161, 77.3910265]} zoom={7} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {pugs}
            </MapContainer>
        )
    }
}

export default map
