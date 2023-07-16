class Columns2 extends DocumentObjectNode {
    constructor(element1, element2, id = null) {
        super();
        this.element1 = element1.node;
        this.element2 = element2.node;
        this.loadCSS("columns-2/columns-2.css");
        this.loadScript("columns-2/columns-2.js");
        return {node: this.createNode(id) }
    }

    static includeCSS = true;
    static includeScript = true;

    loadCSS(directory) {
        if (this.constructor.includeCSS) this.importCSS(directory);
        this.constructor.includeCSS = false;
    }

    loadScript(directory) {
        if (this.constructor.includeScript) this.importScript(directory);
        this.constructor.includeScript = false;
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