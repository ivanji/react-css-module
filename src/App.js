import React, { Component } from 'react';

import Title from './Title/Title';
import Grid from './Grid/Grid';
import Background from './Background/Background';
import Rocket from './Rocket/Rocket';
import Smoke from './Rocket/Smoke';


import facts from './NASA_facts.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      facts,
    }
  }

  render() {
    return (
      <div>
        <Title />
        <Grid facts={this.state.facts} />
        <Background />
        <Rocket />
        <Smoke />
      </div>
    );
  }
}

export default App;
