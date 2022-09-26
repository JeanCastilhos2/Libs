const Livros = require("../../models/livros");

async function atualizarLivro(req, res) {
  const { id, titulo, autor, ano } = req.body;

  Livros.update(
    {
      titulo: titulo,
      autor: autor,
      ano: ano,
    },
    { where: { id: id } }
  )
    .then(() => {
      console.warn("Livro atualizado com sucesso");
      return res.status(204);
    })
    .catch(function () {
      console.warn("Ops algo deu errado ...");
      return res.status(500);
    });
}

module.exports = atualizarLivro;
