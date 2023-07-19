class Columns2 extends DocumentObjectNode {
    constructor(element1, element2, id = null) {
        super();
        const componentName = "columns-2";
        this.element1 = element1.node;
        this.element2 = element2.node;
        this.loadCSSandScriptTags(componentName);
        this.template = this.createTemplate();
        return {node: this.createNode(id, componentName, this.template) }
    }

    createTemplate() {
        console.log(this.element1);
        console.log(this.element2);
        this.element1.classList.add("columns-2-container-column-1");
        this.element2.classList.add("columns-2-container-column-2");
        return `
        ${this.element1.outerHTML}
        ${this.element2.outerHTML}
        `;
    }
}