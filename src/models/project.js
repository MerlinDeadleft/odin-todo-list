import { TodoItem } from "./todoItem.js";

class Project {
    id = crypto.randomUUID();
    title;
    /** @type{TodoItem[]} */
    todoItems = [];

    constructor(title) {
        this.title = title;
    }

    addTodoItem(todoItem) {
        this.todoItems.push(todoItem);
    }

    removeTodoItem(todoItemId) {
        const index = this.todoItems.findIndex(x => x.id === todoItemId);
        this.todoItems.splice(index, 1);
    }

    getTodoItemById(todoItemId) {
        return this.todoItems.find(x => x.id === todoItemId);
    }
}

export { Project }