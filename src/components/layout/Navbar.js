import styles from './Navbar.module.css';
import {Link} from 'react-router-dom';
import logo from '../img/logo.png';
import Container from './Container';

function Navbar(){
    return(
        <nav className={styles.navbar}>
          <Container>
             <Link to="/">
                <img src={logo} alt="costs"></img>
            </Link>
            <ul className={styles.list}>
                <li className={styles.item}>
                 <Link to="/">Inicio</Link>
                </li>
                <li className={styles.item}>
                 <Link to="/livros">Livros</Link>
                </li>
                <li className={styles.item}>
                 <Link to="/novolivro">Novo Livro</Link>
                </li>
                <li className={styles.item}>
                 <Link to="/sobre">Sobre</Link>
                </li>
            </ul>
          </Container>
        </nav>
    )
}

export default Navbar;