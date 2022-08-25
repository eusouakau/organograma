import React, { useState }from "react";
import ListaSuspensa from "../ListaSuspensa";
import TextField from "../TextField";
import Botao from "../Botao";
import "./Formulario.css";

const Formulario = (props) => {
  const itens = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [item, setItem] = useState('');


  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoParticipanteCadastrado({
      nome, cargo, imagem, item
    })
  }
  
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField 
          obrigatorio={true} 
          label="Nome" 
          placeholder="Digite seu nome" 
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <TextField 
          obrigatorio={true}
          label="Cargo" 
          placeholder="Digite seu cargo" 
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
          />
        <TextField 
          label="Imagem" 
          placeholder="Digite a url da imagem" 
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
          />
        <ListaSuspensa 
          obrigatorio={true} 
          label="Time" 
          itens={itens} 
          valor={item}
          aoAlterado={valor => setItem(valor)}
        />
        <Botao>Criar</Botao>
      </form>
    </section>
  );
};

export default Formulario;
