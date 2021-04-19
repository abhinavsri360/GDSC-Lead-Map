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
                    <Card className='dark-mode' style={{ alignItems: 'center', height: '100%', paddingTop: '5%' }}>
                        <CardImg style={{ height: '125px', width: '125px', borderRadius: '50%' }} top src={item.photo} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">{item.name}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{item.chapterName}</CardSubtitle>
                            <CardText>{item.bio}</CardText>
                            <Grid style={{ alignItems: 'center' }} justify='center' container direction="row">
                                {item.github ? (
                                    <Grid item xs={2}>
                                        <GitHubIcon style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); window.open(item.github, "_blank").focus();}} />
                                    </Grid>
                                ): <></>}
                                {item.linkedin ? (
                                    <Grid item xs={2}>
                                        <LinkedInIcon style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); window.open(item.linkedin, "_blank").focus(); }} />
                                    </Grid>
                                ) : <></>}
                                {item.twitter ? (
                                    <Grid item xs={2}>
                                        <TwitterIcon style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); window.open(item.twitter, "_blank").focus(); }} />
                                    </Grid>
                                ) : <></>}
                                {item.portfolio ? (
                                    <Grid item xs={2}>
                                        <LinkIcon style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); window.open(item.portfolio, "_blank").focus(); }} />
                                    </Grid>
                                ) : <></>}
                                <Grid item xs={2}>
                                    <Button style={{ background: 'transparent', color: 'inherit', borderColor: '#e3e3e3' }} onClick={(e) => { e.preventDefault(); window.open(item.url, "_blank").focus(); }}>&lt;&gt;</Button>
                                </Grid>
                            </Grid>
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
                    <Card className='dark-mode' style={{ alignItems: 'center' }}>
                        <CardImg style={{ height: '125px', width: '125px', borderRadius: '50%' }} top src={item.photo} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">{item.name}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{item.chapterName}</CardSubtitle>
                            <CardText>{item.bio}</CardText>
                            <Grid style={{ alignItems: 'center' }} justify='center' container direction="row">
                                {item.github ? (
                                    <Grid item xs={2}>
                                        <GitHubIcon style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); window.open(item.github, "_blank").focus();}} />
                                    </Grid>
                                ): <></>}
                                {item.linkedin ? (
                                    <Grid item xs={2}>
                                        <LinkedInIcon style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); window.open(item.linkedin, "_blank").focus(); }} />
                                    </Grid>
                                ) : <></>}
                                {item.twitter ? (
                                    <Grid item xs={2}>
                                        <TwitterIcon style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); window.open(item.twitter, "_blank").focus(); }} />
                                    </Grid>
                                ) : <></>}
                                {item.portfolio ? (
                                    <Grid item xs={2}>
                                        <LinkIcon style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); window.open(item.portfolio, "_blank").focus(); }} />
                                    </Grid>
                                ) : <></>}
                                <Grid item xs={2}>
                                    <Button style={{ background: 'transparent', color: 'inherit', borderColor: '#e3e3e3' }} onClick={(e) => { e.preventDefault(); window.open(item.url, "_blank").focus(); }}>&lt;&gt;</Button>
                                </Grid>
                            </Grid>
                        </CardBody>
                    </Card>
                </Popup>
            </Marker>
            )
        })
        )
        return (
            <>
                <MapContainer style={{ height: '75vh' }} center={[17.5739, 17.5739]} zoom={3} scrollWheelZoom={false}>
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
