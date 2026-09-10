import { Priority } from "src/utils/enums.js";

class TasksModel {
    /** @type{Task[]} */
    tasks = [];

    addTask(title, dueDate = null, priority = Priority.NORMAL) {
        this.todoItems.push(new Task(title, dueDate, priority));
    }

    removeTodoItem(todoItemId) {
        const index = this.todoItems.findIndex(x => x.id === todoItemId);
        this.todoItems.splice(index, 1);
    }

    getTodoItemById(todoItemId) {
        return this.todoItems.find(x => x.id === todoItemId);
    }
}

class Task {
    id = crypto.randomUUID();
    title;
    dueDate;
    /** @type{Priority} */
    priority;
    isDone = false;

    constructor(title, dueDate = null, priority = Priority.NORMAL) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export { TasksModel, Task }
