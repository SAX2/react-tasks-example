import { createContext, useState, useEffect } from "react";
import { tasks as data } from '../data/tasks'; // usa tasks pero lo nombra como data

export const taskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (task) => {
    setTasks([...tasks, {
      id: tasks.length,
      title: task.title || `Task #${tasks.length}`,
      description: task.description || 'Some new...'
    }]);
    //Copia tasks y agrega un task
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return (
    <taskContext.Provider value={{
      tasks: tasks,
      deleteTask: deleteTask,
      createTask: createTask
    }}>
      {props.children}
    </taskContext.Provider>
  )
}