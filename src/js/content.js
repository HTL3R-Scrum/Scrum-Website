document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var main = document.querySelector("main"),
        header = document.querySelector("header");
    
    header.addEventListener("click", function (e) {
        var button = e.target, // menu buttons
            template,
            context;
        if (button.nodeName !== "LI") {
            return;
        }
        
        template = "src/templates/" + button.dataset.page + ".hbs";
        context = {
            groups: [
                {
                    "title": "Sprint",
                    "files": [
                        {
                            "title": "Sprint",
                            "files": {
                                "pdf": "",
                                "word": "",
                                "od": ""
                            }
                        },
                        {
                            "title": "Sprint Backlog",
                            "files": {
                                "pdf": "",
                                "word": "",
                                "od": ""
                            }
                        },
                        {
                            "title": "Product Backlog",
                            "files": {
                                "pdf": "",
                                "word":  "",
                                "od": ""
                            }
                        }
                    ]
                }
            ]
        };
        
        main.innerHTML = JST[template](context);
    });
});