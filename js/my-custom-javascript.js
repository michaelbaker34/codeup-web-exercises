"use strict";

// $(document).ready(() => alert("Dom Loaded"));
// let mainHeadHtml = $("#main-head").html();
// alert(mainHeadHtml);
// let paragraphHtml = $("#paragraph").html();
// alert(paragraphHtml);

// let codeupListItem = $(".codeup").css("border", "1px solid #f00")

// $("li").css("font-size", "20px");

// $("h1, p, li").css("background-color", "#00FFFF")

// let headEl = $("h1").html();
// alert(headEl);

(function(){
    let head = $("#main-head");
    let handler = function(e) {
        $(this).css("background-color", "lightblue");
    }
    head.click(handler);
})()

// (function() {
//     let para = $("#paragraph");
//     let handler = function(e) {
//         $(this).css("fontSize", "18px");
//     }
//     para.click(handler);
// })()