import { MessagingService } from "src/services/messagingService.js";
import { MessageType, ViewTypes } from "src/utils/enums.js";

class MainViewController {
    static dependencies = [MessagingService];

    /** @type{MessagingService} */
    #messagingService;

    /** @type{ControllerBase} */
    #currentController;

    constructor(messagingService) {
        this.#messagingService = messagingService;

        this.#messagingService.susbscribe(MessageType.CHANGE_VIEW, (viewType, data) => this.#handleChangeView(viewType, data));
    }

    /**
     * @param {ViewTypes} viewType
     */
    #handleChangeView(viewType, data) {
        if(this.#currentController) {
            //clean up current controller and view
        }

        switch (viewType) {
            case ViewTypes.ADD_TODO:
                // Show Add Todo View
                break;
            case ViewTypes.DUE_TODAY:
                //Show Due Today View
                break;
            case ViewTypes.UPCOMING:
                //Show Upcoming View
                break;
            case ViewTypes.PROJECT:
                //Show Project View;
                break;
            default:
                break;
        }
    }
}

export { MainViewController }
