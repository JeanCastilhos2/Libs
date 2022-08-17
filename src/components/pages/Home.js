import styles from './home.module.css';
import imagem_home from '../img/imagem_home.png';
import LinkButton from '../layout/LinkButton';

function Home(){

    return(
     <section className={styles.home_container}>
        <h1>
           Bem vindo ao <span>Libs</span>
        </h1>
        <p>Cadastre seus livros e gerencie sua bibilioteca agora mesmo !</p>
        <LinkButton to="/novolivro" text="Cadastrar Livros"/>
        <img src={imagem_home} alt='imagem'/>
     </section>
    )
}

export default Home;