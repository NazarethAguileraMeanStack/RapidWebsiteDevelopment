class formTextInput extends DocumentObjectNode {
    constructor(name, id = null) {
        super();
        this.name = name;
        this.loadCSS("formTextInput/formTextInput.css");
        this.loadScript("formTextInput/formTextInput.js");
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