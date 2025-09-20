import './styleinicial.scss';
import { Link } from 'react-router';
import freilogo from '../assets/freilogo.webp';
import feiralogo from '../assets/feiralogo.webp';
import frei from '../assets/frei.png';
import CasaDaMulherPaulistana from '../assets/CasaDaMulherPaulistanaLogo.png';
import STB from '../assets/LogoSTBNova.jpg';
import OticasCarol from '../assets/OticasCarolLogo.png';
import mapaGoogle from '../assets/mapaGoogle.png';
import Facebook from '../assets/facebookLogo.png';
import Instagram from '../assets/InstagramLogo.png';
import Chrome from '../assets/ChromeLogo.png';
import LinkedIn from '../assets/LinkedInLogo.png';
import mapandares from '../assets/mapandares.png';

import { Carousel } from "../carousel1/carousel.jsx";
import { lastfair } from "../assets/data/carousel.json";

import { CarouselCursos } from "../carousel2/carousel.jsx";
import { courses } from "../assets/data/carousel2.json";

function Paginainicial() {
  return (
    <>
      <div className='hero-container'>

        <header className='hero-header'>
          <div className='logo-container'>
            <Link to={'..'}>
              <img className='logo logo--instituto'
                src={freilogo}
                height='80px'
              />
            </Link>
            <div className='inicial-background-logo2'>
              <img src={feiralogo} alt="Logo Feira" className="inicial-logo-bg" />
              <div className="inicial-titles">
                <span className="inicial-title escada-1">5ª Edição</span>
                <span className="inicial-title escada-2">Feira de Profissões</span>
                <span className="inicial-title escada-3">Instituto Nossa Senhora de Fátima</span>
              </div>
            </div>
          </div>
        </header>

        <main className='hero-main-content'>

          <div className='main-info'>
            <h2>Instituto Nossa Senhora de Fátima Apresenta:</h2>
          </div>

          <div className='main-part1'>
            <div className='main-frei-image'>
              <div className='info-cardf'>
                <img className='frei-image'
                  src={frei}
                />
              </div>
            </div>

            <div className='separa'>

            </div>

            <div className='info-card'>
              <h3>5° Edição da feira de Profissões</h3>

              <ul className="info-list">
                <li>
                  <span className="icon">🗓️</span> 29 de Setembro | 9:00 às 14:00
                </li>
                <li>
                  <span className="icon">📍</span> Av. Cel. Octaviano de Freitas Costa - 445 - Veloso
                </li>
              </ul>
              <p>
                Workshops, Networking, Brindes e muito mais!<br />
                Venha conhecer nossa Feira de profissões
              </p>
              <Link to={'./registro'}>
                <button className="cta-button">
                  <span>Faça seu cadastro aqui!</span>
                </button>
              </Link>
              <p>Aluno? <Link to={'./login'} className='login-link'>Clique Aqui!</Link></p>
            </div>
          </div>

          <footer className='hero-footer'>
            <div className='texto-rasgado'>
              <p className='bottom-quote'>
                ESFORÇO QUE TRANSFORMA, E O ORGULHO PERMANECE!
              </p>
            </div>
          </footer>

          <div className="main-carrossel">
            <Carousel data={lastfair} />
          </div>

          <div className='text-video'>
            <p>Veja como transformar vidas no Instituto Nossa Senhora de Fátima</p>
            <p>Descubra tudo o que o Instituto Nossa Senhora de Fátima pode oferecer para o seu futuro!</p>
          </div>

          {/* NOVO CARROSSEL DE CURSOS */}
          <div className='carousel-cursos-wrapper'>
            <CarouselCursos data={courses} />
          </div>

          <h2>Mapa de Localização</h2>

          <img className='mapandares'
            src={mapandares}
          />

          <div className='mapa-google'>
            <Link to={'https://www.google.com/maps/place/Instituto+Social+Nossa+Senhora+de+Fátima/@-23.6803333,-46.7105112,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce502d2289a843:0x14406b17b30d0174!8m2!3d-23.6803333!4d-46.7079309!16s%2Fg%2F1ptxj22k2?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D'}>
              <img className='mapa-google-img'
                src={mapaGoogle}
                height='300px'
                width='95%'
              />
            </Link>
          </div>

          <div className='main-empresas'>
            <h2>Empresas Parceiras Presentes</h2>

            <div className='emp-n1'>
              <div className='empresa'>
                <Link to={'https://www.casadamulherpaulistana.org.br'}>
                  <img className='logo-empresa'
                    src={CasaDaMulherPaulistana}
                    height='200px'
                  />
                </Link>
              </div>
            </div>

            <div className='emp-n2'>
              <div className='empresa'>
                <Link to={'https://www.stb.com.br'}>
                  <img className='logo-empresa'
                    src={STB}
                    height='200px'
                  />
                </Link>
              </div>
            </div>

            <div className='emp-n3'>
              <div className='empresa'>
                <Link to={'https://www.oticascarol.com.br/brasil'}>
                  <img className='logo-empresa'
                    src={OticasCarol}
                    height='200px'
                  />
                </Link>
              </div>
            </div>
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

export default Paginainicial;
