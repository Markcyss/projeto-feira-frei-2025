import { conection } from "./conection.js";


export async function loginEmail(email) {
  const comando = `
    SELECT email
      FROM login
      where email like ?
  `

  const [registros] = await conection.query(comando, ['%' + email + '%'])
  return registros[0];
}

export async function loginSenha(senha) {
  const comando = `
    SELECT senha
      FROM login
      where senha like ?
  `

  const [registros] = await conection.query(comando, ['%' + senha + '%'])
  return registros;
}