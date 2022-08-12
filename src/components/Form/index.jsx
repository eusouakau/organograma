import React from "react";
import ListaSuspensa from "../ListaSuspensa";
import TextField from "../TextField";
import Botao from "../Botao";
import "./Formulario.css";

const Formulario = () => {
  const itens = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField label="Nome" placeholder="Digite seu nome" />
        <TextField label="Cargo" placeholder="Digite seu cargo" />
        <TextField label="Imagem" placeholder="Digite a url da imagem" />
        <ListaSuspensa label="Time" itens={itens} />
        <Botao>Criar</Botao>
      </form>
    </section>
  );
};

export default Formulario;
