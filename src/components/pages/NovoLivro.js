import { useState } from 'react';
import axios from "axios"
import styles from './novolivro.module.css';
import imagem_cad from '../img/imagem_cad.png'

function NovoLivro(){

    const[titulo,setTitulo] = useState([]);
    const[autor,setAutor] = useState([]);
    const[ano,setAno] = useState([]);
    const[imagem,setImagem] = useState([]);

    function cadastrar(){

        const data = {
            titulo: titulo,
            autor: autor,
            ano: ano,
            imagem: imagem
            }
            
          axios.post('http://localhost:4567/addcad', data)
    }

    return(
        <div className={styles.container}>
        <h1><span>Cadastrar Livro</span></h1>
        <p>Cadastre um novo Livro aqui</p>
        <form  className={styles.form}>
        <label htmlFor="titulo">Titulo</label> 
        <input name="titulo" type="text" onChange={e => setTitulo(e.target.value)}/> 
        <label htmlFor="autor">autor</label> 
        <input name="autor" type="text" onChange={e => setAutor(e.target.value)}/> 
        <label htmlFor="ano">ano</label> 
        <input name="ano" type="text" onChange={e => setAno(e.target.value)}/> 
        <label htmlFor="imagem">Capa</label> 
        <input name="imagem" type="text" onChange={e => setImagem(e.target.value)}/>
        <button className={styles.btn} onClick={cadastrar}>Cadastrar</button>
        </form>
        <img className={styles.img}src={imagem_cad} alt='imagem'/>
        </div>
    )
}

export default NovoLivro;