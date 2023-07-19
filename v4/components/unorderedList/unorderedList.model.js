class UnorderedList extends DocumentObjectNode {
    constructor(items, id = null) {
        super();
        this.items = items;
        this.loadCSSandScriptTags("unorderedList");
        return {node: this.createNode(id)}
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