// this must be the last script in index.html

(function() {

    // root node
    const root = document.getElementById("root");



    // include components
    const navbar = new Navbar(["Home", "About Me", "Contact"]);
    const textblock = new TextBlock("I am the Night", "batman");
    const textblock2 = new TextBlock("Truth, Justice, and the American Way", "superman");
    const banner = new Banner("Welcome To My Website!");
    const textblockWithTitle = new TextBlockWithTitle("Hello World", "This is my confession");
    const slideshow = new Slideshow("../resources/image1.jpg", "presentation");
    const banner2 = new Banner("Footer!");
    const navbar2 = new Navbar(["Top", "Right", "Left", "Bottom"]);

    const components = [
        banner,
        navbar,
        textblock,
        textblock2,
        textblockWithTitle,
        slideshow,
        banner2,
        navbar2
    ];

    // attach components
    attachComponentsToHTML(root, components);

})();

function attachComponentsToHTML(root, components) {
    for (let component of components) {
        root.appendChild(component.node);
    }
}