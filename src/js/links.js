document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var nav = document.createElement("nav"),
        ul = document.createElement("ul"),
        observer;
    
    nav.innerHTML = "<h1>Gehe zu</h1>";
    nav.appendChild(ul);
    document.querySelector("body").appendChild(nav);
    
    nav.addEventListener("click", function () {
        nav.classList.toggle("show");
    }, false);
    
    document.querySelector("main").addEventListener("click", function () {
        nav.classList.remove("show");
    }, true);
    
    observer = new MutationObserver(function () {
        ul.innerHTML = "";
        
        Array.prototype.forEach.call(document.querySelectorAll("main h1"), function (h1) {
            var anchor = document.createElement("a"),
                li = document.createElement("li"),
                link = document.createElement("a");
                //name = encodeURIComponent(h1.textContent);
            
            anchor.setAttribute("name", h1.textContent);
            link.textContent = h1.textContent;
            link.setAttribute("href", "#" + h1.textContent);
            
            li.appendChild(link);
            h1.parentElement.insertBefore(anchor, h1);
            ul.appendChild(li);
        });
    });
    observer.observe(document.querySelector("main"), {
        attributes: false,
        childList: true,
        characterData: false
    });
});