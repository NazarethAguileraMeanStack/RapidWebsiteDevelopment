// this must be the last script in index.html

(function() {

    // root element
    const root = document.getElementById("root");



    // initialize components
    const banner = new Banner("Hello");
    const banner2 = new Banner("Banner 2");
    const banner3 = new Banner("Banner 3");
    const columns2 = new Columns2(banner2, banner3);

    const a = new Banner("A");
    const b = new Banner("B");
    const c = new Banner("C");
    const d = new Banner("D");

    const emptyContainer = new EmptyContainer([a, b, c, d]);

    const navbar = new Navbar(["help", "A", "brother", "out"]);

    // add components you want to render to components array
    const components = [
        navbar,
        banner,
        columns2,
        emptyContainer
    ];


    // this function renders components into the root element
    render(root, components);

})();

function render(root, components) {
    for (let component of components) {
        root.appendChild(component.node);
    }
}