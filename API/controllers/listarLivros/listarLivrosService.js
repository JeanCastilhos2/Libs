const Livros = require('../../models/livros');

async function listarLivros(req, res) {
  const livros = await Livros.findAll();
  return res.json(livros);
}

module.exports = listarLivros;
