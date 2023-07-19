class Columns2 extends DocumentObjectNode {
    constructor(element1, element2, id = null) {
        super();
        this.element1 = element1.node;
        this.element2 = element2.node;
        this.loadCSSandScriptTags("columns-2");
        return {node: this.createNode(id) }
    }

    createNode(id) {
        const div = document.createElement("DIV");
        this.element1.classList.add("columns-2-container-column-1");
        this.element2.classList.add("columns-2-container-column-2");
        div.appendChild(this.element1);
        div.appendChild(this.element2);
        div.classList.add("columns-2-container");
        if (id) div.id = id;
        return div;
    }
}