import { Priority } from "../utils/enums.js"

class TodoItemsModel {
    /** @type{TodoItem[]} */
    todoItems = [];

    addTodoItem(title, description = "", dueDate = null, priority = Priority.NORMAL) {
        this.todoItems.push(new TodoItem(title, description, dueDate, priority));
    }

    removeTodoItem(todoItemId) {
        const index = this.todoItems.findIndex(x => x.id === todoItemId);
        this.todoItems.splice(index, 1);
    }

    getTodoItemById(todoItemId) {
        return this.todoItems.find(x => x.id === todoItemId);
    }
}

class TodoItem {
    id = crypto.randomUUID();
    title;
    description;
    dueDate;
    /** @type{Priority} */
    prority;
    taskIds = [];
    isDone = false;

    constructor(title, description = "", dueDate = null, priority = Priority.NORMAL) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.prority = priority;
    }

    addTask(task) {
        this.taskIds.push(task);
    }

    removeTask(taskId) {
        const index = this.taskIds.findIndex(x => x.id === taskId);
        this.taskIds.splice(index, 1);
    }

    getTaskById(taskId) {
        return this.taskIds.find(x => x.id === taskId);
    }
}

export { TodoItemsModel, TodoItem }
