class ProjectsModel {
    /** @type{Project[]} */
    projects = [];

    addProject(projectTitle = "Default Project") {
        this.projects.push(new Project(projectTitle));
    }

    removeProject(projectId) {
        const index = this.projects.findIndex(x => x.id === projectId);
        this.projects.splice(index, 1);
    }

    getProjectById(projectId) {
        return this.projects.find(x => x.id === projectId);
    }
}

class Project {
    id = crypto.randomUUID();
    title;
    todoItemIds = [];

    constructor(title) {
        this.title = title;
    }

    addTodoItem(todoItemId) {
        this.todoItemIds.push(todoItemId);
    }

    removeTodoItem(todoItemId) {
        const index = this.todoItemIds.findIndex(x => x.id === todoItemId);
        this.todoItemIds.splice(index, 1);
    }
}

export { ProjectsModel, Project }