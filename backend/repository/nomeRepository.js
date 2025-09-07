import { conection } from "./conection.js";


export async function listarnomes() {
  const comando = `
    SELECT nome
      FROM registro
  `

  const [registros] = await conection.query(comando)
  return registros;
}