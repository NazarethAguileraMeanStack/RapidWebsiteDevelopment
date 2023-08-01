class Form extends DocumentObjectNode {
    constructor(formControls, action = "", method = "", id = null) {
        super();
        const componentName = "form";
        this.formControls = formControls || [];
        this.action = action;
        this.method = method;
        this.loadCSSandScriptTags(componentName);
        this.template = this.createTemplate();
        return {node: this.createNode(id, componentName, this.template)}
    }

    createTemplate() {
        let controls = "";

        for (let i = 0; i < this.formControls.length; i++) {
            controls += this.formControls[i].node.outerHTML;
        }

        return `
        <form action=${this.action} method="${this.method}">
            ${controls}
            <input type="submit" value="Submit">
        </form>
        `;

    }
}