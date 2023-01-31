import React, { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Form';
import Time from './components/Time';


function App() {

  const itens = [
    {
      nome: 'Item 1',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Item 2',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Item 3',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2'
    },
    {
      nome: 'Item 4',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    {
      nome: 'Item 5',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5'
    },
    {
      nome: 'Item 6',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
      nome: 'Item 7',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    }
  ];

  const [participantes, setParticipantes] = useState([]);

  const aoNovoParticipanteAdicionado = (participante) => {
    setParticipantes([...participantes, participante]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario itens={itens.map(item => item.nome)} aoParticipanteCadastrado={participante => aoNovoParticipanteAdicionado(participante)}/>
      {itens.map(item => <Time key={item.nome} nome={item.nome} corPrimaria={item.corPrimaria} corSecundaria={item.corSecundaria} />)}
  </div>
  );
}

export default App;
