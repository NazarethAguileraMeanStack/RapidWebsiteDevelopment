class UnorderedList extends DocumentObjectNode {
    constructor(items, id = null) {
        super();
        const componentName = "unorderedList";
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
        <ul>
        ${list}
        </ul>
        `;
    }
}