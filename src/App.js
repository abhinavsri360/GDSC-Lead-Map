import React from 'react'
import Grid from '@material-ui/core/Grid'
import GithubCorner from 'react-github-corner'

//Components
import Map from './components/map'
import Jumbotron from './components/jumbotron'

function App() {
  return (
    <>
      <div className='landing-page d-flex justify-content-center '>
        <GithubCorner href="https://github.com/abhinavsri360/L_Map" size={100} />
        <Grid style={{ paddingTop: '1%' }} alignItems='center' justify='center' container spacing={0}>
          <Grid item xs={11}>
            <Jumbotron />
          </Grid>
          <Grid item xs={11}>
            <Map />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default App;
