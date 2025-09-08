import { conection } from "./conection.js";

export async function vincularQrcode(nome, qrcode) {
  const comando = `
    UPDATE registro 
    SET qrcode = ?
    WHERE nome = ?
  `;

  const [resultado] = await conection.query(comando, [qrcode, nome]);
  return resultado;
}