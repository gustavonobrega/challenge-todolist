import { Trash } from 'phosphor-react';
import { TasksProps } from '../App';

import clipboard from '../assets/clipboard.svg';
import styles from './Tasks.module.css';


interface TaskProps {
  tasks: TasksProps[];
  onUpdateTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export function Tasks({ tasks, onUpdateTask, onDeleteTask } : TaskProps) {
  
  function handleTaskIsCompleted(id: number) {
    onUpdateTask(id);
  }

  function handleDeleteTask(id: number) {
    onDeleteTask(id);
  }

  const completedTasks = tasks.filter(task => task.isComplete === true)
  
  return (
    <div className={styles.tasks}>
      <header>
        <div className={styles.createdTasks}>
          <strong>Tarefas criadas</strong>
          <span>{tasks.length}</span>
        </div>

        <div className={styles.completedTasks}>
          <strong>Concluídas</strong>
          <span>{`${completedTasks.length} de ${tasks.length}`}</span>
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
          {tasks.map(task => (
            <li key={task.id} className={styles.myTasks}>
              <div className={task.isComplete ? styles.isComplete : ''}>
                <label className={styles.checkboxContainer}>
                  <input 
                    type="checkbox"
                    checked={task.isComplete} 
                    onClick={() => handleTaskIsCompleted(task.id)}/>
                  <span className={styles.checkmark}></span>
                </label>
                <p>{task.title}</p>
              </div>
                      
              <button type="button" onClick={() => handleDeleteTask(task.id)}>
                <Trash size={16}/>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}