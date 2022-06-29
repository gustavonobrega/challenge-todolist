import { PlusCircle } from 'phosphor-react';
import { FormEvent, useState } from 'react';

import styles from './NewTask.module.css';

interface NewTaskProps {
  onCreateTask: (newTask: string) => void;
}

export function NewTask({ onCreateTask }: NewTaskProps) {
  const [newTask, setNewTask] = useState('');
  
  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    onCreateTask(newTask);

    setNewTask('');
  }

  return (
    <form className={styles.newtask} onSubmit={handleCreateTask}>
      <input 
        placeholder='Adicione uma nova tarefa'
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        required
      />

      <button type="submit">
        Criar
        <PlusCircle size={20}/>
      </button>
    </form>
  )
}