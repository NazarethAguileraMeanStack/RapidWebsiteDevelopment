class EmptyContainer extends DocumentObjectNode {
    constructor(elements, id = null) {
        super();
        this.elements = elements;
        this.loadCSS("emptyContainer/emptyContainer.css");
        this.loadScript("emptyContainer/emptyContainer.js");
        return {node: this.createNode(id)}
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
        div.classList.add("emptyContainer-container");

        for (let i = 0; i < this.elements.length; i++) {
            div.appendChild(this.elements[i].node);
        }


        if (id) div.id = id;
        return div;
        
    }
}