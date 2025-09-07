import { vincularQrcode } from "../repository/vincularRepository.js";
import { Router } from "express";

const api = Router()

api.post("/vincular/:nome/:qrcode", async (req,resp) => {
    let nome = req.params.nome;
    let qrcode = req.params.qrcode;
    let registros = await vincularQrcode(nome,qrcode);
    resp.json({mensagemVin: `O Visitante foi vinculado ao QRcode N°: ${qrcode}`})
})  

export default api