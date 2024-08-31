CREATE TABLE abrigos( 
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_abrigo VARCHAR(255) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    telefone VARCHAR(20) DEFAULT '+00 00 000000000',
    precisa_voluntarios TINYINT DEFAULT 0, 
    precisa_roupas TINYINT DEFAULT 0,
    precisa_agua TINYINT DEFAULT 0,
    precisa_prod_higiene TINYINT DEFAULT 0,
    precisa_alimentos TINYINT DEFAULT 0,
    CONSTRAINT chk_telefone CHECK (telefone REGEXP '^\\+55 \\d{2} \\d{9}$')
);

INSERT INTO abrigos (nome_abrigo,endereco,telefone,precisa_voluntarios,precisa_roupas,precisa_agua,precisa_prod_higiene,precisa_alimentos) VALUES 
    ('Abrigo A','Avenida Caí 885', '+55 51 994542369', 1, 0, 1, 0, 1),
    ('Abrigo B', 'Tobias da Silva 221', '+55 51 982280098', 0 , 1, 0, 1, 0),
    ('Abrigo C', 'Avenida Farrapos 001', '+55 51 998356784',1, 1, 1, 1, 1);
END INS;

SELECT * FROM abrigos; 