import { loginEmail, loginSenha } from '../repository/loginRepository.js';
import { Router } from 'express';

const api = Router();

api.get('/login/email', async (req, resp) => {
    let email = req.body.email;
    let registros = await loginEmail(email);
    resp.send({ registros });
});

api.get('/login/senha', async (req, resp) => {
    let senha = req.body.senha;
    let registros = await loginSenha(senha);
    resp.send({ registros });
});

export default api;