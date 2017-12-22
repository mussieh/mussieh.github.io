"use strict";

    // Used to toggle the menu on small screens when clicking on the menu button
    function myFunction() {
        var navDemo = document.getElementById("navDemo");
        if (navDemo.className.indexOf("w3-show") == -1) {
            navDemo.className += " w3-show";
        } else {
            navDemo.className = navDemo.className.replace(" w3-show", "");
        }
    }

window.onload = myFunction;
