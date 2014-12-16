document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var main = document.querySelector("main"),
        content = JST["src/templates/overview.hbs"]({
            paragraphs: [
                {
                    "title": "Titel",
                    "text": "Lorem ipsum"
                },
                {
                    "title": "Titel 2",
                    "text": "Lorem lorem"
                }
            ]
        });
    
    
    main.innerHTML = content;
});