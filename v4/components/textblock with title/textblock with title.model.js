class TextBlockWithTitle extends DocumentObjectNode {
    constructor(title, text, id = null) {
        super();
        this.loadCSSandScriptTags("textblock with title");
        this.title = title;
        this.text = text;
        return {node: this.createNode(id)}
    }

    createNode(_id) {
        const div = document.createElement("DIV");
        const h2 = document.createElement("H2");
        const p = document.createElement("P");

        h2.innerText = this.title;
        p.innerText = this.text;

        div.appendChild(h2);
        div.appendChild(p);
        div.classList.add("textblock-with-title-container");
        if (_id) div.id = _id;
        return div;
    }
}