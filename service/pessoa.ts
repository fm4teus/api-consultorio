import PessoaRepository from '../repository/pessoa';

const pessoaRepository = new PessoaRepository();

export default class MedicoService {
    async delete(id:number){
        return await pessoaRepository.delete(id);
    }
}