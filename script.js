var ham = document.querySelector(".ham");
var f = document.querySelector(".footer");
var top = document.querySelector(".top");
var con = document.querySelector(".right");
var post = document.querySelector(".post");
var menu = document.querySelector(".menu");


ham=addEventListener("click",function(){
    f.classList.toggle("none");
    post.classList.toggle("none");
    con.classList.toggle("none");
    menu.classList.toggle("anim")
});