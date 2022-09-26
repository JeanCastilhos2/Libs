const { Router } = require("express");
const routes = Router();
const listarLivros = require("../controllers/listarLivros/listarLivrosService");
const listarLivro = require("../controllers/listarLivros/listarLivroService");
const listarPagina = require("../controllers/listarLivros/listarPaginaService");
const cadastrarLivro = require("../controllers/cadastrarLivro/cadastarLivroService");
const atualizarLivro = require("../controllers/atualizarLivro/atualizarLivroService");

//ROTAS

routes.get("/livros", (req, res) => {
  return listarLivros(req, res);
});

routes.get("/livros/:id", (req, res) => {
  const id = req.params.id;
  return listarLivro(req, res, id);
});

routes.get("/livros/pagina/:page/:size", (req, res) => {
  const { page, size } = req.params;
  return listarPagina(req, res, size, page);
});

routes.post("/livros/cadastrar", (req, res) => {
  return cadastrarLivro(req, res);
});

routes.post("/livros/atualizar", (req, res) => {
  return atualizarLivro(req, res);
});

module.exports = routes;
