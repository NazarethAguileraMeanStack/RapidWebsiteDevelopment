// this must be the first script in index.html

class DocumentObjectNode {
    constructor() {
        
    }

    importCSS(subfolder) {
        const head = document.getElementsByTagName("HEAD")[0];
        const link = document.createElement("LINK");
        link.href = "../components/" + `${subfolder}`;
        link.rel = "stylesheet";
        head.appendChild(link);
    }

    importScript(subfolder) {
        const head = document.getElementsByTagName("BODY")[0];
        const script = document.createElement("SCRIPT");
        script.src = "../components/" + `${subfolder}`;
        head.appendChild(script);
    }

    createNode() {
        const p = document.createElement("P");
        p.innerText = "Empty Node";
        return p;
    }
}