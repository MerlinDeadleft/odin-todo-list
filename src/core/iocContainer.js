class IocContainer {
    #singletonServices = new Map();
    #instances = new Map();
    #transientServices = new Map();

    registerSingleton(type, implementation = type) {
        this.#singletonServices.set(type, implementation);
    }

    registerTransient(type, implementation = type) {
        this.#transientServices.set(type, implementation);
    }

    resolveDependencies(type) {
        if(this.#singletonServices.has(type)) {
            return this.#resolveSingleton(type);
        }

        return this.#resolveTransient(type);
    }

    #resolveSingleton(type) {
        if(this.#instances.has(type)) {
            return this.#instances.get(type);
        }

        const implementation = this.#singletonServices.get(type);
        if(!implementation) {
            throw new Error(`Dependency ${type.name} is not registered!`);
        }

        const instance = this.#createInstance(implementation);
        this.#instances.set(type, instance);

        return instance;
    }

    #resolveTransient(type) {
        const implementation = this.#transientServices.get(type);
        if(!implementation) {
            throw new Error(`Dependency ${type.name} is not registered!`);
        }

        return this.#createInstance(implementation);
    }

    #createInstance(implementation) {
        const dependencies = implementation.dependencies || [];
        const resolvedDependencies = dependencies.map(dependency => this.resolveDependencies(dependency));

        return new implementation(...resolvedDependencies);
    }
}

export { IocContainer }
