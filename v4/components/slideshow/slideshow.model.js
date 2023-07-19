class Slideshow extends DocumentObjectNode {
    constructor(defaultImage, id = null) {
        super();
        this.defaultImage = defaultImage;
        this.loadCSSandScriptTags("slideshow");
        return {node: this.createNode(id) };
    }

    createNode(id) {
        const div = document.createElement("DIV");
        const img = document.createElement("IMG");
        img.id = "slideshow-image";
        img.src = this.defaultImage;
        div.appendChild(img);
        div.classList.add("slideshow-container");
        
        if (id) div.id = id;
        return div;
    }

    
}
