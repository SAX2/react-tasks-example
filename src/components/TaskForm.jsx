import { useState, useContext } from 'react';// Podemos usar el context que nos provee TaskContext.jsx
import { taskContext } from '../context/TaskContext';

const TaskForm = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { createTask } = useContext(taskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    createTask({
      title: title,
      description: description
    });

    setTitle('');//Vaciamos el estado
    setDescription('');
  }

  return (
    <div className='max-w-md mx-auto'>
      <form action="" onSubmit={handleSubmit} className='p-10 mb-4'>
        <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
        <input 
          type="text" 
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className='bg-slate-300 p-3 w-full mb-3 rounded-sm'
        />

        <textarea 
          placeholder='Escribe la descripcion de la tarea'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className='bg-slate-300 p-3 w-full mb-3 rounded-sm'
        ></textarea>

        <button className='bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-800'>
          Guardar
        </button>
      </form>
    </div>
  )
}

export default TaskForm;