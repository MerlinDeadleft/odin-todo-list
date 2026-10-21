import { ControllerBase } from "./controllerBase.js";
import { ProjectView } from "src/views/projectView.js";
import { ProjectsModel } from "src/models/projectsModel.js";

class ProjectController extends ControllerBase {
    static dependencies = [ProjectView, ProjectsModel];

    /**@type{ProjectsModel} */
    #projectsModel;

    constructor(projectView, projectsModel) {
        super();
        this.view = projectView;
        this.#projectsModel = projectsModel;
    }

    setProjectData(projectId) {
        const project = this.#projectsModel.getProjectById(projectId);
        this.view.setViewData(project);
    }
}

export { ProjectController }
