class Icon extends DocumentObjectNode {
    constructor(img, text = null, id = null) {
        super();
        const componentName = "icon";
        this.img = img;
        this.text = text;
        this.loadCSSandScriptTags(componentName);
        this.template = this.createTemplate();
        return {node: this.createNode(id, componentName, this.template)};
    }

    createTemplate() {
        
        if (this.text) {
            return `
            <img src=${this.img}>
            <p>${this.text}</p>
            `;
        } else {
            return `
            <img src=${this.img}>
            `;
        }
        
    }

}