class Banner extends DocumentObjectNode {
    constructor(title) {
        super();
        this.title = title;
        this.loadCSS("banner/banner.css");
        this.loadScript("banner/banner.js");
        return {node: this.createNode()};
    }

    static includeCSS = true;
    static includeScript = true;

    
    loadCSS(filepath) {
        if (this.constructor.includeCSS) this.importCSS(filepath);
        this.constructor.includeCSS = false;
    }
    
    loadScript(filepath) {
        if (this.constructor.includeScript) this.importScript(filepath); 
        this.constructor.includeScript = false;
    } 
    
    createNode() {
        const div = document.createElement("DIV");
        const h1 = document.createElement("H1");
        h1.innerText = this.title;
        div.appendChild(h1);
        div.classList.add("banner-container");
        return div;
    }
}