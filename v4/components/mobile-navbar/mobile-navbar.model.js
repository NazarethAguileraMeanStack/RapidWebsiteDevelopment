class MobileNavbar extends DocumentObjectNode {
    constructor(logo, links, id = null) {
        super();
        const componentName = "mobile-navbar";
        this.logo = logo;
        this.links = links;
        this.loadCSSandScriptTags(componentName);
        this.template = this.createTemplate();
        return {node: this.createNode(id, componentName, this.template)};
    }

    createTemplate() {
        let list = "";

        for (let i = 0; i < this.links.length; i++) {
            list += `<li><a href="./${this.links[i]}.html">${this.links[i]}</a></li>`;
        }

        return `
        <div class="mobile-navbar-display">
            <i id="mobileNavbarIcon" class="fa-solid fa-bars"></i>
            <img src=${this.logo}>
        </div>
        <div class="mobile-navbar-dropdown-menu" style="top: -1000px">
            <ul>
            ${list}
            </ul>
        </div>
        `;
    }
}