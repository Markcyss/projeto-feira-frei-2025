import './styleqrcode.scss';
import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import freilogo from '../assets/freilogo.webp';
import feiralogo from '../assets/feiralogo.webp';
import Facebook from '../assets/facebookLogo.png';
import Instagram from '../assets/InstagramLogo.png';
import Chrome from '../assets/ChromeLogo.png';
import LinkedIn from '../assets/LinkedInLogo.png';

function QrCode() {
  const [nome, setNome] = useState([]);
  const [idSelecionado, setIdSelecionado] = useState('');
  const [file, setFile] = useState(null);

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
    fetchData('http://localhost:5010/nome', setNome);
  }, []);

  // Função para enviar o arquivo
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("qrcode", file);

    const res = await fetch(`http://localhost:5010/vincular/${idSelecionado}`, {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    alert(data.mensagem);
  };

  return (
    <>
      <div className='code-container'>
        <header className='code-header'>
          <div className='logo-container'>
            <div className='code-background-logo1'>
              <Link to={'..'}>
                <img className='logo logo--instituto'
                  src={freilogo}
                  height='80px'
                />
              </Link>
            </div>
            <div className='code-background-logo2'>
              <img src={feiralogo} alt="Logo Feira" className="logo-bg" />
              <div className="code-titles">
                <span className="code-title escada-1">5ª Edição</span>
                <span className="code-title escada-2">Feira de Profissões</span>
                <span className="code-title escada-3">Instituto Nossa Senhora de Fátima</span>
              </div>
            </div>
          </div>
        </header>
        <main className='main-code'>
          <div className='main-code-button'>
            <Link to={'../verificacao'}> <button className='verif-code-button'>Link de Verificação</button> </Link>
          </div>
          <div className='main-input'>
            <select
              className='input-name'
              name='nome'
              onChange={(e) => setIdSelecionado(e.target.value)}
            > 
              <option value=''>Nome</option>
              {nome?.map((item) => (
                <option key={item.id_registro} value={item.id_registro}>
                  {item.nome}
                </option>
              ))}
            </select>
          </div>

          <div className='main-input-image'>
            <input 
              type="file" 
              className='input-image' 
              accept="image/png" 
              onChange={(e) => setFile(e.target.files[0])} 
            />
          </div>

          <div className='main-input'>
            <button className='btn-upload' onClick={handleUpload}>
              Vincular QR Code
            </button>
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

export default QrCode;
