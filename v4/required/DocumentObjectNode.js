// this must be the first script in index.html

class DocumentObjectNode {
    constructor() {
        
    }

    loadCSSandScriptTags(componentName) {
        this.loadCSS(componentName);
        this.loadScript(componentName);
    }

    loadCSS(componentName) {
        const links = document.getElementsByTagName("link");
        const arr = Array.from(links);
        let cssAlreadyLoaded = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].href.endsWith(`${componentName}/${componentName}.css`)) {
                cssAlreadyLoaded = true;
            }
        }

        if (cssAlreadyLoaded === false) {
            console.log("loading CSS file");
            this.importCSS(`${componentName}/${componentName}.css`);
        }
    }

    loadScript(componentName) {
        const scripts = document.getElementsByTagName("script");
        const arr = Array.from(scripts);
        let jsAlreadyLoaded = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].src.endsWith(`${componentName}/${componentName}.js`)) {
                jsAlreadyLoaded = true;
            }
        }

        if (jsAlreadyLoaded === false) {
            console.log("loading JS file");
            this.importScript(`${componentName}/${componentName}.js`);
        }
    }

    importCSS(subfolder) {
        const head = document.getElementsByTagName("HEAD")[0];
        const link = document.createElement("LINK");
        link.href = "../components/" + `${subfolder}`;
        link.rel = "stylesheet";
        head.appendChild(link);
    }

    importScript(subfolder) {
        const body = document.getElementsByTagName("BODY")[0];
        const script = document.createElement("SCRIPT");
        script.src = "../components/" + `${subfolder}`;
        body.appendChild(script);
    }

    createNode(id, componentName, template) {
        const div = document.createElement("DIV");
        if (id) div.id = id;
        div.classList.add(`${componentName}-container`);
        div.innerHTML = template;
        return div;
    }

    createTemplate() {
        console.error("Warning: You are not overriding the default template");
    }
}