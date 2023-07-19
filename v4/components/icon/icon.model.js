class Icon extends DocumentObjectNode {
    constructor(img, text = null, id = null) {
        super();
        this.img = img;
        this.text = text;
        this.loadCSSandScriptTags("icon");
        return {node: this.createNode(id)};
    }

    createNode(id) {
        const div = document.createElement("DIV");
        const img = document.createElement("IMG");
        
        img.src = this.img;
        div.appendChild(img);
        
        if (this.text) {
            const p = document.createElement("P");
            p.innerText = this.text;
            div.appendChild(p);
        }
        
        
        if (id) div.id = id;
        div.classList.add("icon-container");
        return div;
    }

}