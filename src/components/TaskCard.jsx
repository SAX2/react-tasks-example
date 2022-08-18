import { useContext } from "react";
import { taskContext } from "../context/TaskContext";

function TaskCard({ tasks }) {

  const { deleteTask } = useContext(taskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{tasks.title}</h1>
      <p className="text-gray-500 text-sm">{tasks.description}</p>

      <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={() => {
        deleteTask(tasks.id)
      }}>
        Eliminar tarea
      </button>
    </div>
  )
}

export default TaskCard;