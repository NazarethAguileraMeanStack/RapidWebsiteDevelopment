class Banner extends DocumentObjectNode {
    constructor(title) {
        super();
        this.title = title;
        this.importCSS("banner/banner.css");
        return {node: this.createNode()};
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