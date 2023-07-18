class Form extends DocumentObjectNode {
    constructor(formControls, action = "", method = "", id = null) {
        super();
        this.formControls = formControls || [];
        this.action = action;
        this.method = method;
        this.loadCSS("form/form.css");
        this.loadScript("form/form.js");
        return {node: this.createNode(id)}
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
        const form = document.createElement("FORM");
        const submit = document.createElement("INPUT");
        submit.type = "submit";
        submit.value = "submit";

        form.action = this.action;
        form.method = this.method;

        for (let i = 0; i < this.formControls.length; i++) {
            form.appendChild(this.formControls[i].node);
        }

        form.appendChild(submit);

        form.classList.add("form-container");
        if (id) form.id = id;
        return form;

    }
}