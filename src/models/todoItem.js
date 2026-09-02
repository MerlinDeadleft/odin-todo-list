import { Task } from "./task.js";

class TodoItem {
    id = crypto.randomUUID();
    title;
    description;
    dueDate;
    prority;
    /** @type{Task[]} */
    tasks = [];
    isDone = false;

    constructor(title, description = "", dueDate = null, priority = null) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.prority = priority;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(taskId) {
        const index = this.tasks.findIndex(x => x.id === taskId);
        this.tasks.splice(index, 1);
    }

    getTaskById(taskId) {
        return this.tasks.find(x => x.id === taskId);
    }
}

export { TodoItem }