class OrderedList extends DocumentObjectNode {
    constructor(items, id = null) {
        super();
        this.items = items;
        this.loadCSS("orderedList/orderedList.css");
        this.loadScript("orderedList/orderedList.js");
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
        const ol = document.createElement("OL");

        for (let i = 0; i < this.items.length; i++) {
            const li = document.createElement("LI");
            li.innerHTML = `<p>${this.items[i]}</p>`;
            ol.appendChild(li);
        }

        div.appendChild(ol);

        div.classList.add("orderedList-container");
        if (id) div.id = id;
        return div;
    }
}