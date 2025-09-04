import './styleverificacao.scss';
import { Link } from 'react-router';
import freilogo from '../assets/freilogo.webp';
import feiralogo from '../assets/feiralogo.webp';
import Facebook from '../assets/facebookLogo.png';
import Instagram from '../assets/InstagramLogo.png';
import Chrome from '../assets/ChromeLogo.png';
import LinkedIn from '../assets/LinkedInLogo.png';
import { useState } from 'react';

function Verificacao() {
      const [nome, setNome] = useState("")
      const [lista, setLista] = useState([])


       async function listarnomes() {
        if(!nome){
            alert("Digite um nome para buscar!")
            return
        }
        if(!/^[A-Za-zÀ-ÿ\s]+$/.test(nome)){
            alert("Digite um nome sem numeros ou caracteres especiais!")
            return
        }

            try {
                const resp = await fetch(`http://localhost:5010/filtro?nome=${nome}`)
                const data = await resp.json()
                setLista(data.registros)

            } catch(err){
                console.error("erro ao buscar", err);
            }

       }

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
                    <input 
                    className='input-name' 
                    name='Nome' 
                    placeholder='Nome' 
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div className='main-button'>
                    <button className='verify-button' onClick={listarnomes}>Buscar</button>   
                </div>
                
        <div className='lista'>
          {lista.length > 0 ? (
            <ul>
              {lista.map((itens, index) => (
                <li key={index}>{itens.nome}</li>
              ))}
            </ul>
          ) : (
            <p>Nenhum resultado encontrado</p>
          )}
        </div>

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
