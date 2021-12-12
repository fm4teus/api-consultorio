import {Request, Response} from 'express';
import PessoaService from '../service/pessoa';

const pessoaService = new PessoaService();

export default class MedicoHandler {
    async delete(req: Request, res: Response){
        const { id } = req.body
        try{
            await pessoaService.delete(id)
            return res.status(201).send()
        }catch(err){
            return res.status(500).json({
                error: `Erro ao excluir Pessoa: ${err}`
            });
        }
    }
}