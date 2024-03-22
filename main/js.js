document.getElementById("r-1").onmousemove = fun;
document.getElementById("r-1").onmouseleave = lev;
document.getElementById("r-2").onmousemove = fun1;
document.getElementById("r-2").onmouseleave = lev1;
document.getElementById("r-3").onmousemove = fun2;
document.getElementById("r-3").onmouseleave = lev2;
document.getElementById("r-4").onmousemove = fun3;
document.getElementById("r-4").onmouseleave = lev3;
document.getElementById("r-5").onmousemove = fun4;
document.getElementById("r-5").onmouseleave = lev4;
document.getElementById("r-6").onmousemove = fun5;
document.getElementById("r-6").onmouseleave = lev5;
document.getElementById("r-7").onmousemove = fun6;
document.getElementById("r-7").onmouseleave = lev6;
document.getElementById("r-8").onmousemove = fun7;
document.getElementById("r-8").onmouseleave = lev7;
document.getElementById("r-9").onmousemove = fun8;
document.getElementById("r-9").onmouseleave = lev8;

function fun(){document.querySelector(".r-11").classList.add('r-10')}

function lev(){document.querySelector(".r-11").classList.remove('r-10')}

function fun1(){document.querySelector(".r-12").classList.add('r-10')}

function lev1(){document.querySelector(".r-12").classList.remove('r-10')}

function fun2(){document.querySelector(".r-13").classList.add('r-10')}

function lev2(){document.querySelector(".r-13").classList.remove('r-10')}

function fun3(){document.querySelector(".r-14").classList.add('r-10')}

function lev3(){document.querySelector(".r-14").classList.remove('r-10')}

function fun4(){document.querySelector(".r-15").classList.add('r-10')}

function lev4(){document.querySelector(".r-15").classList.remove('r-10')}

function fun5(){document.querySelector(".r-16").classList.add('r-10')}

function lev5(){document.querySelector(".r-16").classList.remove('r-10')}

function fun6(){document.querySelector(".r-17").classList.add('r-10')}

function lev6(){document.querySelector(".r-17").classList.remove('r-10')}

function fun7(){document.querySelector(".r-18").classList.add('r-10')}

function lev7(){document.querySelector(".r-18").classList.remove('r-10')}

function fun8(){document.querySelector(".r-19").classList.add('r-10')}

function lev8(){document.querySelector(".r-19").classList.remove('r-10')}


document.getElementById("lines").onclick = menu;
document.getElementById("close").onclick = clos;

function menu(){
    document.getElementById("menu").style.left = 42 + "%";
    document.getElementById("close").style.width = 42 + "vw";
    document.getElementById("close").style.height = 100 + "%";

    document.querySelector(".logoMCA").style.left = 56 + "%";
    document.querySelector(".unicont").style.left = 56 + "%";
    document.querySelector(".Russia").style.left = 59 + "%";
    document.querySelector(".venture").style.left = 49 + "%";
    document.querySelector(".NPK").style.left = 48.7 + "%";
}

function clos(){
    document.getElementById("menu").style.left = 100 + "%";

    document.querySelector(".logoMCA").style.left = 100 + "%";
    document.querySelector(".unicont").style.left = 100 + "%";
    document.querySelector(".Russia").style.left = 100 + "%";
    document.querySelector(".venture").style.left = 100 + "%";
    document.querySelector(".NPK").style.left = 100  + "%";
}


document.getElementById("zagAdres1").onmousemove = windowOp;
document.getElementById("zagAdres1").onmouseleave = windowCl;


function windowOp(){
    document.querySelector(".adresDiv").style.opacity = 1;
}

function windowCl(){
    document.querySelector(".adresDiv").style.opacity = 0;
}

document.getElementById("cont1").onmousemove = windowOp1;
document.getElementById("cont1").onmouseleave = windowCl1;


function windowOp1(){
    document.querySelector(".contDiv").style.opacity = 1;
    document.querySelector(".contDiv").style.left = 14.5 + '%';
}

function windowCl1(){
    document.querySelector(".contDiv").style.opacity = 0;
    document.querySelector(".contDiv").style.left = 24 + '%';
}

document.getElementById("manager1").onmousemove = windowOp2;
document.getElementById("manager1").onmouseleave = windowCl2;


function windowOp2(){
    document.querySelector(".managerDiv").style.opacity = 1;
}

function windowCl2(){
    document.querySelector(".managerDiv").style.opacity = 0;
}