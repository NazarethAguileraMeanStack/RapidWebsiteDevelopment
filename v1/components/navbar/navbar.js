class Navbar {
    constructor(directory, arr) {
        this.hyperlinks = arr;
        this.component_folder = directory.component;
        this.html_folder = directory.html;
        this.importCSS();
        return {node: this.construct_dom_element() };
    }

    construct_dom_element() {
        const nav = document.createElement("NAV");
        const ul = document.createElement("UL");

        for (let i = 0; i < this.hyperlinks.length; i++) {
            const li = document.createElement("LI");
            const a = document.createElement("A");
            a.innerText =  `${this.hyperlinks[i]}`;
            a.href = `${this.html_folder}` + `${this.hyperlinks[i]}.html`;
            li.appendChild(a);
            ul.appendChild(li);
        }

        nav.appendChild(ul);
        nav.id = "navbar-component";
        return nav;
    }

    importCSS() {
        const head = document.getElementsByTagName("HEAD")[0];
        const link = document.createElement("LINK");
        link.href = `${this.component_folder}` + `/navbar/navbar.css`;
        link.rel = "stylesheet";
        head.appendChild(link);
    }


}

