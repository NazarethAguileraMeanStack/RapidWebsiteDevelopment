class TextBlockWithTitle extends DocumentObjectNode {
    constructor(title, text, id = null) {
        super();
        const componentName = "textblock with title";
        this.title = title;
        this.text = text;
        this.loadCSSandScriptTags(componentName);
        this.template = this.createTemplate();
        return {node: this.createNode(id, componentName, this.template)}
    }

    createTemplate() {
        return `
        <h1>${this.title}</h2>
        <p>${this.text}</p>
        `;
    }
}