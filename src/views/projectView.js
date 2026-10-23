import "./projectView.css";
import CogIcon from "src/assets/icons/cog.svg";
import PlusCircle from "src/assets/icons/plus-circle.svg";
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

        const todoContainer = this.#renderTodoContainer();
        container.append(todoContainer);

        const addTodoButton = this.#renderAddTodoButton();
        container.appendChild(addTodoButton);

        return container;
    }

    #renderHeader() {
        const header = document.createElement("div");
        header.id = "project-view-header";

        const title = document.createElement("h2");
        title.textContent = this.#projectModel.title;
        header.appendChild(title);

        const settingsButton = document.createElement("button");
        settingsButton.classList.add("action-button", "rounded");
        settingsButton.setAttribute("title", "Project Settings");
        header.appendChild(settingsButton);

        const settingsIcon = createMaskedIconImage(CogIcon, 25);
        settingsButton.appendChild(settingsIcon);

        return header;
    }

    #renderTodoContainer() {
        const todoContainer = document.createElement("div");
        todoContainer.classList.add("scrollable");


        return todoContainer;
    }

    #renderAddTodoButton() {
        const addTodoButton = document.createElement("button");
        addTodoButton.id = "add-todo-button";
        addTodoButton.setAttribute("title", "Add Todo");

        const addTodoIcon = createMaskedIconImage(PlusCircle, 75);
        addTodoButton.appendChild(addTodoIcon);

        return addTodoButton;
    }
}

export { ProjectView }
