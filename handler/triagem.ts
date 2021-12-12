import {Request, Response} from 'express';
import TriagemService from '../service/triagem';
import TriagemModel from '../model/triagem';

const triagemService = new TriagemService();

export default class TriagemHandler {
    async get(req: Request, res: Response){
        try{
            const data = await triagemService.get();
            return res.status(200).json(data);
        }catch(err){
            return res.status(500).json({
                error: `Erro ao obter Triagem: ${err}`
            });
        }
    }

    async create(req: Request, res: Response){
        const triagem: TriagemModel = req.body
        const { idPaciente } = req.body

        try{
            await triagemService.create(triagem, idPaciente)
            return res.status(201).send()
        }catch(err){
            return res.status(500).json({
                error: `Erro ao criar Triagem: ${err}`
            });
        }
    }
}