class Slideshow extends DocumentObjectNode {
    constructor(defaultImage, id = null) {
        super();
        this.defaultImage = defaultImage;
        this.loadCSS("slideshow/slideshow.css");
        this.loadScript("slideshow/slideshow.js");
        return {node: this.createNode(id) };
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
        img.id = "slideshow-image";
        img.src = this.defaultImage;
        div.appendChild(img);
        div.classList.add("slideshow-container");
        
        if (id) div.id = id;
        return div;
    }

    
}

/// needs complete rework