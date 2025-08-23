import './styleregistro.scss';
import { Link } from 'react-router';
import freilogo from '../assets/freilogo.webp';
import feiralogo from '../assets/feiralogo.webp';
import Facebook from '../assets/facebookLogo.png';
import Instagram from '../assets/InstagramLogo.png';
import Chrome from '../assets/ChromeLogo.png';
import LinkedIn from '../assets/LinkedInLogo.png';
import AlunoPCInfo from '../assets/AlunoPCInfo.png';

function Registro() {
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
                        <input className='list-input1' value={'Nome'} />
                        <input className='list-input1' value={'Idade'} />
                    </div>
                    <br />
                    <div className='main-list-input1'>
                        <input className='list-input1' value={'CPF'} />
                        <input className='list-input1' value={'Telefone'} />
                    </div>
                    <br />
                    <input className='list-input2' value={'Email'} />
                    <br />
                    <input className='list-input2' value={'Escolaridade'} />
                    <br />
                    <input className='list-input2' value={'Curso de Interesse'} />
                    <br />
                    <input className='list-input2' value={'Como ficou sabendo da Feira'} />
                    <br />
                    <input className='list-input2' value={'Previsão de Chegada'} />
                    <br />

                    <div className='main-registry-button'>
                        <div className='main-question'>
                            <p>Já foi aluno do Frei?</p>
                        </div>
                        <div className='main-buttons'>
                            <div className='main-button-confirm'>
                                <input type="checkbox" />
                                <p>Sim</p>
                            </div>
                            <div className='main-button-confirm'>
                                <input type="checkbox" />
                                <p>Não</p>
                            </div>
                        </div>
                    </div>
                        <button className='button-registry'>Cadastrar</button>
                </div>
                
                <img className='main-background-registry'
                    src={ AlunoPCInfo }
                />

            </main>

            <footer className='footer'>
                
                <img className='logo-rede'
                    src={Facebook}
                    height='50px'
                />

                <img className='logo-rede'
                    src={Instagram}
                    height='50px'
                />

                <img className='logo-rede'
                    src={Chrome}
                    height='50px'
                />

                <img className='logo-rede'
                    src={LinkedIn}
                    height='50px'
                />

            </footer>

        </div>
    </>
  )
}

export default Registro;
