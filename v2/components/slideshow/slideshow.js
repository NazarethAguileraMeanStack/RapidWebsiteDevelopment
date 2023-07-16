class Slideshow extends DocumentObjectNode {
    constructor(images, id = null) {
        super();
        this.images = images;
        this.index = 0;
        this.timer = 5000;
        this.importCSS("slideshow/slideshow.css");
        return {node: this.createNode(id) };
    }

    createNode(id) {
        const div = document.createElement("DIV");
        const img = document.createElement("IMG");
        img.id = "slideshow-image";
        img.src = this.images[1];
        div.appendChild(img);
        div.classList.add("slideshow-container");
        
        if (id) {
            div.id = id;
        }
        setInterval(changeImage, this.timer);

        return div;






        function changeImage() {
            let image = document.getElementById("slideshow-image");
            //image.src = this.images[this.index];
            if (this.index < this.images.length - 1) {
                this.index++;
            } else {
                this.index = 0;
            }
        }
    }
}

/// needs complete rework