import {Link} from 'react-router-dom';
import styles from './linkbutton.module.css';

function LinkButton({to,text}){

    return(
    <Link className={styles.link_btn} to={to}>
      {text}
    </Link>

    )
}

export default LinkButton;