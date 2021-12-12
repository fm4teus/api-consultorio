const create_triagem = `
CREATE TABLE triagem (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_paciente INTEGER NOT NULL UNIQUE,
    queixa_principal TEXT NOT NULL,
    historico_doenca_atual TEXT NOT NULL,
    alergia TEXT NOT NULL,
    historico_familiar TEXT NOT NULL,
    habitos_vida TEXT NOT NULL,
    FOREIGN KEY (id_paciente)
        REFERENCES paciente (id)
        ON DELETE CASCADE
        ON UPDATE NO ACTION
);
`

export default create_triagem;