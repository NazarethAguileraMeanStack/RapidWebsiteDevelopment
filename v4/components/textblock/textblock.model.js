class TextBlock extends DocumentObjectNode {
    constructor(text, id = null) {
        super();
        this.loadCSSandScriptTags("textblock");
        this.text = text;
        return {node: this.createNode(id) }
    }

    createNode(id) {
        const div = document.createElement("DIV");
        const p = document.createElement("P");
        p.innerText = this.text;
        div.classList.add("textblock-container");
        div.appendChild(p);

        if (id) {
            div.id = id;
        }

        return div;
    }
}