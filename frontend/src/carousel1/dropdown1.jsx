import React, { useState } from 'react';
import './dropdown1.scss';

export default function Dropdown1() {
  const [opcao, setOpcao] = useState();

  const escolha = (event) => {
    setOpcao(event.target.value);
  };

  return (
    <div>
      <select className='dropdown1' value={opcao} onChange={escolha}>
        <option value="" className='opcao-placeholder'>Escolaridade</option>
        <option value="opcao1">Ensino Fundamental</option>
        <option value="opcao2">Ensino Médio</option>
        <option value="opcao3">Ensino Superior</option>
        <option value="opcao4">Pós Graduação</option>
        <option value="opcao5">Mestrado</option>
        <option value="opcao6">Doutorado</option>
      </select> 
    </div>
  );
}