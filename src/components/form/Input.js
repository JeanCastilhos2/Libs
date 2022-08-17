import styles from './input.module.css';

function Input({type,name,onChange,value}){

    return(
    <div className={styles.form_control} >
       <label htmlFor={name}>{name}:</label> 
       <input
         type={type} 
         name={name} 
         onChange={onChange}
         value={value}/>
    </div>

    )
}

export default Input;