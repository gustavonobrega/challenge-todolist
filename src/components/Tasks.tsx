import { Trash } from 'phosphor-react';
import clipboard from '../assets/clipboard.svg';

import styles from './Tasks.module.css';

const tasks = [
  {
    title: 'Testando',
    isComplete: true
  }
]

export function Tasks() {
  return (
    <div className={styles.tasks}>
      <header>
        <div className={styles.createdTasks}>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>

        <div className={styles.completedTasks}>
          <strong>Concluídas</strong>
          <span>0</span>
        </div>
      </header>

      {tasks.length === 0 ? (
        <div className={styles.noTasks}>
          <img src={clipboard} alt="Clipboard icon" />
          <span>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer
          </span>
        </div>
      ) : (
        <ul>
          <li className={styles.myTasks}>
            <div>
              <label className={styles.checkboxContainer}>
                <input type="checkbox"/>
                <span className={styles.checkmark}></span>
              </label>
                <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            </div>
            
            <button type="button">
              <Trash size={16}/>
            </button>
          </li>
        </ul>
      )}
    </div>
  )
}