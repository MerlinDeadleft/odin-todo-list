import { ButtonTypes } from "src/utils/enums.js";
import { EventDispatcher } from "src/core/eventDispatcher.js";

class AddProjectView {
    onAddProject = new EventDispatcher();

    render() {
        const container = document.createElement("div");

        const form = this.#renderForm();
        container.appendChild(form);

        const createButton = document.createElement("button");
        createButton.setAttribute("form", form.id);
        createButton.textContent = "Create Project";
        container.appendChild(createButton);

        const cancelButton = document.createElement("button");
        cancelButton.setAttribute("type", "button");
        cancelButton.textContent = "Cancel";
        cancelButton.dataset.buttonType = ButtonTypes.CancelButton;
        container.appendChild(cancelButton);

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
