import styles from '../pages/livros.module.css';

function MapLivros(lista){


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
        <>
        {lista_livros}
        </>
    )

 


}

export default MapLivros;