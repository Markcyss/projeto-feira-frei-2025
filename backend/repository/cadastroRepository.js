import { conection } from "./conection.js"; // verificar se o export está certo

export async function cadastro(novoCadastro) {
    const comando = `
        insert into registro 
        (nome, idade, cpf, telefone, email, id_escolaridade, id_curso, id_divulgacao, previsao_chegada, ja_foi_aluno)
        values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [info] = await conection.query(comando, [novoCadastro.nome, novoCadastro.idade, novoCadastro.cpf, novoCadastro.telefone, novoCadastro.email, novoCadastro.id_escolaridade, novoCadastro.id_curso, novoCadastro.id_divulgacao, novoCadastro.previsao_chegada, novoCadastro.ja_foi_aluno]);

    return info.insertId;
}