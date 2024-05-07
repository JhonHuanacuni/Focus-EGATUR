/* permitir al usuario que ingrese
con imputs los datos que el quiere guardar */
import { useForm } from "react-hook-form";
import { createTask, deleteTask } from "../api/tasks.api";
import { Navigate, useNavigate, useParams } from "react-router-dom";


export function TaskFormPage(){
    const {register, handleSubmit, formState: {
        errors
    }} = useForm();

    const navigate = useNavigate()
    const params = useParams()
    const onsubmit = handleSubmit( async data => {
        await createTask(data);
        navigate('/tasks')
    })

    return(
        <div>
            <form onSubmit={onsubmit}>
                <input 
                    type="text" 
                    placeholder="title" 
                    {...register("title",{required: true})}
                />
                
                { errors.title && <span>Este campo es requerido</span>}

                <textarea 
                    rows="3" 
                    placeholder="Descripcion"
                    {...register("descripcion",{required: true})}
                ></textarea>
                
                { errors.descripcion && <span>Este campo es requerido</span>}
                <button>Save</button>
            </form>            
            
            {
                params.id && <button onClick={async () =>{
                    const accepted = window.confirm("Estas seguro?")
                    if(accepted){
                        await deleteTask(params.id)
                        navigate('/tasks')
                    }
                } }>Delete</button>
            }            
        </div>

    )
}

