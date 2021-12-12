import {db_all, db_run} from '../database/wrapper';

const lastID = `SELECT last_insert_rowid() AS last_ID;`

const insert = `INSERT INTO pessoa (nome, email, cpf) VALUES (?,?,?);`

const del = `DELETE FROM pessoa WHERE id = ?;`
            
export default class PessoaRepository{
    async create(nome:string, email:string, cpf:string){
        return await db_run(insert, [nome, email, cpf])
    }

    async getLastID(){
        const res:any = await db_all(lastID, []) 
        return res[0].last_ID
    }

    async delete(id:number){
        return await db_run(del, [id])
    }
}