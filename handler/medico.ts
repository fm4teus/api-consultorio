import {Request, Response} from 'express';
import MedicoService from '../service/medico';
import MedicoModel from '../model/medico';

const medicoService = new MedicoService();

export default class MedicoHandler {
    async get(req: Request, res: Response){
        try{
            const data = await medicoService.get();
            return res.status(200).json(data);
        }catch(err){
            return res.status(500).json({
                error: `Erro ao obter Médicos: ${err}`
            });
        }
    }

    async create(req: Request, res: Response){
        const medico: MedicoModel = req.body
        try{
            await medicoService.create(medico)
            return res.status(201).send()
        }catch(err){
            return res.status(400).json({
                error: `Erro ao criar Médico: ${err}`
            });
        }
    }
}