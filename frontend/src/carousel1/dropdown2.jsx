import React, { useState } from 'react';
import './dropdown2.scss';

export default function Dropdown2() {
  const [opcao, setOpcao] = useState();

  const escolha = (event) => {
    setOpcao(event.target.value);
  };

  return (
    <div>
      <select className='dropdown2' value={opcao} onChange={escolha}>
        <option value="" className='opcao-placeholder'>Curso de Interesse</option>
        <option value="opcao1">Curso Técnico em Administração</option>
        <option value="opcao2">Curso Técnico em Comunicação Visual</option>
        <option value="opcao3">Curso Técnico em Informática</option>
        <option value="opcao4">Curso de Qualificação Profissional em Eletromecânica de Autos</option>
        <option value="opcao5">Curso de Qualificação Profissional em Automação Residencial e Robótica</option>
        <option value="opcao6">Curso Livre de Inglês Teens I - In Action (Diurno)</option>
        <option value="opcao7">Curso Livre de Inglês Teens II - In Action (Diurno)</option>
        <option value="opcao8">Curso Livre de Inglês Básico ao Pré-Intermediário - English in Action (Diurno)</option>
        <option value="opcao9">Curso Livre de Inglês Básico - English in Action(Noturno)</option>
        <option value="opcao10">Curso Livre de Inglês Pré-Intermediário - English in Action (Noturno)</option>
        <option value="opcao11">Curso Livre de Inglês Intermediário - English in Action(Sábados)</option>
        <option value="opcao12">Curso Livre de Inglês Avançado - English in Action(Sábado)</option>
        <option value="opcao13">Curso Livre de Informática Básica - Excel Avançado (Noturno)</option>
        <option value="opcao13">Curso Livre de Eletricista Instalador (Noturno)</option>
      </select> 
    </div>
  );
}