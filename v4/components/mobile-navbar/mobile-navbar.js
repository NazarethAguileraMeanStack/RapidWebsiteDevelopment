(function() {
    console.log("hello");
    const mobileNavbarIcon = document.getElementById("mobileNavbarIcon");
    
    mobileNavbarIcon.addEventListener("click", function() {
        console.log("transition");
        const mobileNavbarDropdownMenu = document.getElementsByClassName("mobile-navbar-dropdown-menu")[0];
        if (mobileNavbarDropdownMenu.style.top === "-1000px") {
            mobileNavbarDropdownMenu.style.top = "40px";
        } else {
            mobileNavbarDropdownMenu.style.top = "-1000px";
        }
        
    });
})();