import { BrowserRouter, Routes, Route } from 'react-router'
import Paginainicial from './pages/paginainicial.jsx'
import Login from './pages/paginalogin.jsx'
import Registro from './pages/paginaregistro.jsx'
import Verificacao from './pages/paginaverificacao.jsx'
import QrCode from './pages/paginaqrcode.jsx'

export default function Navegacao() {
    return(

        <BrowserRouter>
          <Routes>
            <Route path = '/' element = {<Paginainicial />} />
            <Route path = '/login' element = {<Login />} />
            <Route path = '/registro' element = {<Registro />} />
            <Route path = '/verificacao' element = {<Verificacao />} />
            <Route path='/code' element = {<QrCode />}/>
          </Routes>
        </BrowserRouter>

    )
}


