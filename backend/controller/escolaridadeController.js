import { listarescolaridade } from '../repository/escolaridadeRepository.js'
import { Router } from 'express'

const api = Router()

api.get('/escolaridade', async (req, resp) =>{
  let registros = await listarescolaridade();

  resp.send({ registros });
})

export default api