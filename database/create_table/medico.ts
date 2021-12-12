const create_medico = `
CREATE TABLE medico (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_pessoa INTEGER NOT NULL UNIQUE,
    crm TEXT NOT NULL UNIQUE,
    especialidade TEXT NOT NULL CHECK(especialidade IN ('CARD', 'GERAL', 'ENDO', 'NEURO')),
    duracao INTEGER NOT NULL,
    FOREIGN KEY (id_pessoa)
        REFERENCES pessoa (id)
        ON DELETE CASCADE
        ON UPDATE NO ACTION
);`

export default create_medico;