import { Router } from "express";
import multer from "multer";
import { vincularQrcode } from "../repository/vincularRepository.js";

const api = Router();


const upload = multer({ dest: "public/storage" });


api.post("/vincular/:nome", upload.single("qrcode"), async (req, resp) => {
  const nome = req.params.nome;
  const qrcode = req.file.filename; 

  await vincularQrcode(nome, qrcode);

  resp.json({ mensagem: `Visitante ${nome} vinculado ao QR Code ${qrcode}` });
});

export default api;