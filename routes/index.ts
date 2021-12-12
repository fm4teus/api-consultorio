import express from 'express';
import MedicoHandler from '../handler/medico';
import PessoaHandler from '../handler/pessoa';
import TriagemHandler from '../handler/triagem';

const medicoHandler = new MedicoHandler();
const pessoaHandler = new PessoaHandler();
const triagemHandler = new TriagemHandler();

const routes = express.Router();

routes.get('/medico/', medicoHandler.get);
routes.post('/medico/', medicoHandler.create);

routes.delete('/pessoa/:id/', pessoaHandler.delete);

routes.get('/triagem/', triagemHandler.get);
routes.post('/triagem/', triagemHandler.create);

export default routes;