class UnorderedList extends DocumentObjectNode {
    constructor(items, id = null) {
        super();
        this.items = items;
        this.loadCSS("unorderedList/unorderedList.css");
        this.loadScript("unorderedList/unorderedList.js");
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
        const ul = document.createElement("UL");

        for (let i = 0; i < this.items.length; i++) {
            const li = document.createElement("LI");
            li.innerHTML = `<p>${this.items[i]}</p>`;
            ul.appendChild(li);
        }

        div.appendChild(ul);

        div.classList.add("unorderedList-container");
        if (id) div.id = id;
        return div;
    }
}