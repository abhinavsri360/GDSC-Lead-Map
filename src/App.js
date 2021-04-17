import React from "react";
import Grid from "@material-ui/core/Grid";
import GithubCorner from "react-github-corner";

//Components
import Map from "./components/map";
import Jumbotron from "./components/jumbotron";
import Darkmode from 'darkmode-js'
const options = {
	bottom: '5px', // default: '32px'
	right: 'unset', // default: '32px'
	left: '5px', // default: 'unset'
	time: '0.5s', // default: '0.3s'
	mixColor: '#fff', // default: '#fff'
	backgroundColor: '#fff',  // default: '#fff'
	buttonColorDark: '#100f2c',  // default: '#100f2c'
	buttonColorLight: '#fff', // default: '#fff'
	saveInCookies: true, // default: true,
	label: '🌓', // default: ''
	autoMatchOsTheme: true // default: true
}

function App() {
	new Darkmode(options).showWidget();
	return (
		<>
			<div className="landing-page d-flex justify-content-center ">
				<GithubCorner
					href="https://github.com/abhinavsri360/GDSC-Lead-Map"
					target="_blank"
					size={100}
				/>
				<Grid
					style={{paddingTop: "1%"}}
					alignItems="center"
					justify="center"
					container
					spacing={0}
				>
					<Grid item xs={11}>
						<Jumbotron />
					</Grid>
					<Grid item xs={11}>
						<Map />
					</Grid>
				</Grid>
			</div>
		</>
	);
}

export default App;
