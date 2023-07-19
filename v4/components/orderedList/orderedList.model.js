class OrderedList extends DocumentObjectNode {
    constructor(items, id = null) {
        super();
        this.items = items;
        this.loadCSSandScriptTags("orderedList");
        return {node: this.createNode(id)}
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