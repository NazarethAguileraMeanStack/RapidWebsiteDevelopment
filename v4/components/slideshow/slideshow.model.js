class Slideshow extends DocumentObjectNode {
    constructor(defaultImage, id = null) {
        super();
        const componentName = "slideshow";
        this.defaultImage = defaultImage;
        this.loadCSSandScriptTags(componentName);
        this.template = this.createTemplate();
        return {node: this.createNode(id, componentName, this.template) };
    }

    createTemplate() {
        return `
        <img id="slideshow-image">
        `;
    }

    
}
