import {conection} from "./conection.js"

export async function cadastro(novoCadastro) {
    const comando = `insert into cadastro 
                 (nome, idade, cpf, telefone, email, previsao_chegada, )
                 values(?,?,?,?,?,?)
    
    ` 
   
    
    const [info] = await conection.query(comando, [novoCadastro.nome, novoCadastro.nome_cientifico, novoCadastro.altura, novoCadastro.peso, novoCadastro.classe])
    return info.insertId;
}