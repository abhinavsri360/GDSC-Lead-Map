import React from 'react'
import Grid from '@material-ui/core/Grid'

//Components
import Map from './components/map'
import Jumbotron from './components/jumbotron'

function App() {
  return (
    <>
      <Grid style={{ paddingTop: '1%' }} alignItems='center' justify='center' container spacing={0}>
        <Grid item xs={11}>
          <Jumbotron />
        </Grid>
        <Grid item xs={11}>
          <Map />
        </Grid>
      </Grid>
    </>
  )
}

export default App;
