/*global handleContent:true*/
handleContent = function (response) {
    "use strict";
    var name = response.data.name,
        template = "src/templates/" + name.substring(0, name.length - 4) + "hbs",
        /*global escape*/
        context = JSON.parse(decodeURIComponent(escape(window.atob(response.data.content))));
        /*global -escape*/
    
    document.querySelector("main").innerHTML = JST[template](context);
};

document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var head = document.querySelector("head"),
        header = document.querySelector("header");
    
    header.addEventListener("click", function (e) {
        var button = e.target, // menu buttons
            script;
        if (button.nodeName !== "LI") {
            return;
        }
        
        script = document.createElement("script");
        script.setAttribute("src", "https://api.github.com/repos/HTL3R-Scrum/Scrum-Texte/contents/" +
                         button.dataset.page + ".json?callback=handleContent");
        head.appendChild(script);
    });
    
    header.getElementsByTagName("li")[0].dispatchEvent(new Event("click"));
});