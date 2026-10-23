import "./projectView.css";
import CogIcon from "src/assets/icons/cog.svg";
import PlusCircle from "src/assets/icons/plus-circle.svg";
import { ViewBase } from "./viewBase.js";
import { Project } from "src/models/projectsModel.js";
import { ViewTypes } from "src/utils/enums.js";
import { createMaskedIconImage } from "src/utils/helperFunctions.js";
import { EventDispatcher } from "src/core/eventDispatcher.js";

class ProjectView extends ViewBase {

    /** @type{Project} */
    #projectModel;

    /** @type{HTMLElement} */
    #projectSettingsButton;

    onProjectSettingsClicked = new EventDispatcher();

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

        this.#bindEvents();

        return container;
    }

    #renderHeader() {
        const header = document.createElement("div");
        header.id = "project-view-header";

        const title = document.createElement("h2");
        title.textContent = this.#projectModel.title;
        header.appendChild(title);

        this.#projectSettingsButton = document.createElement("button");
        this.#projectSettingsButton.classList.add("action-button", "rounded");
        this.#projectSettingsButton.setAttribute("title", "Project Settings");
        header.appendChild(this.#projectSettingsButton);

        const settingsIcon = createMaskedIconImage(CogIcon, 25);
        this.#projectSettingsButton.appendChild(settingsIcon);

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

    #bindEvents() {
        this.#projectSettingsButton.addEventListener("click", () => this.#handleProjectSettingsClicked())
    }

    #handleProjectSettingsClicked() {
        this.onProjectSettingsClicked.dispatchEvent(this.#projectModel.id);
    }
}

export { ProjectView }
