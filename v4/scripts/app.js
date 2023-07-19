// this must be the last script in index.html

(function() {

    // root element
    const root = document.getElementById("root");



    // initialize components
    const banner = new Banner("Hello");
    const bannerWithImage = new BannerWithImage("Test", "../resources/image2.jpg");


    // add components you want to render to components array
    const components = [
        banner,
        bannerWithImage
    ];


    // this function renders components into the root element
    attachComponentsToHTML(root, components);

})();

function attachComponentsToHTML(root, components) {
    for (let component of components) {
        root.appendChild(component.node);
    }
}