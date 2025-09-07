import { listarnomes } from '../repository/nomeRepository.js';
import { Router } from 'express'

const api = Router()

api.get('/nome', async (req, resp) =>{
  let registros = await listarnomes();

  resp.send({ registros });
})

export default api