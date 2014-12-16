document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var main = document.querySelector("main"),
        content = JST["src/templates/templates.hbs"]({
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
        });
    
    
    main.innerHTML = content;
});