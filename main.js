window.addEventListener("load", kezdes);

let szamlalas = 0;

function kezdes() {
  const ART = document.querySelectorAll("article");
  const KEPLISTA = [
    "kep.jpg",
    "kep2.jpg",
    "kep3.jpg",
    "kep4.jpg",
    "kep5.jpg",
    "kep6.jpg",
    "kep7.jpg",
  ];
  for (let index = 0; index < KEPLISTA.length; index++) {
    const IMG = document.createElement("img");
    IMG.src = KEPLISTA[index];
    ART[0].appendChild(IMG);
  }

  const KEPMOZGATAS = document.querySelectorAll("article img");
  //KEPMOZGATAS.addEventListener
  for (let i = 0; i < KEPLISTA.length; i++) {
    console.log(KEPMOZGATAS[i]);
    KEPMOZGATAS[i].addEventListener("click", function () {
      IMGKepKezeles(KEPLISTA, i);
    });
  }

  Gombok(KEPLISTA);
}
function IMGKepKezeles(KEPLISTA, i) {
  let img = document.getElementsByClassName("kep")[0];
  img.src = KEPLISTA[i];
}
function Gombok(KEPLISTA) {
  const BALGOMBOK = document.getElementById("Bal");
  const JOBBGOMBOK = document.getElementById("Jobb");
  BALGOMBOK.addEventListener("click", function () {
    szamlalas--;
    if (szamlalas < 0) {
      szamlalas = KEPLISTA.length - 1;
    }

    document.getElementsByClassName("kep")[0].src = KEPLISTA[szamlalas];
  });
  JOBBGOMBOK.addEventListener("click", function () {
    szamlalas++;
    if (szamlalas >= KEPLISTA.length) {
      szamlalas = 0;
    }

    document.getElementsByClassName("kep")[0].src = KEPLISTA[szamlalas];
  });
}
