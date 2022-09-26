const db = require("../db");

const Users = db.sequelize.define("tabela_usuarios", {
  user: { type: db.Sequelize.STRING, allowNull: false },
  email: { type: db.Sequelize.STRING, allowNull: false },
  senha: { type: db.Sequelize.STRING, allowNull: false },
});

Users.sync();

module.exports = Users;
