import { useContext } from 'react';
import { taskContext } from '../context/TaskContext';
import TaskCard from './TaskCard';

const TaskList = () => { // obtnemos el prop

  const { tasks } = useContext(taskContext);

  if (tasks.length === 0) {
    return <h1 className='text-gray-400 text-4xl text-center'>No hay tareas aun</h1>
  }

  return (
    <div className='grid grid-cols-4 gap-4'>
      {tasks.map((tasks) => (
        <TaskCard  key={tasks.id} tasks={tasks}/>
      ))}
    </div>
  )
}

export default TaskList;