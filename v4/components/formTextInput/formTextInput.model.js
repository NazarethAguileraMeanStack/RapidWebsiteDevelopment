class formTextInput extends DocumentObjectNode {
    constructor(name, id = null) {
        super();
        this.name = name;
        this.loadCSSandScriptTags("formTextInput");
        return {node: this.createNode(id)}
    }

    createNode(id) {
        const div = document.createElement("DIV");
        
        const label = document.createElement("LABEL");
        label.for = this.name;
        label.innerText = this.name;
        
        const input = document.createElement("INPUT");
        input.type = "text";
        input.name = this.name;

        div.appendChild(label);
        div.appendChild(input);

        div.classList.add("formInputText-container");
        if (id) div.id = id;
        return div;
    }
}