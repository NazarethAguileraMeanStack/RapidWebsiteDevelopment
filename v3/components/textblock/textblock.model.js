class TextBlock extends DocumentObjectNode {
    constructor(text, id = null) {
        super();
        this.loadCSS("textblock/textblock.css");
        this.loadScript("textblock/textblock.js");
        this.text = text;
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