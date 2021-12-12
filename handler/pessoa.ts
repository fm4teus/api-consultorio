import {Request, Response} from 'express';
import PessoaService from '../service/pessoa';

const pessoaService = new PessoaService();

export default class MedicoHandler {
    async delete(req: Request, res: Response){
        const { id } = req.params
        const id_pessoa = parseInt(id)
        try{
            await pessoaService.delete(id_pessoa)
            return res.status(201).send()
        }catch(err){
            return res.status(500).json({
                error: `Erro ao excluir Pessoa: ${err}`
            });
        }
    }
}