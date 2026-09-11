import { ControllerBase } from "./controllerBase.js";
import { AddProjectView } from "src/views/addProjectView.js";
import { ProjectsModel } from "src/models/projectsModel.js";

class AddProjectController extends ControllerBase {
    static dependencies = [AddProjectView, ProjectsModel];

    /** @type{ProjectsModel} */
    #projectsModel;

    constructor(addProjectView, projectsModel) {
        super();
        this.view = addProjectView;
        this.#projectsModel = projectsModel;

        this.view.onAddProject.addEventListener(projectName => this.#handleOnAddProject(projectName))
    }

    #handleOnAddProject(projectName) {
        const projectId = this.#projectsModel.addProject(projectName);
        console.log(`Added project with id: ${projectId}`);

        //TODO: send on project add message
    }
}

export { AddProjectController }
