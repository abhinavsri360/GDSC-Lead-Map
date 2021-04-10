import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkIcon from '@material-ui/icons/Link'
import data from './json/worldData'
import Grid from '@material-ui/core/Grid'
//import data from './json/worldData'
//import L from 'leaflet'

//import source from '../profiles/one.md'
import one from '../photos/one.png'

class map extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //         world: []
    //     }
    // }

    // componentDidMount() {
    //     this.setState({ world: data })
    // }
    
    render() {
        if(data.length === 0)
            return <div />

        const pugs = data.length === 0 ? [] : (
            data.map((item) => {
            var temp = []
            temp.push(item.latitude)
            temp.push(item.longitude)
            return (
            <Marker key={item.url} position={temp}>
                <Popup>
                    <Card style={{ alignItems: 'center' }}>
                        <CardImg style={{ height: '125px', width: '125px', borderRadius: '50%' }} top src={item.photo} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">{item.name}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{item.chapterName}</CardSubtitle>
                            <CardText>{item.bio}</CardText>
                            <Grid container direction="row">
                                <Grid item xs={3}>
                                <GitHubIcon style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); window.location.href=item.github }} />
                                </Grid>
                                <Grid item xs={3}>
                                <LinkedInIcon style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); window.location.href=item.linkedin }} />
                                </Grid>
                                <Grid item xs={3}>
                                <TwitterIcon style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); window.location.href=item.twitter }} />
                                </Grid>
                                <Grid item xs={3}>
                                <LinkIcon style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); window.location.href=item.portfolio }} />
                                </Grid>
                            </Grid>
                            <Button onClick={(e) => { e.preventDefault(); window.location.href=item.url }}>Chapter Link</Button>
                        </CardBody>
                    </Card>
                </Popup>
            </Marker>
            )
        })
        )
        //console.log(data)
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
