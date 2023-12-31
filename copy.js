
// Dark and Light Themes

let mode = "light";
var dlMode = document.querySelector("#darkLightMode");

// Dark and Light Theme changes with Time

let date = new Date();
let hours = date.getHours();

mode = (hours >= 5 && hours <= 17) ? "light" : "dark";

// Dark and Light Theme toggle button

if(mode == "dark") {
    document.body.classList.toggle("themeSwapper");
    dlMode.className = "fa-solid fa-moon";
}

dlMode.addEventListener(
    "click",
    function(entries) {
        if(mode == "light") {
            document.body.classList.toggle("themeSwapper");
            dlMode.className = "fa-solid fa-moon";
            mode = "dark";
        } else {
            document.body.classList.toggle("themeSwapper");
            dlMode.className = "fa-solid fa-sun";
            mode = "light";
        }
    }
);