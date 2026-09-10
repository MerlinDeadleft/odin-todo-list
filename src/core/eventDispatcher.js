class EventDispatcher {
    #handlers = [];

    addEventListener(callback) {
        this.#handlers.push(callback);

        return () => this.removeEventListener(callback);
    }

    removeEventListener(callback) {
        let index = this.#handlers.indexOf(callback);
        while(index >= 0) {
            this.#handlers.splice(index, 1);
            index = this.#handlers.indexOf(callback);
        }
    }

    dispatchEvent(...payload) {
        this.#handlers.forEach(handler => {
            try {
                handler(...payload);
            } catch(error) {
                console.error("An event listener threw an error during execution: ", error);
            }
        })
    }
}

export { EventDispatcher }
