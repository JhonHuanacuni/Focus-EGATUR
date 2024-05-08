/* permitir al usuario que ingrese
con imputs los datos que el quiere guardar */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createTask, deleteTask, updateTask, getTasks } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onsubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTask(params.id, data);
      toast.success("Tarea actualizada", {
        position: "top-center",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createTask(data);
      toast.success("Tarea creada", {
        position: "top-center",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }
    navigate("/tasks");
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const res = await getTasks(params.id);
        setValue("title", res.data.title);
        setValue("descripcion", res.data.descripcion);
      }
    }
    loadTask();
  }, []);

  return (
    <div className=" max-w-xl mx-auto">
      <form onSubmit={onsubmit}>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
          className=" bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />

        {errors.title && <span>Este campo es requerido</span>}

        <textarea
          rows="3"
          placeholder="Descripcion"
          {...register("descripcion", { required: true })}
          className=" bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        ></textarea>

        {errors.descripcion && <span>Este campo es requerido</span>}
        <button className=" bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Save
        </button>
      </form>

      {params.id && (
        <div className=" flex justify-end">
          <button className=" bg-red-500 p-3 rounded-lg w-48 mt-3"
          onClick={async () => {
            const accepted = window.confirm("Estas seguro?");
            if (accepted) {
              await deleteTask(params.id);
              toast.success("Tarea eliminada", {
                position: "top-center",
                style: {
                  background: "#101010",
                  color: "#fff",
                },
              });
              navigate("/tasks");
            }
          }}
        >
          Delete
        </button>
        </div>
      )}
    </div>
  );
}
