import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const jumbotron = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">GDSC Lead Map &lt;&gt;</h1>
        <p className="lead">Google Developer Student Club Leads are passionate leaders at their university who are dedicated to helping their peers learn and connect. These Leads may be pursuing various undergraduate or graduate university degrees but have a good foundational knowledge of software development concepts.</p>
        <hr className="my-2" />
        <p>Google collaborates with Leads and supports them as they start and grow their on-campus community.</p>
        <p className="lead">
          <Button color="primary" onClick={(e) => { e.preventDefault(); window.location.href='https://developers.google.com/community/dsc/leads'}}>Learn More!</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default jumbotron;