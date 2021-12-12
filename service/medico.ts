import MedicoRepository from '../repository/medico';
import MedicoModel from '../model/medico';
import PessoaRepository from '../repository/pessoa';

const medicoRepository = new MedicoRepository();
const pessoaRepository = new PessoaRepository();

export default class MedicoService {
    async create(medico: MedicoModel){
        const { nome, email, cpf } = medico
        await pessoaRepository.create( nome, email, cpf)
        const insertedID: number = await pessoaRepository.getLastID();
        
        const { crm, especialidade, duracao } = medico
        return await medicoRepository.create(insertedID, crm, especialidade, duracao)
    }

    async get(){
        return await medicoRepository.get();
    }
}