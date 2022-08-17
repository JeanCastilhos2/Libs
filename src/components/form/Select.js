import styles from './select.module.css';

function Select({name,text,value,handleOnChange,options}){

    return(
    <div className={styles.form_control} >
       <label htmlFor={name}>{text}:</label> 
       <select name={name} id={name} onChange={handleOnChange} value={value || '' } >
         <option>Selecione uma Opção</option>
         {options.map((option) => (<option value={option.id} key={option.id}>{option.nome}</option>))}
       </select>
    </div>
    )
}

export default Select;