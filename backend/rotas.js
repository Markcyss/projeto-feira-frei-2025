import cadastroController from './controller/cadastroController.js'
import cursoController from './controller/cursoController.js'
import divulgacaoController from './controller/divulgacaoController.js'
import escolaridadeControler from './controller/escolaridadeController.js'
import verificacaoController from './controller/verificaçãoController.js'
import vincularController from './controller/vincularController.js'
import nomeController from './controller/nomeController.js'



export function adicionarRotas(api) {
  api.use(vincularController);
  api.use(cadastroController);
  api.use(cursoController);
  api.use(divulgacaoController);
  api.use(escolaridadeControler);
  api.use(verificacaoController);
  api.use(nomeController)
}