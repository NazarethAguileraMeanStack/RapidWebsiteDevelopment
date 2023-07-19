class Banner extends DocumentObjectNode {
    constructor(title, id = null) {
        super();
        const componentName = "banner";
        this.title = title;
        this.loadCSSandScriptTags(componentName);
        this.template = this.createTemplate();
        return {node: this.createNode(id, componentName, this.template)};
    }


    createTemplate() {
        return `
        <h1>${this.title}</h1>
        `;
    }
}