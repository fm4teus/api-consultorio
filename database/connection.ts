import sqlite from 'sqlite3';
import create_pessoa from './create_table/pessoa';
import create_medico from './create_table/medico';
import create_paciente from './create_table/paciente';
import create_triagem from './create_table/triagem';

const db = new sqlite.Database(":memory:", (err)=>{
    if(err){
        console.log(err.message)
        throw err;
    } else {
        console.log('Conectado ao banco de dados ...');
        db.run(create_pessoa, ()=>{
            db.run("INSERT INTO pessoa (nome, email, cpf) VALUES ('Bernardo Mota', 'bernardo@ufsj.br', '22331334545');")
            db.run("INSERT INTO pessoa (nome, email, cpf) VALUES ('Iara Rodrigues', 'iara@ufsj.br', '21377734545');")
            db.run("INSERT INTO pessoa (nome, email, cpf) VALUES ('Filipe Mateus', 'filipe@ufsj.br', '21377444545');")
            db.run("INSERT INTO pessoa (nome, email, cpf) VALUES ('Luisa Moreira', 'luisa@ufsj.br', '2137424545');")
            
            db.run(create_medico, ()=>{
                db.run("INSERT INTO medico (id_pessoa, crm, especialidade, duracao) VALUES (1, 'A100342', 'CARD', 50)");
                db.run("INSERT INTO medico (id_pessoa, crm, especialidade, duracao) VALUES (2, 'A110347', 'NEURO', 60)");
                db.run("INSERT INTO medico (id_pessoa, crm, especialidade, duracao) VALUES (3, 'A144344', 'NEURO', 60)");
            });
            
            db.run(create_paciente, ()=>{
                db.run("INSERT INTO paciente (id_pessoa, senha, data_nasc) VALUES (4, '112DSA', '1997-09-09')");
                db.run(create_triagem)
            });
            
          
        });
    }
});

export default db;