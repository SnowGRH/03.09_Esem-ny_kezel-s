window.addEventListener("load", kezdes)

function kezdes(){ 
    const ART = document.querySelectorAll("article");
    ART[0].innerHTML = "<ul></ul>";
    const UL = document.querySelectorAll("article ul");
    UL[0].innerHTML += "<li></li>";
    const KepLista = ["kep.jpg","kep2.jpg","kep3.jpg","kep4.jpg","kep5.jpg","kep6.jpg","kep7.jpg"];
    for (let index = 0; index < KepLista.length; index++) {
        const IMG = document.createElement("img");
        IMG.src = KepLista[index];
        ART[0].appendChild(IMG);
        
        
    }



}