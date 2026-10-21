class ViewBase {
    render() {
        throw new Error(`${this.constructor.name} does not implement render()!`);
    }
}

export { ViewBase }
