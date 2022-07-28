import React, { Component } from 'react';
import Banner from './components/Banner';
import TextField from './components/TextField';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <TextField label="Nome" placeholder="Digite seu nome"/>
        <TextField label="Cargo" placeholder="Digite seu cargo"/>
        <TextField label="Imagem" placeholder="Digite a url da imagem"/>
      </div>
    );
  }
}

export default App;
