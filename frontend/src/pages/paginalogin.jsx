import './stylelogin.scss';
import { Link } from 'react-router';
import freilogo from '../assets/freilogo.webp';
import feiralogo from '../assets/feiralogo.webp';
import Facebook from '../assets/facebookLogo.png';
import Instagram from '../assets/InstagramLogo.png';
import Chrome from '../assets/ChromeLogo.png';
import LinkedIn from '../assets/LinkedInLogo.png';

function Login() {
  return (
    <>
        <div className='login-container'>

            <header className='login-header'>
                <div className='logo-container'>
                    <div className='login-background-logo1'>
                        <Link to={'..'}>
                            <img className='logo logo--instituto'
                                src={freilogo}
                                height='50px'
                            />
                        </Link>
                    </div>
                    <div className='login-background-logo2'>
                        <h2 className='login-title'>5° Edição</h2>
                        <h2 className='login-title'>Feira de Profissões</h2>
                        <h2 className='login-title'>Instituto Nossa Senhora de Fátima</h2>
                                    
                        <img className='logo logo--feira'
                            src={feiralogo}
                            height='50px'
                        />
                    </div>
                </div>
            </header>

            <main className='main'>
                <button className='main-login'>Login</button>  
                <input value={'Email:'} />
                <input value={'Password:'}/>
                <button className='main-enter'>Entrar</button>

            </main>

            <footer className='inicial-footer'>
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

export default Login;
