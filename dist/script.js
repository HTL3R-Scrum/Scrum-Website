this.JST=this.JST||{},this.JST["src/templates/manual.hbs"]=Handlebars.template({1:function(a,b,c,d){var e,f,g="function",h=b.helperMissing,i=this.escapeExpression,j='<div>\r\n<section class="container">\r\n<h1>'+i((f=null!=(f=b.title||(null!=a?a.title:a))?f:h,typeof f===g?f.call(a,{name:"title",hash:{},data:d}):f))+"</h1>\r\n";return f=null!=(f=b.text||(null!=a?a.text:a))?f:h,e=typeof f===g?f.call(a,{name:"text",hash:{},data:d}):f,null!=e&&(j+=e),j+"\r\n</section>\r\n</div>\r\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f="";return e=b.each.call(a,null!=a?a.paragraphs:a,{name:"each",hash:{},fn:this.program(1,d),inverse:this.noop,data:d}),null!=e&&(f+=e),f},useData:!0}),this.JST["src/templates/overview.hbs"]=Handlebars.template({1:function(a,b,c,d){var e,f,g="function",h=b.helperMissing,i=this.escapeExpression,j='<div>\r\n<section class="container">\r\n<h1>'+i((f=null!=(f=b.title||(null!=a?a.title:a))?f:h,typeof f===g?f.call(a,{name:"title",hash:{},data:d}):f))+"</h1>\r\n";return f=null!=(f=b.text||(null!=a?a.text:a))?f:h,e=typeof f===g?f.call(a,{name:"text",hash:{},data:d}):f,null!=e&&(j+=e),j+"\r\n</section>\r\n</div>\r\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f="";return e=b.each.call(a,null!=a?a.paragraphs:a,{name:"each",hash:{},fn:this.program(1,d),inverse:this.noop,data:d}),null!=e&&(f+=e),f},useData:!0}),this.JST["src/templates/templates.hbs"]=Handlebars.template({1:function(a,b,c,d){var e,f,g="function",h=b.helperMissing,i=this.escapeExpression,j='<h1 class="sixteen columns">'+i((f=null!=(f=b.title||(null!=a?a.title:a))?f:h,typeof f===g?f.call(a,{name:"title",hash:{},data:d}):f))+'</h1>\r\n<div class="offset-by-two">\r\n';return e=b.each.call(a,null!=a?a.files:a,{name:"each",hash:{},fn:this.program(2,d),inverse:this.noop,data:d}),null!=e&&(j+=e),j+"</div>\r\n"},2:function(a,b,c,d){var e,f,g="function",h=b.helperMissing,i=this.escapeExpression,j=this.lambda;return'<div class="four columns">\r\n<h2>'+i((f=null!=(f=b.title||(null!=a?a.title:a))?f:h,typeof f===g?f.call(a,{name:"title",hash:{},data:d}):f))+'</h2>\r\n<a class="icon-file-pdf" href="'+i(j(null!=(e=null!=a?a.file:a)?e.pdf:e,a))+'"></a>\r\n<a class="icon-file-word" href="'+i(j(null!=(e=null!=a?a.file:a)?e.word:e,a))+'"></a>\r\n<a class="icon-file-openoffice" href="'+i(j(null!=(e=null!=a?a.file:a)?e.od:e,a))+'"></a>\r\n</div>\r\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f='<div>\r\n<section class="container templates">\r\n';return e=b.each.call(a,null!=a?a.groups:a,{name:"each",hash:{},fn:this.program(1,d),inverse:this.noop,data:d}),null!=e&&(f+=e),f+"</section>\r\n</div>\n"},useData:!0}),handleContent=function(a){"use strict";var b=a.data.name,c="src/templates/"+b.substring(0,b.length-4)+"hbs",d=JSON.parse(decodeURIComponent(escape(window.atob(a.data.content))));document.querySelector("main").innerHTML=JST[c](d)},document.addEventListener("DOMContentLoaded",function(){"use strict";var a=document.querySelector("head"),b=document.querySelector("header");b.addEventListener("click",function(b){var c,d=b.target;if("LI"!==d.nodeName){if("LI"!==d.parentElement.nodeName)return;d=d.parentElement}c=document.createElement("script"),c.setAttribute("src","https://api.github.com/repos/HTL3R-Scrum/Scrum-Texte/contents/"+d.dataset.page+".json?callback=handleContent"),a.appendChild(c)},!0),b.getElementsByTagName("li")[0].click()}),document.addEventListener("DOMContentLoaded",function(){"use strict";var a,b=document.createElement("nav"),c=document.createElement("ul");b.appendChild(c),document.querySelector("body").appendChild(b),b.addEventListener("click",function(){b.classList.toggle("show")},!1),document.querySelector("main").addEventListener("click",function(){b.classList.remove("show")},!0),a=new MutationObserver(function(){c.innerHTML="",Array.prototype.forEach.call(document.querySelectorAll("main h1"),function(a){var b=document.createElement("a"),d=document.createElement("li"),e=document.createElement("a");b.setAttribute("name",a.textContent),e.textContent=a.textContent,e.setAttribute("href","#"+a.textContent),d.appendChild(e),a.parentElement.insertBefore(b,a),c.appendChild(d)})}),a.observe(document.querySelector("main"),{attributes:!1,childList:!0,characterData:!1})});