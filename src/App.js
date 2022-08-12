import React, { Component } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Form';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Formulario/>
    </div>
    );
  }
}

export default App;
