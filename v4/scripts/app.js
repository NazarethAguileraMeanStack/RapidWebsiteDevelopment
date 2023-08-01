// this must be the last script in index.html

(function() {

    // root element
    const root = document.getElementById("root");



    // initialize components
    const mobileNavbar = new MobileNavbar("../resources/skeletor.svg", ["About Me", "Contact", "Portfolio"]);

    // add components you want to render to components array
    const components = [
        mobileNavbar
    ];


    // this function renders components into the root element
    render(root, components);

})();

function render(root, components) {
    for (let component of components) {
        root.appendChild(component.node);
    }
}