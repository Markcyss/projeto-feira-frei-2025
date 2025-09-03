import { filtrar } from '../repository/verificacaoRepository.js';
import { Router } from 'express';


const api = Router();

api.post('/filtro', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await filtrar(nome);
    resp.send({ registros });
});

export default api;