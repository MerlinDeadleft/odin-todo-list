import { ControllerBase } from "./controllerBase.js";
import { MainViewFactory } from "src/factories/mainViewFactory.js";
import { MessagingService } from "src/services/messagingService.js";
import { MessageType } from "src/utils/enums.js";

class MainViewController {
    static dependencies = [MessagingService, MainViewFactory];

    /** @type{MessagingService} */
    #messagingService;
    /** @type{MainViewFactory} */
    #mainViewFactory;

    /** @type{ControllerBase} */
    #currentController;
    /** @type{HTMLElement} */
    #mainViewContainer;

    constructor(messagingService, mainViewFactory) {
        this.#messagingService = messagingService;
        this.#mainViewFactory = mainViewFactory;

        this.#mainViewContainer = document.querySelector("main");

        this.#messagingService.susbscribe(MessageType.CHANGE_VIEW, (viewType, data) => this.#handleChangeView(viewType, data));
    }

    #handleChangeView(viewType, data) {
        if(this.#currentController) {
            this.#mainViewContainer.replaceChildren();
        }

        this.#currentController = this.#mainViewFactory.createMainViewController(viewType, data);
        const viewContent = this.#currentController.view.render();
        this.#mainViewContainer.appendChild(viewContent);
    }
}

export { MainViewController }
