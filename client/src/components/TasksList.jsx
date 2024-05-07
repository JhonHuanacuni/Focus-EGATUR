import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";
export function TasksList() {

    const [tasks,setTasks] = useState([])

    //se ejecuta cuando cargue la pagina
    useEffect(()=>{ 
        async function loadTasks() { //llama a la funcion loadTasks
            const res = await getAllTasks() //pide al backEnd
            setTasks(res.data);
            console.log(res);
        }
        loadTasks();
    },[]);
  return <div>
    {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
    ))
    }
  </div>
  
}