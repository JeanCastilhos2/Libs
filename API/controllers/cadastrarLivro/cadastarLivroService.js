const Livros = require("../../models/livros");

async function cadastrarLivro(req, res) {
  const { titulo, autor, ano, imagem } = req.body;

  Livros.create({
    titulo: titulo,
    autor: autor,
    ano: ano,
    imagem: imagem,
  })
    .then(() => {
      console.warn("Livro cadastrado com sucesso");
      return res.status(204);
    })
    .catch(() => {
      console.warn("Ops algo deu errado ...");
      return res.status(500);
    });
}

module.exports = cadastrarLivro;
