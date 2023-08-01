class Columns3 extends DocumentObjectNode {
    constructor(element1, element2, element3, id = null) {
        super();
        const componentName = "columns-3";
        this.element1 = element1.node;
        this.element2 = element2.node;
        this.element3 = element3.node;
        this.loadCSSandScriptTags(componentName);
        this.template = this.createTemplate();
        return {node: this.createNode(id, componentName, this.template) }
    }

    createTemplate() {
        this.element1.classList.add("columns-3-container-column-1");
        this.element2.classList.add("columns-3-container-column-2");
        this.element3.classList.add("columns-3-container-column-3");
        return `
        ${this.element1.outerHTML}
        ${this.element2.outerHTML}
        ${this.element3.outerHTML}
        `;
    }
}