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
    const orderedList = new OrderedList(["Dogs", "Cats", "Birds"]);
    const navbar2 = new Navbar(["Top", "Right", "Left", "Bottom"]);
    const textblockAlpha = new TextBlock("I am the left side");
    const textblockBeta = new TextBlock("I am the right side");
    const columns2 = new Columns2(textblockAlpha, textblock2);
    const unorderedList = new UnorderedList(["wolf", "bear", "fox"]);
    const bannerWithImage = new BannerWithImage("About Me!", "../resources/image2.jpg"); 

    const components = [
        banner,
        navbar,
        textblock,
        textblockWithTitle,
        slideshow,
        orderedList,
        banner2,
        navbar2,
        columns2,
        unorderedList,
        bannerWithImage
    ];

    // attach components
    attachComponentsToHTML(root, components);

})();

function attachComponentsToHTML(root, components) {
    for (let component of components) {
        root.appendChild(component.node);
    }
}