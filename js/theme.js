"use strict";

var themeStatus = localStorage.getItem("theme");
var toggleButton = document.getElementById("toggleButton");
var largeToggleButton = document.getElementById("largeToggleButton");
var myphoto = document.getElementById("myphoto");
var favicon = document.getElementById("favicon");

if (themeStatus != null) {
    document.getElementById("theme-style").href = "css/dark.css";
    favicon.href = "img/favbr.png";

    if (toggleButton != null) {
        toggleButton.className = "fa fa-toggle-on w3-hover-opacity w3-padding-small";
    }

    if (largeToggleButton != null) {
        largeToggleButton.className = "fa fa-toggle-on w3-xlarge w3-hover-opacity w3-padding-small";
    }

    if (myphoto != null) {
        myphoto.src = "img/bp.png";
    }
}
else {
    favicon.href = "img/favbl.png";
}
