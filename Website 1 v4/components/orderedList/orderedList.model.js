class OrderedList extends DocumentObjectNode {
    constructor(items, id = null) {
        super();
        const componentName = "orderedList";
        this.items = items;
        this.loadCSSandScriptTags(componentName);
        this.template = this.createTemplate();
        return {node: this.createNode(id, componentName, this.template)}
    }

    createTemplate() {
        let list = "";

        for (let i = 0; i < this.items.length; i++) {
            list += `<li><p>${this.items[i]}</p></li>`;
        }

        return `
        <ol>
        ${list}
        </ol>
        `;
    }
}