import { useState, useEffect } from "react";
import styles from "./livros.module.css";

function Livros() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      const data = await fetch(`http://localhost:4567/livros/pagina/1/4`);

      const response = await data.json();

      setLista(response);
    };
    fetchData();
  }, []);

  const lista_livros = lista.map((livro) => (
    <div className={styles.container}>
      <div className={styles.book}>
        <div className={styles.front}>
          <div className={styles.cover}>
            {lista.imagem ? (
              <img src={livro.imagem} alt="imagem" />
            ) : (
              <>
                <p className={styles.numup}>{livro.titulo}</p>
                <p className={styles.author}>{livro.autor}</p>
              </>
            )}
          </div>
        </div>
        <div className={styles.leftside}>
          <h2>
            <span>{livro.autor}</span>
            <span>{livro.titulo}</span>
          </h2>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className={styles.livros}>{lista_livros}</div>
    </div>
  );
}

export default Livros;
