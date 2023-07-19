class formTextInput extends DocumentObjectNode {
    constructor(name, id = null) {
        super();
        const componentName = "formTextInput";
        this.name = name;
        this.loadCSSandScriptTags(componentName);
        this.template = this.createTemplate();
        return {node: this.createNode(id, componentName, this.template)}
    }

    createTemplate() {
        return `
        <label for=${this.name}>${this.name}</label>
        <input type="text" name=${this.name}>
        `;
    }
}