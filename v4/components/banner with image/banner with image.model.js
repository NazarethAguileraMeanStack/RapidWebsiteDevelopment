class BannerWithImage extends DocumentObjectNode {
    constructor(title, backgroundImage, id = null) {
        super();
        this.title = title;
        this.backgroundImage = backgroundImage;
        this.loadCSSandScriptTags("banner with image");
        return {node: this.createNode(id)};
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