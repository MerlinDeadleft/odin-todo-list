import { ControllerBase } from "src/controllers/controllerBase.js";
import { AddProjectView } from "src/views/modals/addProjectView.js";
import { ProjectsModel } from "src/models/projectsModel.js";
import { MessagingService } from "src/services/messagingService.js";
import { MessageType } from "src/utils/enums.js";

class AddProjectController extends ControllerBase {
    static dependencies = [AddProjectView, ProjectsModel, MessagingService];

    /** @type{ProjectsModel} */
    #projectsModel;
    /** @type{MessagingService} */
    #messagingService;

    /**
     * @param {AddProjectView} addProjectView 
     */
    constructor(addProjectView, projectsModel, messagingService) {
        super();
        this.view = addProjectView;
        this.#projectsModel = projectsModel;
        this.#messagingService = messagingService

        this.view.onAddProject.addEventListener(projectName => this.#handleOnAddProject(projectName))
    }

    #handleOnAddProject(projectName) {
        const projectId = this.#projectsModel.addProject(projectName);
        console.log(`Added project with id: ${projectId}`);
        this.#messagingService.publishMessage(MessageType.ADD_PROJECT, projectId);
    }
}

export { AddProjectController }
