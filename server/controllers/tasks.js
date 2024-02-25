import { v4 as uuid } from "uuid";

let tasks = [];

export const getTasks = async (req, res) => {
    try {
        res.send(tasks);
    } catch (err) {
        console.error(err);
        res.status(400).send(err.message);
    }
}

export const createTasks = async (req, res) => {
    try {
        const task = req.body;
        tasks.push({ ...task, id: uuid() })
        res.send("User added successfuly");
    } catch (err) {
        console.error(err);
        res.status(400).send(err.message);
    }
}

export const getTask = async (req, res) => {
    try {
        const singleTask = tasks.filter((task) => task.id === req.params.id);
        res.send(singleTask);
    } catch (err) {
        console.error(err);
        res.status(400).send(err.message);
    }
}

export const getdeleteTask = async (req, res) => {
    try {
        tasks = tasks.filter((task) => task.id !== req.params.id);
        res.send("User is deleted");
    } catch (err) {
        console.error(err);
        res.status(400).send(err.message);
    }
}

export const getUpdateTask = async (req, res) => {
    try {
        const task = tasks.find((task) => task.id === req.params.id);
        task.title = req.body.title,
            task.description = req.body.description,
            res.send("User is updated is successfuly");
    } catch (err) {
        console.error(err);
        res.status(400).send(err.message);
    }
}
