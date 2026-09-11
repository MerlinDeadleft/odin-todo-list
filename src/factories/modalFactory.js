import { ControllerBase } from "src/controllers/controllerBase.js";
import { IocContainer } from "src/core/iocContainer.js";
import { Modal } from "src/services/modalDialogService.js";
import { ButtonTypes } from "src/utils/enums.js";

class ModalFactory {
    static dependencies = [IocContainer];

    /** @type{IocContainer} */
    #iocContainer;

    constructor(iocContainer) {
        this.#iocContainer = iocContainer;
    }

    createModal(controller, closedBy) {
        if(!(controller.prototype instanceof ControllerBase)) {
            throw new Error(`${controller.name} is not extended from ControllerBase!`);
        }

        const dialog = document.createElement("dialog");
        dialog.id = "dialog-modal";

        if(closedBy) {
            dialog.setAttribute("closedBy", closedBy);
        }

        /** @type{ControllerBase} */
        let controllerInstance;
        if(controller) {
            controllerInstance = this.#iocContainer.resolveDependencies(controller);
            dialog.appendChild(controllerInstance.view.render());
            dialog.id = `${controller.name}-modal`;
        }

        const closeButtons = dialog.querySelectorAll(`button[data-button-type=${ButtonTypes.CancelButton}], button[data-button-type=${ButtonTypes.CloseButton}]`);
        if(closeButtons.length > 0) {
            closeButtons.forEach(button => {
                button.setAttribute("command", "close");
                button.setAttribute("commandfor", dialog.id);
            });
        } else {
            const closeButton = document.createElement("button");
            closeButton.setAttribute("type", "button");
            closeButton.setAttribute("command", "close");
            closeButton.setAttribute("commandfor", dialog.id);
            closeButton.dataset.buttonType = ButtonTypes.CancelButton;
            closeButton.textContent = "Close";

            dialog.appendChild(closeButton);
        }

        return new Modal(dialog, controllerInstance);
    }
}

export { ModalFactory }
