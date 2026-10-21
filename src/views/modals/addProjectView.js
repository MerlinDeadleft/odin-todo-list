import "./addProjectView.css";
import { ButtonTypes } from "src/utils/enums.js";
import { EventDispatcher } from "src/core/eventDispatcher.js";
import { ViewBase } from "src/views/viewBase.js";

class AddProjectView extends ViewBase {
    onAddProject = new EventDispatcher();

    render() {
        const container = document.createElement("div");

        const title = document.createElement("h2");
        title.textContent = "Add New Project";
        title.classList.add("modal-title");
        container.appendChild(title);

        const form = this.#renderForm();
        container.appendChild(form);

        const buttonContainer = document.createElement("div");
        container.appendChild(buttonContainer);

        const createButton = document.createElement("button");
        createButton.setAttribute("form", form.id);
        createButton.textContent = "Create Project";
        createButton.classList.add("modal-button-confirm");
        buttonContainer.appendChild(createButton);

        const cancelButton = document.createElement("button");
        cancelButton.setAttribute("type", "button");
        cancelButton.textContent = "Cancel";
        cancelButton.dataset.buttonType = ButtonTypes.CANCEL_BUTTON;
        cancelButton.classList.add("modal-button-cancel");
        buttonContainer.appendChild(cancelButton);

        this.#bindEvents(form);

        return container;
    }

    #renderForm() {
        const form = document.createElement("form");
        form.setAttribute("method", "dialog");
        form.id = "add-project-form";

        const projectNameLabel = document.createElement("label");
        projectNameLabel.setAttribute("for", "project-name");
        projectNameLabel.textContent = "Project Name:";
        form.appendChild(projectNameLabel);

        const projectNameInput = document.createElement("input");
        projectNameInput.setAttribute("type", "text");
        projectNameInput.setAttribute("name", "project-name");
        projectNameInput.setAttribute("required", "");
        projectNameInput.id = "project-name";
        form.appendChild(projectNameInput);

        return form;
    }

    #bindEvents(form) {
        form.addEventListener("submit", submitEvent => this.#handleOnAddProjectFormSubmit(submitEvent, form.id));
    }

    /** @param {SubmitEvent} submitEvent  */
    #handleOnAddProjectFormSubmit(submitEvent, formId) {
        if(submitEvent.target.id !== formId) return;

        const formData = new FormData(submitEvent.target);
        const projectName = formData.get("project-name");

        this.onAddProject.dispatchEvent(projectName);
    }
}

export { AddProjectView }
