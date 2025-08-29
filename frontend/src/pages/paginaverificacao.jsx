import './styleverificacao.scss';
import { Link } from 'react-router';
import freilogo from '../assets/freilogo.webp';
import feiralogo from '../assets/feiralogo.webp';
import Facebook from '../assets/facebookLogo.png';
import Instagram from '../assets/InstagramLogo.png';
import Chrome from '../assets/ChromeLogo.png';
import LinkedIn from '../assets/LinkedInLogo.png';

function Verificacao() {
  return (
    <>
        <div className='verification-container'>

            <header className='verification-header'>
                <div className='logo-container'>
                    <Link to={'..'}>
                        <img className='logo logo--instituto'
                            src={freilogo}
                            height='50px'
                        />
                    </Link>
            
                    <h2 className='verification-title'>5° Edição Feira de Profissões Instituto Nossa Senhora de Fátima</h2>
                                
                    <img className='logo logo--feira'
                        src={feiralogo}
                        height='50px'
                    />
                </div>
            </header>

            <main className='main-verification'>

                <div className='main-input'>
                    <input className='input-name' name='Nome' placeholder='Nome' />
                </div>
                <button className='verify-button'>Buscar</button>

            </main>

            <footer className='verification-footer'>
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
                </div>
            </footer>

        </div>
    </>
  )
}

export default Verificacao;
