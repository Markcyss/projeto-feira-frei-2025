import './styleregistro.scss';
import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import freilogo from '../assets/freilogo.webp';
import feiralogo from '../assets/feiralogo.webp';
import Facebook from '../assets/facebookLogo.png';
import Instagram from '../assets/InstagramLogo.png';
import Chrome from '../assets/ChromeLogo.png';
import LinkedIn from '../assets/LinkedInLogo.png';
import AlunoPCInfo from '../assets/AlunoPCInfo.png';

function Registro() {
  const [escolaridade, setEscolaridade] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [divulgacao, setDivulgacao] = useState([]);
  const [formulario, setFormulario] = useState({
    nome: '',
    idade: '',
    cpf: '',
    telefone: '',
    email: '',
    id_escolaridade: '',
    id_curso: '',
    id_divulgacao: '',
    previsao_chegada: '',
    ja_foi_aluno: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

const handleSubmit = async () => {

  const dadosParaEnviar = {
    ...formulario,
    idade: parseInt(formulario.idade),
    id_escolaridade: parseInt(formulario.id_escolaridade),
    id_curso: parseInt(formulario.id_curso),
    id_divulgacao: parseInt(formulario.id_divulgacao),

    ja_foi_aluno: formulario.ja_foi_aluno ? 1 : 0,
  };

  try {
    const res = await fetch('http://localhost:5010/cadastro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dadosParaEnviar),
    });
    if (!res.ok) {
      throw new Error('Erro ao cadastrar');
    }
    alert('Cadastro Realizado!');
    setFormulario({
      nome: '',
      idade: '',
      cpf: '',
      telefone: '',
      email: '',
      id_escolaridade: '',
      id_curso: '',
      id_divulgacao: '',
      previsao_chegada: '',
      ja_foi_aluno: null,
    });
  } catch (err) {
    console.error(err);
    alert('Falha ao cadastrar, verifique se as informações estão inseridas corretamente!');
  }
}


  const fetchData = async (url, setter) => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Erro ao buscar dados de ${url}`);
      const data = await res.json();
      setter(data.registros || []); 
    } catch (err) {
      console.error(err);
      setter([]); 
    }
  };

  useEffect(() => {
    fetchData('http://localhost:5010/escolaridade', setEscolaridade);
    fetchData('http://localhost:5010/curso', setCursos);
    fetchData('http://localhost:5010/divulgacao', setDivulgacao);
  }, []);

  return (
    <div className='registry-container'>
      <header className='registry-header'>
        <div className='logo-container'>
          <Link to={'..'}>
            <img className='logo logo--instituto' src={freilogo} height='50px' />
          </Link>
          <h2 className='registry-title'>
            5° Edição Feira de Profissões Instituto Nossa Senhora de Fátima
          </h2>
          <img className='logo logo--feira' src={feiralogo} height='50px' />
        </div>
      </header>

      <main className='main-registro'>
        <div className='main-title'>
          <h1 className='main-title-text'>Cadastro do Visitante</h1>
        </div>

        <div className='main-registry-list'>
          <div className='main-list-input1'>
            <input
              className='list-input1'
              name='nome'
              placeholder='Nome'
              value={formulario.nome}
              onChange={handleChange}
            />
            <input
              className='list-input1'
              name='idade'
              placeholder='Idade'
              value={formulario.idade}
              onChange={handleChange}
            />
          </div>

          <br />

          <div className='main-list-input1'>
            <input
              className='list-input1'
              name='cpf'
              placeholder='CPF'
              value={formulario.cpf}
              onChange={handleChange}
            />
            <input
              className='list-input1'
              name='telefone'
              placeholder='Telefone'
              value={formulario.telefone}
              onChange={handleChange}
            />
          </div>

          <br />

          <input
            className='list-input2'
            name='email'
            placeholder='Email'
            value={formulario.email}
            onChange={handleChange}
          />

          <br />

          <select
            className='list-input2'
            name='id_escolaridade'
            value={formulario.id_escolaridade}
            onChange={handleChange}
          >
            <option value=''>Escolaridade</option>
            {escolaridade?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.escolaridade}
              </option>
            ))}
          </select>

          <br />

          <select
            className='list-input2'
            name='id_curso'
            value={formulario.id_curso}
            onChange={handleChange}
          >
            <option value=''>Cursos</option>
            {cursos?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.cursos}
              </option>
            ))}
          </select>

          <br />

          <select
            className='list-input2'
            name='id_divulgacao'
            value={formulario.id_divulgacao}
            onChange={handleChange}
          >
            <option value=''>Divulgação</option>
            {divulgacao?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.plataforma}
              </option>
            ))}
          </select>

          <br />

          <input
          type="time"
            className='list-input2'
            name='previsao_chegada'
            placeholder='Previsão de Chegada'
            value={formulario.previsao_chegada}
            onChange={handleChange}
          />

          <br />

          <div className='main-registry-button'>
            <div className='main-question'>
              <p>Já foi aluno do Frei?</p>
            </div>

            <div className='main-buttons'>
              <div className='main-button-confirm'>
                <input
                  type='radio'
                  name='ja_foi_aluno'
                  checked={formulario.ja_foi_aluno === true}
                 onChange={(e) =>setFormulario({ ...formulario, ja_foi_aluno: true })}
                />
                <p>Sim</p>
              </div>

              <div className='main-button-confirm'>
                <input
                  type='radio'
                  name='ja_foi_luno'
                  checked={formulario.ja_foi_aluno === false}
                  onChange={(e) => setFormulario({ ...formulario, ja_foi_aluno: false })}
                />
                <p>Não</p>
              </div>
            </div>
          </div>

          <button className='button-registry' onClick={handleSubmit}>Cadastrar</button>
        </div>
      </main>

      <footer className='registry-footer'>
        <div className='social-media-call'>
          <h2>Nos acompanhe em nossas redes sociais!</h2>
        </div>

        <div className='social-media-general'>
          <div className='social-media-images'>
            <div className='social-media-logo'>
              <Link to={'https://web.facebook.com/institutonsfatima'}>
                <img className='logo-rede' src={Facebook} height='40px' />
              </Link>
            </div>

            <div className='social-media-logo'>
              <Link to={'https://www.instagram.com/institutonsfatima'}>
                <img className='logo-rede' src={Instagram} height='40px' />
              </Link>
            </div>

            <div className='social-media-logo'>
              <Link to={'https://www.acaonsfatima.org.br'}>
                <img className='logo-rede' src={Chrome} height='40px' />
              </Link>
            </div>

            <div className='social-media-logo'>
              <Link to={'https://www.linkedin.com/company/institutonsfatima'}>
                <img className='logo-rede' src={LinkedIn} height='40px' />
              </Link>
            </div>
          </div>

          <div className='social-media-texts'>
            <p className='social-media-name'>Instituto Social Nossa Senhora de Fátima</p>
            <p className='social-media-name'>institutonsfatima</p>
            <p className='social-media-name'>https://www.acaonsfatima.org.br</p>
            <p className='social-media-name'>Instituto Social Nossa Senhora de Fátima</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Registro;