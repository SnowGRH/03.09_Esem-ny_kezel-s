window.addEventListener("load", esemeny)

function esemeny(){
    const ART = document.querySelectorAll("article");
    ART[0].innerHTML = "<div><img src='keo.webp'></div>";
    const DIV = document.querySelectorAll("article div");
    ART[0].innerHTML += "<button>Ok</button>";
    const ButtonElem = document.querySelectorAll("article button")

    ButtonElem[0].addEventListener("click", katintas);

}
function katintas(){
    const DIV = document.querySelectorAll("article div");
    DIV[0].classList.add("nev");
    const KepElem = document.querySelectorAll("article div img ")

    KepElem[0].addEventListener("mouseenter", function(event) {
        event.target.style.border="5px solid orange"
    }) ;

    KepElem[0].addEventListener("mouseleave", function(event) {
        event.target.style.border="none"
    }) ;
    
}
