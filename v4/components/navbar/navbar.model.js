class Navbar extends DocumentObjectNode {
    constructor(pages, id = null) {
        super();
        this.pages = pages;
        this.loadCSSandScriptTags("navbar");
        return {node: this.createNode(id)}
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