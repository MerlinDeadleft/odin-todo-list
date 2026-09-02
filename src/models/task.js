class Task {
    id = crypto.randomUUID();
    title;
    dueDate;
    priority;
    isDone = false;

    constructor(title, dueDate, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export { Task }