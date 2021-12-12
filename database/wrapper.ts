import db from './connection';

export async function db_all(query:string, params:any){
    return new Promise(function(resolve,reject){
        db.all(query, params, function(err,rows){
           if(err){return reject(err);}
           resolve(rows);
         });
    });
}

export async function db_run(query:string, params:any){
    return new Promise(function(resolve,reject){
        db.run(query, params, function(err:any,rows:any){
           if(err){return reject(err);}
           resolve(rows);
         });
    });
}