import { PlusCircle } from 'phosphor-react';
import styles from './NewTask.module.css';

export function NewTask() {
  return (
    <form className={styles.newtask}>
      <input placeholder='Adicione uma nova tarefa'/>
      <button type="submit">
        Criar
        <PlusCircle size={20}/>
      </button>
    </form>
  )
}