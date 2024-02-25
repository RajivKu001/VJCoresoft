import express from "express";
import { getTasks, createTasks, getTask, getdeleteTask, getUpdateTask } from "../controllers/tasks.js";

const routers = express.Router();

routers.get('/api/tasks', getTasks);
routers.post('/api/task', createTasks);
routers.get('/api/task/:id', getTask);
routers.delete('/api/task/:id', getdeleteTask);
routers.put('/api/task/:id', getUpdateTask);



export default routers;