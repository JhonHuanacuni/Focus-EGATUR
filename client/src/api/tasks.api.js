import axios from 'axios';

const taskApi = axios.create({
    baseURL: 'http://localhost:8000/formulario/api/v1/tasks'
})

export const getAllTasks = () => taskApi.get('/')

export const createTask = (task) => taskApi.post('/', task)

export const deleteTask = (id) => taskApi.delete('/'+id)
