import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import styles from './App.module.css';

import './global.css';
import { Tasks } from './components/Tasks';
import { useState } from 'react';

export interface TasksProps {
  id: number;
  title: string;
  isComplete: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  function createTask(newTask: string) {

    const task = {
      id: Math.floor(Math.random() * 1000 + 1),
      title: newTask,
      isComplete: false
    }

    setTasks([...tasks, task])
  }

  function updateTask(id: number) {
    const completedTask = tasks.map(task => task.id === id
      ? { ...task, isComplete: !task.isComplete }
      : task
    );

    setTasks(completedTask);
  }

  function deleteTask(id: number) {
    const tasksWithoutDeletedOne = tasks.filter(task => task.id !== id);

    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <div>
      <Header />

      <main className={styles.container}>
        <NewTask onCreateTask={createTask}/>

        <Tasks onUpdateTask={updateTask} onDeleteTask={deleteTask} tasks={tasks}/>
      </main>
    </div>
  )
}
