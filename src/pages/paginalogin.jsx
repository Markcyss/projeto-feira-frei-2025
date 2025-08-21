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
                    <Link to={'..'}>
                        <img className='logo logo--instituto'
                            src={freilogo}
                            height='50px'
                        />
                    </Link>
            
                    <h2 className='login-title'>5° Edição Feira de Profissões Instituto Nossa Senhora de Fátima</h2>
                                
                    <img className='logo logo--feira'
                        src={feiralogo}
                        height='50px'
                    />
                </div>
            </header>

            <main className='main'>
                
                <button>Login</button>
                <label>email</label>
                <input value={'email'} />
                <input type="text" value={''}/>
                <button>Entrar</button>

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

export default Login;
