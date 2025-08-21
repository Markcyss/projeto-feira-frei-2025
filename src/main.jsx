import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Paginainicio from './assets/paginainicio.jsx'
import "./index.scss"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Paginainicio />
  </StrictMode>,
)
