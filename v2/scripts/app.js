// this must be the last script in index.html

(function() {

    // root node
    const root = document.getElementById("root");



    // include components
    const navbar = new Navbar(["Home", "About Me", "Contact"]);
    const textblock = new TextBlock("I am the Night", "batman");
    const textblock2 = new TextBlock("Truth, Justice, and the American Way", "superman");

    // attach components
    root.appendChild(navbar.node);
    root.appendChild(textblock.node);
    root.appendChild(textblock2.node);

})();