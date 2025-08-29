import { listardivulgacao } from '../repository/divulgacaoRepository.js'
import { Router } from 'express'

const api = Router()

api.get('/divulgacao', async (req, resp) =>{
  let registros = await listardivulgacao();

  resp.send({ registros });
})

export default api