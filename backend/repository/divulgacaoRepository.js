import { conection } from "./conection.js";


export async function listardivulgacao() {
  const comando = `
    SELECT *
      FROM divulgacao_table
  `

  const [registros] = await conection.query(comando)
  return registros;
}