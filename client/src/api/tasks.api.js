import axios from 'axios';

const taskApi = axios.create({
    baseURL: 'http://localhost:8000/formulario/api/v1/tasks'
})

export const getAllTasks = () => taskApi.get('/')

// obtener una unica tarea
export const getTasks = (id) => taskApi.get('/'+id+'/')

export const createTask = (task) => taskApi.post('/', task)

export const deleteTask = (id) => taskApi.delete('/'+id)

export const updateTask = (id, task) => taskApi.put('/'+id+'/', task)
