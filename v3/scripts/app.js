// this must be the last script in index.html

(function() {

    // root element
    const root = document.getElementById("root");



    // initialize components
    const form = new Form();


    // add components you want to render to components array
    const components = [
        form
    ];


    // this function renders components into the root element
    attachComponentsToHTML(root, components);

})();

function attachComponentsToHTML(root, components) {
    for (let component of components) {
        root.appendChild(component.node);
    }
}