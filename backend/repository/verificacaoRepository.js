import { conection } from "./conection.js";


export async function filtrar(nome) {
  const comando = `
    SELECT nome 
    FROM registro
    where nome like ?
  `

  const [registros] = await conection.query(comando, ['%' + nome + '%'])
  return registros;
}