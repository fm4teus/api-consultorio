const create_paciente = `
CREATE TABLE paciente (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_pessoa INTEGER NOT NULL UNIQUE,
    senha TEXT NOT NULL,
    data_nasc TEXT NOT NULL, 
    FOREIGN KEY (id_pessoa)
        REFERENCES pessoa (id)
        ON DELETE CASCADE
        ON UPDATE NO ACTION
);
`

export default create_paciente;