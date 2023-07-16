class Navbar extends DocumentObjectNode {
    constructor(pages, id = null) {
        super();
        this.pages = pages;

        this.loadCSS("navbar/navbar.css");
        this.loadScript("navbar/navbar.js");
        return {node: this.createNode(id)}
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
        const nav = document.createElement("NAV");
        const ul = document.createElement("UL");

        for (let i = 0; i < this.pages.length; i++) {
            const li = document.createElement("LI");
            const a = document.createElement("A");
            a.innerText =  `${this.pages[i]}`;
            a.href = "./" + `${this.pages[i]}.html`;
            li.appendChild(a);
            ul.appendChild(li);
        }

        nav.appendChild(ul);
        nav.classList.add("navbar-container");

        if (id) {
            nav.id = id;
        }

        return nav;
    }


}