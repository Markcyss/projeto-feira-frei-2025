import cadastroController from './controller/cadastroController.js'



export function adicionarRotas(api) {
  api.use(cadastroController);
  
}