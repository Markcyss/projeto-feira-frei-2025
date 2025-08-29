import { listarcursos } from '../repository/cursoRepository.js'
import { Router } from 'express'

const api = Router()

api.get('/curso', async (req, resp) =>{
  let registros = await listarcursos();

  resp.send({ registros });
})

export default api