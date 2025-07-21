// Variables

let nav = document.getElementById("nav");
let menu = document.getElementById("enlaces");
let abrir = document.getElementById("open");
let botones = document.getElementsByClassName("btn-header");
let cerrado = true;

// Funciones

function menus(){
    let desplazamientoActual = window.pageYOffset;

    if (desplazamientoActual <= 300){

        nav.classList.remove("nav2");
        nav.className = ("nav1");
        nav.style.transition = "1s";
        menu.style.top = "80px";
        abrir.style.color = "white";

    } else {

        nav.classList.remove("nav1");
        nav.className = ("nav2");
        nav.style.transition = "1s";
        menu.style.top = "100px";
        abrir.style.color = "black";

    }
}

function apertura(){
    if (cerrado){

        menu.style.width = "70vw";
        cerrado = false;

    }else {

        menu.style.width = "0%";
        menu.style.overflow = "hiden";
        cerrado = true;

    }
}

window.addEventListener("load", function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});

window.addEventListener("click", function(e){
    console.log(e.target);
    if (cerrado == false){
        let span = this.document.querySelector("span");
        if(e.target !== span && e.target !==abrir){
            menu.style.width = "0%";
            menu.style.overflow = "hidden";
            cerrado = true;
        };
    }
});

window.addEventListener("scroll", function() {
    console.log(this.window.pageYOffset);
    menus();
});

window.addEventListener("resize", function() {
    if (this.screen.width >= 768) {
        cerrado = true;
        menu.style.removeProperty("width");
        menu.style.removeProperty("overflow");
    }
});

abrir.addEventListener("click", function(){
    apertura();
});

