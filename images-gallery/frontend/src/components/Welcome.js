import React from 'react';
import { Button } from 'react-bootstrap';

const Welcome = () => (
  <div className="jumbotron">
    <h1>Images Gallery</h1>
    <p>
      This is a simple application that retrieves photos using Unsplash API. In
      order to start enter any search term in the input field.
    </p>
    <p>
      <Button variant="primary" href="https://unsplash.com" target="blank">
        Learn More
      </Button>
    </p>
  </div>
);

export default Welcome;
