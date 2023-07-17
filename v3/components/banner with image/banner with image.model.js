class BannerWithImage extends DocumentObjectNode {
    constructor(title, backgroundImage, id = null) {
        super();
        this.title = title;
        this.backgroundImage = backgroundImage;
        this.loadCSS("banner with image/banner with image.css");
        this.loadScript("banner with image/banner with image.js");
        return {node: this.createNode(id)};
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
    
    createNode(id) {
        const div = document.createElement("DIV");
        const img = document.createElement("IMG");
        const h1 = document.createElement("H1");
        h1.innerText = this.title;
        div.appendChild(h1);
        div.style.backgroundImage = `url(${this.backgroundImage})`;
        div.classList.add("banner-with-image-container");
        if (id) div.id = id;
        return div;
    }
}