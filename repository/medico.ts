import {db_all, db_run} from '../database/wrapper';

const insert = `INSERT INTO medico (id_pessoa, crm, especialidade, duracao) VALUES (?,?,?,?)`

const get = `SELECT m.id AS id_medico, m.id_pessoa, m.crm, m.especialidade, m.duracao,
                    p.nome, p.email, p.cpf
                FROM medico m
                INNER JOIN pessoa p
                ON m.id_pessoa = p.id      
            `
            
export default class MedicoRepository{
    async create(id_pessoa:number, crm:string, especialidade:string, duracao:number){
        return await db_run(insert, [id_pessoa, crm, especialidade, duracao])
    }

    async get(){
        return await db_all(get, [])
    }

}