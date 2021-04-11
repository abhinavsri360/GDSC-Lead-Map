import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkIcon from '@material-ui/icons/Link'
import Grid from '@material-ui/core/Grid'

class searchedLeads extends Component {
    render() {
        var leadsearch = this.props.data
        const cards = leadsearch.length === 0 ? [] : (
            leadsearch.map((item) => {
                return (
                <Grid item xs={12} md={3} style={{ padding: '1%' }} key={item.url}>
                    <Card style={{ alignItems: 'center' }}>
                        <CardImg style={{ height: '125px', width: '125px', borderRadius: '50%' }} top src={item.photo} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">{item.name}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{item.chapterName}</CardSubtitle>
                            <CardText>{item.bio}</CardText>
                            <Grid style={{ padding: '5%' }} container direction="row">
                                <Grid item xs={3}>
                                    {item.github ? (
                                        <GitHubIcon style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); window.open(item.github, "_blank").focus();}} />
                                    ) : <></>}
                                </Grid>
                                <Grid item xs={3}>
                                    {item.linkedin ? (
                                        <LinkedInIcon style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); window.open(item.linkedin, "_blank").focus(); }} />
                                    ) : <></>}
                                </Grid>
                                <Grid item xs={3}>
                                    {item.twitter ? (
                                        <TwitterIcon style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); window.open(item.twitter, "_blank").focus();}} />
                                    ) : <></>}
                                </Grid>
                                <Grid item xs={3}>
                                    {item.portfolio ? (
                                        <LinkIcon style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); window.open(item.portfolio, "_blank").focus();}} />
                                    ) : <></>}
                                </Grid>
                            </Grid>
                            <Button onClick={(e) => { e.preventDefault(); window.open(item.url, "_blank").focus();}}>Chapter Link</Button>
                        </CardBody>
                    </Card>
                </Grid>
                )
            })
        )

        const pugs = leadsearch.length === 0 ? [] : (
            leadsearch.map((item) => {
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
                            <Grid style={{ padding: '5%' }} container direction="row">
                                <Grid item xs={3}>
                                    {item.github ? (
                                        <GitHubIcon style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); window.open(item.github, "_blank").focus();}} />
                                    ) : <></>}
                                </Grid>
                                <Grid item xs={3}>
                                    {item.linkedin ? (
                                        <LinkedInIcon style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); window.open(item.linkedin, "_blank").focus(); }} />
                                    ) : <></>}
                                </Grid>
                                <Grid item xs={3}>
                                    {item.twitter ? (
                                        <TwitterIcon style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); window.open(item.twitter, "_blank").focus(); }} />
                                    ) : <></>}
                                </Grid>
                                <Grid item xs={3}>
                                    {item.portfolio ? (
                                        <LinkIcon style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); window.open(item.portfolio, "_blank").focus(); }} />
                                    ) : <></>}
                                </Grid>
                            </Grid>
                            <Button onClick={(e) => { e.preventDefault(); window.open(item.url, "_blank").focus(); }}>Chapter Link</Button>
                        </CardBody>
                    </Card>
                </Popup>
            </Marker>
            )
        })
        )
        return (
            <>
                <MapContainer style={{ height: '75vh' }} center={[28.5355161, 77.3910265]} zoom={5} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {pugs}
                </MapContainer>
                <Grid container style={{ padding: '1%' }}>
                    {cards}
                </Grid>
            </>
        )
    }
}

export default searchedLeads
