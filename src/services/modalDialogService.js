import { EventDispatcher } from "src/core/eventDispatcher.js";
import { ModalFactory } from "src/factories/modalFactory.js";

class Modal {
    /** @type{HTMLDialogElement} */
    dialog;
    controller;

    /** @type{EventDispatcher} */
    onCloseDialog = new EventDispatcher();

    constructor(dialog, controller) {
        this.dialog = dialog;
        this.controller = controller;

        this.dialog.addEventListener("close", () => this.#handleCloseDialog());
    }

    #handleCloseDialog() {
        this.onCloseDialog.dispatchEvent();
    }
}

class ModalDialogService {
    static dependencies = [ModalFactory];

    /** @type{ModalFactory} */
    #modalFactory;

    constructor(modalFactory) {
        this.#modalFactory = modalFactory;
    }

    //TODO: better define Modal interface
    showModal(viewClass, closedBy) {
        const modal = this.#modalFactory.createModal(viewClass, closedBy);
        const main = document.querySelector("main");
        main.appendChild(modal.dialog);
        const removeOnCloseModal = modal.onCloseDialog.addEventListener(() => this.#handleCloseModal(modal, removeOnCloseModal));
        modal.dialog.showModal();

        return modal;
    }

    #handleCloseModal(modal, cleanUpFunction) {
        const main = document.querySelector("main");
        main.removeChild(modal.dialog);
        cleanUpFunction();
        modal = null;
    }
}

export { Modal, ModalDialogService }
