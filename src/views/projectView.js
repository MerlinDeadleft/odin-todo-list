import CogIcon from "src/assets/icons/cog.svg";
import { ViewBase } from "./viewBase.js";
import { Project } from "src/models/projectsModel.js";
import { ViewTypes } from "src/utils/enums.js";
import { createMaskedIconImage } from "src/utils/helperFunctions.js";

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

        const header = this.#renderHeader();
        container.appendChild(header);

        return container;
    }

    #renderHeader() {
        const header = document.createElement("div");
        header.id = "project-view-header";

        const title = document.createElement("h2");
        title.textContent = this.#projectModel.title;
        header.appendChild(title);

        const settingsButton = document.createElement("button");
        settingsButton.setAttribute("title", "Project Settings");
        header.appendChild(settingsButton);

        const settingsIcon = createMaskedIconImage(CogIcon, 25);
        settingsButton.appendChild(settingsIcon);

        return header;
    }
}

export { ProjectView }
