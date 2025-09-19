import './stylelogin.scss';
import { Link } from 'react-router';
import freilogo from '../assets/freilogo.webp';
import feiralogo from '../assets/feiralogo.webp';
import Facebook from '../assets/facebookLogo.png';
import Instagram from '../assets/InstagramLogo.png';
import Chrome from '../assets/ChromeLogo.png';
import LinkedIn from '../assets/LinkedInLogo.png';
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  let i = 0;
  let emailtest = '';

  async function login() {
    if (!email) {
      alert("Digite o email para logar.");
      return;
    }

    try {
      emailtest = await fetch(`http://localhost:5010/login/email`);     
    } catch (err) {
      console.error("Email não encontrado.", err);
    }

    if (!emailtest) {
        i = 0;
    }
    else {
      i = 1;
    }

    if (!senha) {
      alert("Digite a senha desta conta");
      return;
    }

    try {
      const senhatest = await fetch(`http://localhost:5010/login/senha?senha=${senha}`);
      if (senhatest && i == 1) {
        i = 2;
      }

    } catch (err) {
      console.error("Senha incorreta.", err);
    }

    if (i == 0) {
      alert('Email incorreto');
    }
    else if (i == 1) {
      alert('Senha incorreta');
    }
    else {
      alert('Login feito com sucesso!');
    }
  }

  return (
    <>
      <div className='login-container'>
        <header className='login-header'>
          <div className='logo-container'>
            <div className='login-background-logo1'>
              <Link to={'..'}>
                <img className='logo logo--instituto'
                  src={freilogo}
                  height='80px'
                />
              </Link>
            </div>
            <div className='login-background-logo2'>
              <img src={feiralogo} alt="Logo Feira" className="logo-bg" />
              <div className="login-titles">
                <span className="login-title escada-1">5ª Edição</span>
                <span className="login-title escada-2">Feira de Profissões</span>
                <span className="login-title escada-3">Instituto Nossa Senhora de Fátima</span>
              </div>
            </div>
          </div>
        </header>
        <main className='main-login'>
          <div className='login-button'>
            <Link to={'../verificacao'}> <button className='main-login-button'>Login</button> </Link>
          </div>
          <div className='main-input'>
            <input
              className='input-name'
              name='Email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='main-input'>
            <input
              className='input-name'
              name='Senha'
              placeholder='Senha'
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <div className='enter-button'>
            <button className='main-enter-button' onClick={login} value={i == 2}>Entrar</button>
          </div>
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
          </div>
        </footer>
      </div>
    </>
  )
}

export default Login;
