const Livros = require('../../models/livros');

async function listarLivro(req,res,id) {
    
    const livros = await Livros.findOne({ where: { id: id } });
    return res.json(livros);
}

module.exports = listarLivro;
