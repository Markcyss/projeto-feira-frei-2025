import { conection } from "./conection.js";


export async function listarcursos() {
  const comando = `
    SELECT *
      FROM curso_table
  `

  const [registros] = await conection.query(comando)
  return registros;
}