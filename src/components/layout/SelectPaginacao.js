import styles from './selectpaginacao.module.css';

const SelectPaginacao = ({itensPorPagina, setItensPorPagina}) =>{

    return(
        <div className={styles.select}>
        <select value={itensPorPagina} onChange={(e) => setItensPorPagina(Number(e.target.value))}>
        <option value={3}>3</option>
        <option value={6}>6</option>
        <option value={12}>12</option>
        <option value={24}>24</option>
        </select>
        </div>
    )
  }
  
  export default SelectPaginacao;




