class TextBlock extends DocumentObjectNode {
    constructor(text, id = null) {
        super();
        const componentName = "textblock";
        this.text = text;
        this.loadCSSandScriptTags(componentName);
        this.template = this.createTemplate();
        return {node: this.createNode(id, componentName, this.template) }
    }

    createTemplate() {        
        return `
        <p>${this.text}</p>
        `;
    }
}