import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid";
import GithubCorner from "react-github-corner";

//Components
import Map from "./components/map";
import Jumbotron from "./components/jumbotron";
import Button from 'react-bootstrap/Button'

class App extends Component {
	clickMe(e) {
		e.preventDefault()
		//console.log(document.getElementsByTagName('jumbotron').style)
		if(document.getElementsByTagName('body')[0].style.backgroundColor === 'rgb(18, 18, 18)'){
			document.getElementsByTagName('body')[0].style.backgroundColor = 'white'
			document.getElementsByClassName('jumbotron')[0].style.backgroundColor = ''
			document.getElementsByClassName('jumbotron')[0].style.color = 'black'
			document.getElementsByClassName('darkNav')[0].style.backgroundColor = '#1769aa'
			document.getElementsByClassName('btn btn-primary')[0].style.backgroundColor = '#007bff'
			document.getElementsByClassName('btn btn-primary')[0].style.borderColor = '#007bff'
			document.getElementsByClassName('d-none d-md-block')[0].style.backgroundColor = 'black'
			var els = document.getElementsByClassName('dark-mode')
			Array.prototype.forEach.call(els, function(element) {
				element.style.borderColor = '#e3e3e3'
				element.style.color = 'black'
				element.style.backgroundColor = 'white'
			});
			return;
		}
		document.getElementsByTagName('body')[0].style.backgroundColor = '#121212'
		document.getElementsByClassName('jumbotron')[0].style.backgroundColor = '#303030'
		document.getElementsByClassName('jumbotron')[0].style.color = 'white'
		document.getElementsByClassName('darkNav')[0].style.backgroundColor = '#262626'
		document.getElementsByClassName('darkNav')[0].style.color = '#262626'
		document.getElementsByClassName('btn btn-primary')[0].style.backgroundColor = '#262626'
		document.getElementsByClassName('btn btn-primary')[0].style.borderColor = '#262626'
		document.getElementsByClassName('d-none d-md-block')[0].style.backgroundColor = 'white'
		var els1 = document.getElementsByClassName('dark-mode')
		Array.prototype.forEach.call(els1, function(element) {
			element.style.borderColor = '#e3e3e3'
			element.style.color = 'white'
			element.style.backgroundColor = '#232323'
		});
	}
	render() {
		return (
			<div className="landing-page d-flex justify-content-center">
				<Button onClick={(e) => this.clickMe(e)} className='d-none d-md-block' style={{ padding: '0', position: 'fixed', bottom: '10px', borderRadius: '50%', left: '10px', width: '40px', height: '40px', backgroundColor: 'black' }}>🌗</Button>
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
		)
	}
}

export default App
