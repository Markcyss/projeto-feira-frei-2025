import './styleinicial.scss';
import { Link } from 'react-router';
import freilogo from '../assets/freilogo.webp';
import feiralogo from '../assets/feiralogo.webp';
import frei from '../assets/frei.png';
import FotoGrupo from '../assets/FotoGrupo.jpeg';
import AlunosEletro from '../assets/AlunosEletro.jpeg';
import FeiraCV from '../assets/FeiraCV.jpg';
import CasaDaMulherPaulistana from '../assets/CasaDaMulherPaulistanaLogo.png';
import STB from '../assets/LogoSTBNova.jpg';
import OticasCarol from '../assets/OticasCarolLogo.png';
import mapaGoogle from '../assets/mapaGoogle.png';
import Facebook from '../assets/facebookLogo.png';
import Instagram from '../assets/InstagramLogo.png';
import Chrome from '../assets/ChromeLogo.png';
import LinkedIn from '../assets/LinkedInLogo.png';
import mapandares from '../assets/mapandares.png'

function Paginainicial() {
  return (
    <>
        <div className='hero-container'>

            <header className='hero-header'>
                <div className='logo-container'>
                    <Link to={'..'}>
                        <img className='logo logo--instituto'
                            src={freilogo}
                            height='50px'
                        />
                    </Link>

                    <h2 className='hero-title'>5° Edição Feira de Profissões Instituto Nossa Senhora de Fátima</h2>
                    
                    <img className='logo logo--feira'
                        src={feiralogo}
                        height='50px'
                    />
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
                    </div>
                </div>

                    <footer className='hero-footer'>
                        <div className='texto-rasgado'>
                        <p className='bottom-quote'>
                            ESFORÇO QUE TRANSFORMA, E O ORGULHO PERMANECE!
                        </p></div>
                    </footer>

                <div className='video'>

                </div>

                <div className='text-video'>
                    <p>Veja como transformar vidas no Instituto Nossa Senhora de Fátima</p>
                    <p>Descubra tudo o que o Instituto Nossa Senhora de Fátima pode oferecer para o seu futuro!</p>
                    <p>Quer saber como é, de verdade, estudar aqui? Assista ao vídeo e mergulhe nas histórias inspiradoras de alunos que transformaram suas vidas com nossos cursos.</p>
                    <p>Conheça os bastidores, os diferenciais da nossa formação e como a nossa escola pode ser o seu próximo passo rumo ao sucesso. Venha se encantar com experiências reais e se imaginar no nosso lugar. O futuro começa agora - e ele pode começar aqui!</p>
                </div>

                <h2>Mapa de Localização</h2>

                <img className='mapandares'
                    src={mapandares}
                />

                <div className='carrossel-feira'>

                    <img 
                        src={FotoGrupo}
                        height='100px'
                    />

                </div>

                <div className='carrossel-cursos'>

                    <div className='cursos-eletro'>

                        <img
                            src={AlunosEletro}
                            height='200px'
                        />

                    </div>

                </div>

                <div className='carrossel-andares'>

                    <div className='salas'>

                        <img
                            src={FeiraCV}
                            height='200px'
                        />

                    </div>

                </div>

                <div className='mapa-google'>

                    <img
                        src={mapaGoogle}
                        height='200px'
                    />

                </div>

                <h2>Empresas Parceiras Presentes</h2>

                <div className='empresa'>

                    <img className='logo-empresa'
                        src={CasaDaMulherPaulistana}
                        height='200px'
                    />

                </div>

                <div className='empresa'>

                    <img className='logo-empresa'
                        src={STB}
                        height='200px'
                    />

                </div>

                <div className='empresa'>

                    <img className='logo-empresa'
                        src={OticasCarol}
                        height='200px'
                    />

                </div>

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

export default Paginainicial;
