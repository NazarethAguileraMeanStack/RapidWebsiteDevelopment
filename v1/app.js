(function() {
    // root node
    const root = document.getElementById("root");
    const directory = {
        html: "./html",
        component: "./components"
    };

    // components
    let navbar = new Navbar(directory, ["About Me", "Projects", "Home"]);




    // attach components
    root.appendChild(navbar.node);
})();

