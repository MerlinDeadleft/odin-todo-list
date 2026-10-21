import { ControllerBase } from "./controllerBase.js";
import { ProjectsModel } from "src/models/projectsModel.js";
import { SidebarView } from "src/views/sidebarView.js";
import { ModalDialogService } from "src/services/modalDialogService.js";
import { AddProjectController } from "src/controllers/modals/addProjectController.js";
import { MessagingService } from "src/services/messagingService.js";
import { MessageType } from "src/utils/enums.js";

class SidebarController extends ControllerBase {
    static dependencies = [ProjectsModel, SidebarView, ModalDialogService, MessagingService];

    /** @type{ProjectsModel} */
    #projectsModel;
    /** @type{ModalDialogService} */
    #modalDialogService
    /** @type{MessagingService} */
    #messagingService

    /**
     * @param {SidebarView} sidebarView
     */
    constructor(projectsModel, sidebarView, modalDialogService, messagingService) {
        super();
        this.#projectsModel = projectsModel;
        this.view = sidebarView;
        this.#modalDialogService = modalDialogService;
        this.#messagingService = messagingService;
    
        for(let project of this.#projectsModel.projects) {
            this.view.createProjectButtonView(project, false);
        }

        this.#messagingService.susbscribe(MessageType.ADD_PROJECT, projectId => this.#handleProjectAdded(projectId));
        
        this.view.onAddProjectButtonClicked.addEventListener(() => this.#handleAddProjectButtonClicked());
        this.view.onChangeViewClicked.addEventListener((viewType, projectId) => this.#handleChangeViewClicked(viewType, projectId))
    }

    activate() {
        this.view.selectDefaultView();
    }

    #handleProjectAdded(projectId) {
        const project = this.#projectsModel.getProjectById(projectId);
        this.view.createProjectButtonView(project);
    }

    #handleAddProjectButtonClicked() {
        this.#modalDialogService.showModal(AddProjectController, "any");
    }

    #handleChangeViewClicked(viewType, projectId) {
        this.#messagingService.publishMessage(MessageType.CHANGE_VIEW, viewType, projectId);
    }
}

export { SidebarController }
