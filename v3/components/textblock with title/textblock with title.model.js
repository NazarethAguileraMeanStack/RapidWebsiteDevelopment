class TextBlockWithTitle extends DocumentObjectNode {
    constructor(title, text, id = null) {
        super();
        this.loadCSS("textblock with title/textblock with title.css");
        this.loadScript("textblock with title/textblock with title.js");
        this.title = title;
        this.text = text;
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
        this.constructor.includeScript;
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