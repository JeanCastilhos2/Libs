const Livros = require("../../models/livros");

async function listarPagina(req, res, size, page) {
  const pageInt = parseInt(page);
  const sizeInt = parseInt(size);
  const livros = await Livros.findAll({
    limit: sizeInt,
    offset: pageInt * sizeInt,
  });
  return res.json(livros);
}

module.exports = listarPagina;
