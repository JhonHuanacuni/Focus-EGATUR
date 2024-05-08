import { useNavigate } from "react-router-dom";

export function TaskCard({ task }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => {
        navigate("/tasks/" + task.id);
      }}
    >
      <div>
        <h1>{task.title}</h1>
        <h1>{task.descripcion}</h1>
        <hr />
      </div>
    </div>
  );
}
