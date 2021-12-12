import TriagemRepository from '../repository/triagem';
import PessoaRepository from '../repository/pessoa';
import TriagemModel from '../model/triagem';

const triagemRepository = new TriagemRepository();

export default class TriagemService {
    async create(triagem: TriagemModel, idPaciente: number){
        const { 
            queixaPrincipal, 
            historicoDoencaAtual, 
            alergia, 
            historicoFamiliar, 
            habitosVida } = triagem
        
        return await triagemRepository.create(
            idPaciente, 
            queixaPrincipal, 
            historicoDoencaAtual, 
            alergia, 
            historicoFamiliar, 
            habitosVida)
    }

    async get(){
        const data = await triagemRepository.get()
        return data;
    }
}