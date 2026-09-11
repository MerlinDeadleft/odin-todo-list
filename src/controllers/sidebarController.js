import { ControllerBase } from "./controllerBase.js";
import { ProjectsModel } from "src/models/projectsModel.js";
import { SidebarView } from "src/views/sidebarView.js";
import { ModalDialogService } from "src/services/modalDialogService.js";
import { AddProjectController } from "src/controllers/addProjectController.js";

class SidebarController extends ControllerBase {
    static dependencies = [ProjectsModel, SidebarView, ModalDialogService];

    /** @type{ProjectsModel} */
    projectsModel;
    /** @type{ModalDialogService} */
    modalDialogService

    constructor(projectsModel, sidebarView, modalDialogService) {
        super();
        this.projectsModel = projectsModel;
        this.view = sidebarView;
        this.modalDialogService = modalDialogService;

        this.view.onAddProjectButtonClicked.addEventListener(() => this.handleAddProjectButtonClicked());

        this.view.selectDefaultView();
    }

    activate() {

    }

    handleAddProjectButtonClicked() {
        this.modalDialogService.showModal(AddProjectController, "any");
    }
}

export { SidebarController }
