import React, { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Form';
import Time from './components/Time';


function App() {

  const [participantes, setParticipantes] = useState([]);

  const aoNovoParticipanteAdicionado = (participante) => {
    setParticipantes([...participantes, participante]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoParticipanteCadastrado={participante => aoNovoParticipanteAdicionado(participante)}/>
      <Time nome="Time 1"/>
      <Time nome="Time 2"/>
      <Time nome="Time 3"/>
  </div>
  );
}

export default App;
