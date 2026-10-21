import { ViewBase } from "./viewBase.js";
import { Project } from "src/models/projectsModel.js";
import { ViewTypes } from "src/utils/enums.js";

class ProjectView extends ViewBase {

    /** @type{Project} */
    #projectModel;

    setViewData(project) {
        this.#projectModel = project;
    }

    render() {
        const container = document.createElement("div");
        container.id = ViewTypes.PROJECT;
        container.dataset.projectId = this.#projectModel.id;

        const title = document.createElement("h2");
        title.textContent = this.#projectModel.title;
        container.appendChild(title);

        return container;
    }
}

export { ProjectView }
