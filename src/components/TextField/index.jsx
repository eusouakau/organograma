import React from 'react';
import './CampoTexto.css';

const CampoTexto = (props) => {

  const aoDigitar = (evento) => {
    props.aoAlterado(evento.target.value)
  }
    return (
      <div className="text-field">
        <label>{props.label}</label>
        <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder} />
      </div>
    );
  }
  
export default CampoTexto;