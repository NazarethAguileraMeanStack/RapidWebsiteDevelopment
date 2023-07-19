class EmptyContainer extends DocumentObjectNode {
    constructor(elements, id = null) {
        super();
        this.elements = elements;
        this.loadCSSandScriptTags("emptyContainer");
        return {node: this.createNode(id)}
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