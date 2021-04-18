import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";

//components
import data from "./json/worldData";
import SearchedLeads from "./searchedLeads";

class map extends Component {
	constructor(props) {
		super(props);

		this.state = {
			search: "",
			region: "",
			skills: "",
			batch: "",
			world: [],
		};
	}

	handlechange(e) {
		this.setState({
			[e.target.name]: e.target.value,
			world: data.filter((lead) =>
				JSON.stringify(lead)
					.toLowerCase()
					.includes(e.target.value.toLowerCase())
			),
		});
	}

	handleregion(e) {
		if(parseInt(e.target.value) === 0){
			this.setState({
				[e.target.name]: e.target.value,
				world: data
			})
			return
		}
		var fil = data.filter((ele) => ele.region === e.target.value)
		this.setState({
			[e.target.name]: e.target.value,
			world: fil
		})
	}

	handlebatch(e) {
		if(parseInt(e.target.value) === 0){
			this.setState({
				[e.target.name]: e.target.value,
				world: data
			})
			return
		}
		var fil = data.filter((ele) => ele.batch === parseInt(e.target.value))
		this.setState({
			[e.target.name]: e.target.value,
			world: fil
		})
	}

	handleskills(e) {
		if(parseInt(e.target.value) === 0){
			this.setState({
				[e.target.name]: e.target.value,
				world: data
			})
			return
		}
		var fil = data.filter((ele) => ele.skills.find(arr => arr === e.target.value))
		this.setState({
			[e.target.name]: e.target.value,
			world: fil
		})
	}

	componentDidMount() {
		this.setState({
			world: data,
		});
	}

	render() {
		return (
			<>
				<Grid
					className='darkNav'
					container
					direction="row"
					style={{padding: "1%", backgroundColor: "#1769aa"}}
				>
					<Grid item xs={12} md={2} style={{padding: "5px"}}>
						<input
							autoComplete="off"
							placeholder="Search for a Lead"
							style={{width: "100%", padding: "3px"}}
							name="search"
							onChange={(e) => this.handlechange(e)}
						/>
					</Grid>
					<Grid item xs={12} md={5} />
					<Grid item xs={12} md={1} style={{padding: "5px"}}>
						<select
							style={{
								width: "100%",
								backgroundColor: "white",
								padding: "3px",
							}}
							name="batch"
							onChange={(e) => this.handlebatch(e)}
							value={this.state.batch}
						>
							<option value={0}>Batch</option>
							<option value={2019}>2019</option>
							<option value={2020}>2020</option>
						</select>
					</Grid>
					<Grid item xs={12} md={2} style={{padding: "5px"}}>
						<select
							style={{
								width: "100%",
								backgroundColor: "white",
								padding: "3px",
							}}
							name="skills"
							onChange={(e) => this.handleskills(e)}
							value={this.state.skills}
						>
							<option value={0}>Area of Expertise</option>
							<option value="AI/ML">AI/ML</option>
							<option value="App Dev">App Dev</option>
							<option value="Cloud">Cloud</option>
							<option value="UI/UX">UI/UX</option>
							<option value="Web Dev">Web Dev</option>
							<option value="IoT">IoT</option>
							<option value="XR">XR</option>
							<option value="Cybersecurity">Cybersecurity</option>
						</select>
					</Grid>
					<Grid item xs={12} md={2} style={{padding: "5px"}}>
						<select
							style={{
								width: "100%",
								backgroundColor: "white",
								padding: "3px",
							}}
							name="region"
							onChange={(e) => this.handleregion(e)}
							value={this.state.region}
						>
							<option value={0}>Region</option>
							<option value="Africa(Sub-Saharan)">
								Africa(Sub-Saharan)
							</option>
							<option value="Asia">Asia</option>
							<option value="Europe">Europe</option>
							<option value="Middle East">Middle East</option>
							<option value="North Africa">North Africa</option>
							<option value="North America">North America</option>
							<option value="South America">South America</option>
						</select>
					</Grid>
				</Grid>
				<SearchedLeads data={this.state.world.sort((a,b)=>(a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))} />
			</>
		);
	}
}

export default map;
