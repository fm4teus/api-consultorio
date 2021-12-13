import MedicoRepository from '../repository/medico';
import MedicoModel from '../model/medico';
import FilterMedico from '../model/filter';
import PessoaRepository from '../repository/pessoa';

const medicoRepository = new MedicoRepository();
const pessoaRepository = new PessoaRepository();

function validaCPF(strCPF:string) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;

  for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}


export default class MedicoService {
    async create(medico: MedicoModel){
        const { nome, email, cpf } = medico

        if(!validaCPF(cpf)){
            throw new Error(`CPF inválido: ${cpf}`);
        }

        await pessoaRepository.create( nome, email, cpf)
        const insertedID: number = await pessoaRepository.getLastID();
        
        const { crm, especialidade, duracao } = medico
        return await medicoRepository.create(insertedID, crm, especialidade, duracao)
    }

    async get(filter:FilterMedico){
        return await medicoRepository.get(filter);
    }
}