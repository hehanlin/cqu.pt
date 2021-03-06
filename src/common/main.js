/* 插入于内网页面中
 * cqu.pt
 * */
require('./main.css');

var _hostname = '//cqu.pt';

/* 插入js */
/* CNZZ统计 */
(function() {
    var cnzz = document.createElement("script");
    cnzz.src = "//cdn.congm.in/tongji/cqu.pt.js";
    cnzz.charset = "utf-8";
    if(self == top){
        document.body.appendChild(cnzz);
    }
})();

/* 链接及图片地址转换 */
(function(){
    var all_a = document.getElementsByTagName("a");
    for(var i = 0; i < all_a.length; i++){
        var url_array = all_a[i].href.split("/");
        if(url_array.length > 2 && all_a[i].href.indexOf("//") != -1 && url_array[2].indexOf("cqu.pt") == -1 && url_array[2].indexOf("host.congm.in") == -1){
            if(url_array[2].indexOf(":") == -1){
                url_array[2] += ".cqu.pt";
            }else{
                var host_array = url_array[2].split(":");
                url_array[2] = host_array[0] + ".cqu.pt";
            }
            all_a[i].href = url_array.join('/');
        }
    }
})();
(function(){
    var img_a = document.getElementsByTagName("img");
    for(var i = 0; i < img_a.length; i++){
        var url_array = img_a[i].src.split("/");
        if(url_array.length > 2 && img_a[i].src.indexOf("//") != -1 && url_array[2].indexOf("cqu.pt") == -1 && url_array[2].indexOf("host.congm.in") == -1){
            if(url_array[2].indexOf(":") == -1){
                url_array[2] += ".cqu.pt";
            }else{
                var host_array = url_array[2].split(":");
                url_array[2] = host_array[0] + ".cqu.pt";
            }
            img_a[i].src = url_array.join('/');
        }
    }
})();

(function() {
    /* 插入css */
    var css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = _hostname + "/common/main.css";
    if(self == top){
        document.head.appendChild(css);
    }
    /* 插入dom */
    css.onload = function(){
        var templates = require('../templates/templates.html');
        if(self == top){
            document.body.insertAdjacentHTML("beforeend", templates);
            document.body.classList.add('_cqupt-body');
            require('../templates/templates');
        }
    };
})();
