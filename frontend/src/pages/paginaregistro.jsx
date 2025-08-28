import './styleregistro.scss';
import { Link } from 'react-router';
import freilogo from '../assets/freilogo.webp';
import feiralogo from '../assets/feiralogo.webp';
import Facebook from '../assets/facebookLogo.png';
import Instagram from '../assets/InstagramLogo.png';
import Chrome from '../assets/ChromeLogo.png';
import LinkedIn from '../assets/LinkedInLogo.png';
import { useState } from 'react';
import AlunoPCInfo from '../assets/AlunoPCInfo.png';

function Registro() {
    const [formulario, setFormulario] = useState({
      nome: '',
      idade: '',
      cpf: '',
      telefone: '',
      email: '',
      escolariadade: '',
      cursoInteresse: '',
      comoSoube: '',
      previsaoChegada: '',
      jaFoiAluno: null,
    })


 const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const novoValor = type === 'radio' ? value : (type === 'checkbox' ? checked : value);
    setFormulario((prevData) => ({
      ...prevData,
      [name]: novoValor,
    }));
 };

  return (
    <>
        <div className='registry-container'>

            <header className='registry-header'>
                <div className='logo-container'>
                    <Link to={'..'}>
                        <img className='logo logo--instituto'
                            src={freilogo}
                            height='50px'
                        />
                    </Link>
            
                    <h2 className='registry-title'>5° Edição Feira de Profissões Instituto Nossa Senhora de Fátima</h2>
                                
                    <img className='logo logo--feira'
                        src={feiralogo}
                        height='50px'
                    />
                </div>
            </header>

            <main className='main-registro'>
                
                <div className='main-title'>
                    <h1 className='main-title-text'>Cadastro do Visitante</h1>
                </div>
                <div className='main-registry-list'>
                    <div className='main-list-input1'>
                        <input className='list-input1' name='nome' placeholder='Nome' />
                        <input className='list-input1' name='idade' placeholder='Idade' />
                    </div>
                    <br />
                    <div className='main-list-input1'>
                        <input className='list-input1' name='cpf' placeholder='CPF' />
                        <input className='list-input1' name='telefone' placeholder='Telefone' />
                    </div>
                    <br />
                    <input className='list-input2' name='email' placeholder='Email' />
                    <br />
                    <input className='list-input2' name='escolaridade' placeholder='Escolaridade' />
                    <br />
                    <input className='list-input2' name='cursoInteresse' placeholder='Curso de Interesse' />
                    <br />
                    <input className='list-input2' name='comoSoube' placeholder='Como ficou sabendo da Feira' />
                    <br />
                    <input className='list-input2' name='previsaoDeChegada' placeholder='Previsão de Chegada' />
                    <br />

                    <div className='main-registry-button'>
                        <div className='main-question'>
                            <p>Já foi aluno do Frei?</p>
                        </div>
                        <div className='main-buttons'>
                            <div className='main-button-confirm'>
                                <input
                                    type="radio"
                                    name="jaFoiAluno"
                                    value="sim"
                                    checked={formulario.jaFoiAluno === 'sim'}
                                    onChange={handleChange}
                                />
                                <p>Sim</p>
                                </div>
                                {/* Botão de rádio para "Não" */}
                                <div className='main-button-confirm'>
                                <input
                                    type="radio"
                                    name="jaFoiAluno"
                                    value="nao"
                                    checked={formulario.jaFoiAluno === 'nao'}
                                    onChange={handleChange}
                                />
                                <p>Não</p>
                            </div>
                        </div>
                    </div>
                        <button className='button-registry'>Cadastrar</button>
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
                                <img className='logo-rede'
                                    src={Facebook}
                                    height='40px'
                                />
                            </Link>
                        </div>
                        <div className='social-media-logo'>
                            <Link to={'https://www.instagram.com/institutonsfatima'}>
                                <img className='logo-rede'
                                    src={Instagram}
                                    height='40px'
                                />
                            </Link>
                        </div>
                        <div className='social-media-logo'>
                            <Link to={'https://www.acaonsfatima.org.br'}>
                                <img className='logo-rede'
                                    src={Chrome}
                                    height='40px'
                                />
                            </Link>
                        </div>
                        <div className='social-media-logo'>
                            <Link to={'https://www.linkedin.com/company/institutonsfatima'}>
                                <img className='logo-rede'
                                    src={LinkedIn}
                                    height='40px'
                                />
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
    </>
  )

}
export default Registro;
