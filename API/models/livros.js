const db = require('./db');

const Livros = db.sequelize.define('tabela_livros',{
    
    id: {type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
        },
    titulo: {type: db.Sequelize.STRING,
            allowNull: false,
        },
    autor: {type: db.Sequelize.STRING,
            allowNull: false,
        },
    ano: {type: db.Sequelize.STRING,
            allowNull: false,
        },
    imagem: {type: db.Sequelize.STRING,
            allowNull: true,
        }
    
  
})

Livros.sync();

module.exports = Livros;


