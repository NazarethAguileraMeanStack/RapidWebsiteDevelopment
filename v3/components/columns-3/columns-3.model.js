class Columns3 extends DocumentObjectNode {
    constructor(element1, element2, element3, id = null) {
        super();
        this.element1 = element1.node;
        this.element2 = element2.node;
        this.element3 = element3.node;
        this.loadCSS("columns-3/columns-3.css");
        this.loadScript("columns-3/columns-3.js");
        return {node: this.createNode(id) }
    }

    // these static variables keep track if css and js tags and been included already
    static includeCSS = true;
    static includeScript = true;


    // checks for css link tag
    loadCSS(directory) {
        if (this.constructor.includeCSS) this.importCSS(directory);
        this.constructor.includeCSS = false;
    }


    // check for js tag
    loadScript(directory) {
        if (this.constructor.includeScript) this.importScript(directory);
        this.constructor.includeScript = false;
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