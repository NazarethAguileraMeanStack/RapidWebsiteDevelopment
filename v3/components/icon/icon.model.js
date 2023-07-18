class Icon extends DocumentObjectNode {
    constructor(img, text = null, id = null) {
        super();
        this.img = img;
        this.text = text;
        this.loadCSS("icon/icon.css");
        this.loadScript("icon/icon.js");
        return {node: this.createNode(id)};
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