import { EventDispatcher } from "src/core/eventDispatcher.js";

class MessagingService {
    /** @type{Map<string, EventDispatcher>} */
    #eventDispatchers = new Map();

    susbscribe(messageType, callback) {
        if(!this.#eventDispatchers.has(messageType)) {
            this.#eventDispatchers.set(messageType, new EventDispatcher());
        }

        const dispatcher = this.#eventDispatchers.get(messageType);
        return dispatcher.addEventListener(callback);
    }

    unsubscribe(messageType, callback) {
        const dispatcher = this.#eventDispatchers.get(messageType);
        if(!dispatcher) {
            throw new Error(`Message Type ${messageType} is currently not registered as a valid message type!`);
        }

        dispatcher.removeEventListener(callback);
    }

    publishMessage(messageType, ...payload) {
        const dispatcher = this.#eventDispatchers.get(messageType);
        if(!dispatcher) {
            console.log(`Message Type ${messageType} was not subscribed to yet!`);
            return;
        }

        dispatcher.dispatchEvent(...payload);
    }
}

export { MessagingService }
