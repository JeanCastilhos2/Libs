import { useState, useEffect } from 'react';
import styles from './livros.module.css';
import styles1 from '../layout/paginacao.module.css'


function Livros(){

  
    const [lista,setLista] = useState ([]);

    const[pagina,setPagina] = useState (0);

    
    useEffect(() => {
          
          

          const fetchData = async () => {
          
          const page = pagina;
         
          const data = await fetch(`http://localhost:4567/livros/pagina/${page}`);
           
          const json = await data.json();
          
          setLista(json);

        }
        fetchData()
     
      },[pagina])

      const lista_livros = lista.map((lista) =>
    
      <div className={styles.container}>
      <div className={styles.book}>
        <div className={styles.front}>
                  <div className={styles.cover}>
                    {lista.imagem ? (<img src={lista.imagem} alt='imagem'/>):
                    (<>
                     <p className={styles.numup}>{lista.titulo}</p>	
                      <p className={styles.author}>{lista.autor}</p>
                    </>)}
          </div>
        </div>
        <div className={styles.leftside}>
            <h2>
            <span>{lista.autor}</span>
            <span>{lista.titulo}</span>
           </h2>
        </div>
      </div>
    </div>
  ) 


    return(
       <div>   
           <div className={styles.livros}>
           {lista_livros}
           </div>  
           <div className={styles1.pagination}>
           <button value="0" onClick={e => setPagina(e.target.value)}>1</button>
           <button value="1" onClick={e => setPagina(e.target.value)}>2</button>
           <button value="2" onClick={e => setPagina(e.target.value)}>3</button>
           <button value="3" onClick={e => setPagina(e.target.value)}>4</button>
           </div>
       </div>
    )
}

export default Livros;
