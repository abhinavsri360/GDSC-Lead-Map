import React, { Component } from 'react'
import data from './json/worldData'
import Grid from '@material-ui/core/Grid'
import SearchedLeads from './searchedLeads'
//import data from './json/worldData'
//import L from 'leaflet'

//import source from '../profiles/one.md'
//import one from '../photos/one.png'

class map extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            search: '',
            region: '',
            skills: '',
            world: []
        }
    }

    handlechange (e) {
        this.setState({
            [e.target.name]: e.target.value,
            world: data.filter(lead => JSON.stringify(lead).toLowerCase().includes(e.target.value.toLowerCase()))
        })
    }

    componentDidMount() {
        this.setState({
            world: data
        })
    }
    
    render() {
        if(data.length === 0 || this.state.world.length === 0)
            return <div />

        return (
            <>
                <Grid container direction='row' style={{ padding: '1%', backgroundColor: '#1769aa' }}>
                    <Grid item xs={2}>
                        <input placeholder='Search for a Lead' style={{ padding: '5px' }} name='search' onChange={(e) => this.handlechange(e)} />
                    </Grid>
                    <Grid item xs={6} />
                    <Grid item xs={2}>
                        <select style={{ color: '#1769aa', backgroundColor: 'white', padding: '5px' }} name='skills' onChange={(e) => this.handlechange(e)} value={this.state.skills}>
                            <option value=''>Area of Expertise</option>
                            <option value='AI/ML'>AI/ML</option>
                            <option value='App Dev'>App Dev</option>
                            <option value='Cloud'>Cloud</option>
                            <option value='UI/UX'>UI/UX</option>
                            <option value='Web Dev'>Web Dev</option>
                        </select>
                    </Grid>
                    <Grid item xs={1}>
                        <select style={{ color: '#1769aa', backgroundColor: 'white', padding: '5px' }} name='region' onChange={(e) => this.handlechange(e)} value={this.state.region}>
                            <option value=''>Region</option>
                            <option value='Africa(Sub-Saharan)'>Africa(Sub-Saharan)</option>
                            <option value='Asia'>Asia</option>
                            <option value='Europe'>Europe</option>
                            <option value='Middle East'>Middle East</option>
                            <option value='North Africa'>North Africa</option>
                            <option value='North America'>North America</option>
                            <option value='South America'>South America</option>
                        </select>
                    </Grid>
                </Grid>
                <SearchedLeads data={this.state.world} />
            </>
        )
    }
}

export default map
