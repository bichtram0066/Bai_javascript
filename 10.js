window.onscroll=function(){
    var menu = document.getElementById("menu");
    var kc = document.documentElement.scrollTop;
    if(kc>100){
        menu.style.top = "0";
    }
    else{
        menu.style.top = "-70px";
    }
};

function hientimkiem(){
    var hien = document.getElementById("hientk");
    if(hien.classList.contains("hieuung"))
    {
        hien.classList.remove("hieuung");
    }
    else
    {
        hien.classList.add("hieuung");
    }
};