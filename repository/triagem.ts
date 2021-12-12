import {db_all, db_run} from '../database/wrapper';

const insert = `INSERT INTO triagem (id_paciente, queixa_principal, historico_doenca_atual, alergia, historico_familiar, habitos_vida) 
                    VALUES (?, ?, ?, ?, ?, ?)`

const get = `SELECT t.id AS id_triagem, t.id_paciente, t.queixa_principal, t.historico_doenca_atual, t.alergia, t.historico_familiar, t.habitos_vida,
                    p.nome, p.email, p.cpf,
                    paciente.data_nasc
                FROM triagem t
                INNER JOIN paciente
                ON t.id_paciente = paciente.id
                    INNER JOIN pessoa p
                    ON paciente.id_pessoa = p.id      
            `

export default class TriagemRepository{
    async create(
        idPaciente:number, 
        queixaPrincipal:string, 
        historicoDoencaAtual:string, 
        alergia:string, 
        historicoFamiliar:string, 
        habitosVida:string){
            
        return await db_run(insert, [idPaciente, queixaPrincipal, historicoDoencaAtual, alergia, historicoFamiliar, habitosVida])
    }

    async get(){
        return await db_all(get, [])
    }

}