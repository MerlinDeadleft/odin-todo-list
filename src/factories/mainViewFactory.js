import { ProjectController } from "src/controllers/projectController.js";
import { IocContainer } from "src/core/iocContainer.js";
import { ViewTypes } from "src/utils/enums.js";

class MainViewFactory {
    static dependencies = [IocContainer];

    /** @type{IocContainer} */
    #iocContainer;

    constructor(iocContainer) {
        this.#iocContainer = iocContainer;
    }

    /**
     * @param {ViewTypes} viewType
     */
    createMainViewController(viewType, data) {
        switch(viewType) {
            case ViewTypes.ADD_TODO:
                //create add todo controller;
                break;
            case ViewTypes.DUE_TODAY:
                //create due today controller;
                break;
            case ViewTypes.UPCOMING:
                //create upcoming controller;
                break;
            case ViewTypes.PROJECT:
                const projectController = this.#iocContainer.resolveDependencies(ProjectController);
                projectController.setProjectData(data);
                return projectController;
            default:
                break;
        }
    }
}

export { MainViewFactory }
