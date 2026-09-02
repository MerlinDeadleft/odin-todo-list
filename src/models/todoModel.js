import { Project } from "./project.js"

class TodoModel {
    /** @type{Project[]} */
    projects = [];

    addProject(projectTitle = "Default Project") {
        this.projects.push(new Project(projectTitle));
    }

    removeProject(projectId) {
        const project = this.projects.find(x => x.id === projectId);
        const index = this.projects.indexOf(project);
        this.projects.splice(index, 1);

        project.todoItems.forEach(todoItem => {
            this.removeTodoItem(todoItem.id);
        });
    }

    getProjectById(projectId) {
        return this.projects.find(x => x.id === projectId);
    }
}

export { TodoModel }