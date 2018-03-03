"use strict";

window.onload = main;

function main() {
    var timer;
    var projectVideos = document.getElementsByClassName("iplay");
    var numberOfViews = projectVideos.length;
    var windowHeight = window.innerHeight;
    var vanishPosition;
    var midwayPoint;
    var boundingRectangle;
    var videoPausedStatus;
    var counter;
    var toggleButton = document.getElementById("toggleButton");
    var largeToggleButton = document.getElementById("largeToggleButton");
    var myPhotoObj = document.getElementById("myphoto");
    var themeStyle = document.getElementById("theme-style");
    var favicon = document.getElementById("favicon");
    var toggleId;

    document.getElementById("navSelect").addEventListener("click", toggleNavMenu);

    if (toggleButton != null) {

        toggleButton.addEventListener("click", function() {
            if (toggleId) {
                window.clearTimeout(toggleId);
            }

            toggleId = window.setTimeout(function() {

                switchTheme(toggleButton, largeToggleButton, myPhotoObj,
                    themeStyle, favicon);

            }, 500); // Set click event listening delay
        });
    }

    if (largeToggleButton != null) {

        // Toggle button for smaller screens
        largeToggleButton.addEventListener("click", function() {
            if (toggleId) {
                window.clearTimeout(toggleId);
            }

            toggleId = window.setTimeout(function() {

                switchTheme(toggleButton, largeToggleButton, myPhotoObj,
                    themeStyle, favicon);

            }, 500); // Set click event listening delay
        });

    }

    if (document.location.href.indexOf("https://mussieh.github.io/projects") != -1) {

        window.addEventListener("scroll", function() {
            if (timer) {
                window.clearTimeout(timer);
            }

            timer = window.setTimeout(function() {
                for (counter = 0; counter < numberOfViews; ++counter) {
                    boundingRectangle = projectVideos[counter].getBoundingClientRect();
                    midwayPoint = boundingRectangle.height / 2;
                    vanishPosition = boundingRectangle.y + midwayPoint + 50 // 50 for navbar height;
                    videoPausedStatus = projectVideos[counter].paused;

                    // image is in view
                    if (vanishPosition > 0 && vanishPosition < windowHeight + 50) {
                        if (videoPausedStatus == false) {} // if playing, do nothing
                        else {
                            projectVideos[counter].play();
                        }
                    }

                    // image hidden
                    else {
                        if (videoPausedStatus == false) {  // if playing, pause
							projectVideos[counter].pause();
                        }
                    }
                }
            }, 200); // Set scrolling event listening delay to save CPU resources
        });

        window.onresize = function() {
            windowHeight = window.innerHeight;
        };
    }
}


function switchTheme(toggleButton, largeToggleButton, myPhotoObj, themeStyle) {

    // enabling dark theme
    if (toggleButton.className.indexOf("fa-toggle-off") != -1) {
        if (myPhotoObj != null) {
            myPhotoObj.src = "img/bp.png";
        }
        localStorage.setItem("theme", "dark");
        favicon.href = "img/favbr.png";
        themeStyle.href = "css/dark.css";

        toggleButton.className = "fa fa-toggle-on w3-hover-opacity w3-padding-small";
        largeToggleButton.className = "fa fa-toggle-on w3-xlarge w3-hover-opacity w3-padding-small";

    }

    // going back to blue theme
    else {

        if (myPhotoObj != null) {
            myPhotoObj.src = "img/lp.png";
        }
        localStorage.clear();
        favicon.href = "img/favbl.png";
        themeStyle.href = "css/light.css";

        toggleButton.className = "fa fa-toggle-off w3-hover-opacity w3-padding-small";
        largeToggleButton.className = "fa fa-toggle-off w3-xlarge w3-hover-opacity w3-padding-small";;
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleNavMenu() {
    var navDemo = document.getElementById("navDemo");
    if (navDemo.className.indexOf("w3-show") == -1) {
        navDemo.className += " w3-show";
    } else {
        navDemo.className = navDemo.className.replace(" w3-show", "");
    }
}
