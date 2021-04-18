import React from "react";
import { Jumbotron, Button } from "reactstrap";
import GitHubButton from "react-github-btn";
import Grid from "@material-ui/core/Grid";
import data from "./json/worldData";

const jumbotron = (props) => {
  return (
    <div>
      <Jumbotron className='dark-jmode'>
        <h1 className="display-3">GDSC Lead Map &lt;&gt;</h1>
        <p className="lead">
          Google Developer Student Club Leads are passionate leaders at their
          university who are dedicated to helping their peers learn and connect.
          These Leads may be pursuing various undergraduate or graduate
          university degrees but have a good foundational knowledge of software
          development concepts.
        </p>
        <hr className="my-2" />
        <p>
          Google collaborates with Leads and supports them as they start and
          grow their on-campus community.
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
        <Grid container direction="row">
          <Grid item>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=abhinavsri360&repo=GDSC-Lead-Map&type=star&count=true&size=large"
              frameBorder="0"
              scrolling="0"
              width="170"
              height="30"
              title="GitHub"
            ></iframe>
          </Grid>
          <Grid item>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=abhinavsri360&repo=GDSC-Lead-Map&type=watch&count=true&size=large&v=2"
              frameBorder="0"
              scrolling="0"
              width="170"
              height="30"
              title="GitHub"
            ></iframe>
          </Grid>
          <Grid item>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=abhinavsri360&repo=GDSC-Lead-Map&type=fork&count=true&size=large"
              frameBorder="0"
              scrolling="0"
              width="170"
              height="30"
              title="GitHub"
            ></iframe>
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={1}>
          <Grid item>
            <GitHubButton
              href="https://github.com/abhinavsri360"
              data-color-scheme="no-preference: light; light: light; dark: dark;"
              data-size="large"
              data-show-count="true"
              aria-label="Follow @abhinavsri360 on GitHub"
            >
              Follow @abhinavsri360
            </GitHubButton>
          </Grid>
          <Grid item>
            <GitHubButton
              href="https://github.com/srilaasya"
              data-color-scheme="no-preference: light; light: light; dark: dark;"
              data-size="large"
              data-show-count="true"
              aria-label="Follow @srilaasya on GitHub"
            >
              Follow @srilaasya
            </GitHubButton>
          </Grid>
          <Grid item>
            <GitHubButton
              href="https://github.com/AravindVNair99"
              data-color-scheme="no-preference: light; light: light; dark: dark;"
              data-size="large"
              data-show-count="true"
              aria-label="Follow @AravindVNair99 on GitHub"
            >
              Follow @AravindVNair99
            </GitHubButton>
          </Grid>
          <Grid item>
            <GitHubButton
              href="https://github.com/helios027"
              data-color-scheme="no-preference: light; light: light; dark: dark;"
              data-size="large"
              data-show-count="true"
              aria-label="Follow @helios027 on GitHub"
            >
              Follow @helios027
            </GitHubButton>
          </Grid>
        </Grid>
        <Grid
          item
          style={{
            color: "black",
            cursorType: "pointer",
            borderRadius: 4,
            padding: 5,
            paddingLeft: 7,
            paddingRight: 7,
            width: "fit-content",
            display: "flex",
            backgroundImage: "linear-gradient(to bottom,#fcfcfc 0,#eee 100%)",
            border: "1px solid #d5d5d5",
            alignItems: "center",
          }}
        >
          <p style={{ margin: 0, fontSize: 12 }}>
            <strong>Leads count: {data.length}</strong>
          </p>
        </Grid>{" "}
        {/* This shows the total count of leads on this platform*/}
      </Jumbotron>
    </div>
  );
};

export default jumbotron;
