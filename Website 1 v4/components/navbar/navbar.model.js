class Navbar extends DocumentObjectNode {
    constructor(pages, id = null) {
        super();
        const componentName = "navbar";
        this.pages = pages;
        this.loadCSSandScriptTags(componentName);
        this.template = this.createTemplate();
        return {node: this.createNode(id, componentName, this.template)}
    }

    createTemplate() {
        let list = "";
        for (let i = 0; i < this.pages.length; i++) {
            list += `<li><a href="./${this.pages[i]}.html">${this.pages[i]}</a></li>`;
        }

        return `
        <nav>
            <ul>
            ${list}
            </ul>
        </nav>`;
    }


}