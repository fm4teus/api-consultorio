import express from 'express';
import MedicoHandler from '../handler/medico';
import PessoaHandler from '../handler/pessoa';

const medicoHandler = new MedicoHandler();
const pessoaHandler = new PessoaHandler();

const routes = express.Router();

routes.get('/medico/', medicoHandler.get);
routes.post('/medico/', medicoHandler.create);

routes.delete('/pessoa/', pessoaHandler.delete);

export default routes;