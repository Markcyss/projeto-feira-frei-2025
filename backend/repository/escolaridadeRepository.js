import { conection } from "./conection.js";


export async function listarescolaridade() {
  const comando = `
    SELECT *
      FROM escolaridade_table
  `

  const [registros] = await conection.query(comando)
  return registros;
}