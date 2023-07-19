class Columns3 extends DocumentObjectNode {
    constructor(element1, element2, element3, id = null) {
        super();
        this.element1 = element1.node;
        this.element2 = element2.node;
        this.element3 = element3.node;
        this.loadCSSandScriptTags("columns-3");
        return {node: this.createNode(id) }
    }

    createNode(id) {
        const div = document.createElement("DIV");
        this.element1.classList.add("columns-3-container-column-1");
        this.element2.classList.add("columns-3-container-column-2");
        this.element3.classList.add("columns-3-container-column-3");
        div.appendChild(this.element1);
        div.appendChild(this.element2);
        div.appendChild(this.element3);
        div.classList.add("columns-3-container");
        if (id) div.id = id;
        return div;
    }
}