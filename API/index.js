const cors = require('cors');
const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');

let livros;


app.use(cors());

//SERVIDOR

app.listen('4567');
console.log('http://localhost:4567/json')

//IMPORTAR MODEL USUARIOS 

const Livros = require('./models/Livros');


//CONFIGURAÇÃO DO BODY PARSER 

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CONFIGURAÇÃO DA SESSION DO DB

app.use(session({
    secret: 'chavesegredo',
    resave: false,
    saveUninitialized : true
}))



//BUSCANDO DADOS DO BANCO E PASSANDO PARA A ROTA 

app.get('/livros', async (req ,res)=>{
    const livros = await Livros.findAll();
    return res.json(livros);   
})

app.get('/livros/:id', async (req ,res)=>{
    const id = req.params.id;
    const livros = await Livros.findOne({where: {id: id}});
    return res.json(livros);   
})

app.get('/livros/pagina/:page', async (req ,res)=>{
    const page = req.params.page
    const livros = await Livros.findAll({
        limit : 3,
        offset: page * 3
    });
    return res.json(livros);   
})

app.get('/paginas', async (req ,res)=>{
    const livros = await Livros.findAll();
    const paginas = Math.ceil(livros.length / 3);
    const array_paginas = [];
    for (var i = 0; i < paginas; i++) {
        array_paginas[i] = i;
    }
    return res.json(array_paginas);   
})






app.post('/addcad',(req ,res)=>{

    var titulo = req.body.titulo;
    var autor = req.body.autor;
    var ano = req.body.ano;
    var imagem = req.body.imagem;
 
    Livros.create({
    titulo: titulo,
    autor: autor,
    ano: ano,
    imagem: imagem,
        
}).then(()=>{
     buscar();
     console.warn('Livro cadastrado com sucesso');
}).catch(()=>{
     console.warn('Ops algo deu errado ...')
}) 
})

app.post('/atualizar',(req,res)=>{
    var titulo = req.body.titulo;
    var autor = req.body.autor;
    var ano = req.body.ano;
    
 
    Livros.update({
    titulo: titulo,
    autor: autor,
    ano: ano
    
    },
    { where:{id : req.body.id}
    }).then(()=>{
        buscar();
        console.warn('Livro atualizado com sucesso');
   }).catch(function(){
        console.warn('Ops algo deu errado ...')
   }) 
})

