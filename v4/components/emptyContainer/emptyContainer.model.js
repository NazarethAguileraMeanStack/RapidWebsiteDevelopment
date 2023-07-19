class EmptyContainer extends DocumentObjectNode {
    constructor(elements, id = null) {
        super();
        const componentName = "emptyContainer";
        this.elements = elements;
        this.loadCSSandScriptTags(componentName);
        this.template = this.createTemplate();
        return {node: this.createNode(id, componentName, this.template)}
    }

    createTemplate() {
        let html = "";

        for (let i = 0; i < this.elements.length; i++) {
            html += this.elements[i].node.outerHTML;
        }

        return html;
        
    }
}