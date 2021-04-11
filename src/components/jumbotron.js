import React from "react";
import {Jumbotron, Button} from "reactstrap";
import GitHubButton from "react-github-btn";

const jumbotron = (props) => {
	return (
		<div>
			<Jumbotron>
				<h1 className="display-3">GDSC Lead Map &lt;&gt;</h1>
				<p className="lead">
					Google Developer Student Club Leads are passionate leaders
					at their university who are dedicated to helping their peers
					learn and connect. These Leads may be pursuing various
					undergraduate or graduate university degrees but have a good
					foundational knowledge of software development concepts.
				</p>
				<hr className="my-2" />
				<p>
					Google collaborates with Leads and supports them as they
					start and grow their on-campus community.
				</p>
				<p className="lead">
					<Button
						color="primary"
						onClick={(e) => {
							e.preventDefault();
							window
								.open(
									"https://developers.google.com/community/dsc/leads",
									"_blank"
								)
								.focus();
						}}
					>
						Learn More!
					</Button>
				</p>
				<iframe
					src="https://ghbtns.com/github-btn.html?user=abhinavsri360&repo=GDSC-Lead-Map&type=star&count=true&size=large"
					frameBorder="0"
					scrolling="0"
					width="170"
					height="30"
					title="GitHub"
				></iframe>
				<iframe
					src="https://ghbtns.com/github-btn.html?user=abhinavsri360&repo=GDSC-Lead-Map&type=watch&count=true&size=large&v=2"
					frameBorder="0"
					scrolling="0"
					width="170"
					height="30"
					title="GitHub"
				></iframe>
				<iframe
					src="https://ghbtns.com/github-btn.html?user=abhinavsri360&repo=GDSC-Lead-Map&type=fork&count=true&size=large"
					frameBorder="0"
					scrolling="0"
					width="170"
					height="30"
					title="GitHub"
				></iframe>
				<br />
				<GitHubButton
					href="https://github.com/abhinavsri360"
					data-color-scheme="no-preference: light; light: light; dark: dark;"
					data-size="large"
					data-show-count="true"
					aria-label="Follow @abhinavsri360 on GitHub"
				>
					Follow @abhinavsri360
				</GitHubButton>
				<GitHubButton
					href="https://github.com/srilaasya"
					data-color-scheme="no-preference: light; light: light; dark: dark;"
					data-size="large"
					data-show-count="true"
					aria-label="Follow @srilaasya on GitHub"
				>
					Follow @srilaasya
				</GitHubButton>
				<GitHubButton
					href="https://github.com/AravindVNair99"
					data-color-scheme="no-preference: light; light: light; dark: dark;"
					data-size="large"
					data-show-count="true"
					aria-label="Follow @AravindVNair99 on GitHub"
				>
					Follow @AravindVNair99
				</GitHubButton>
				<GitHubButton
					href="https://github.com/helios027"
					data-color-scheme="no-preference: light; light: light; dark: dark;"
					data-size="large"
					data-show-count="true"
					aria-label="Follow @helios027 on GitHub"
				>
					Follow @helios027
				</GitHubButton>
			</Jumbotron>
		</div>
	);
};

export default jumbotron;
