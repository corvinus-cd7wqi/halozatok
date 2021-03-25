var kérdések;
var kérdés = 0;
var valasz1 = document.getElementById("valasz1");
var valasz2 = document.getElementById("valasz2");
var valasz3 = document.getElementById("valasz3");


function letöltés() {
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );
}
function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítés(0);
}

function kérdésMegjelenítés(kérdés) {
    document.getElementById("kérdés_szöveg").innerHTML = kérdések[kérdés].questionText;
    valasz1.innerHTML = kérdések[kérdés].answer1;
    valasz2.innerHTML = kérdések[kérdés].answer2;
    valasz3.innerHTML = kérdések[kérdés].answer3;
    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/teszt-0050.jpg";
}
window.onload = function () {

    letöltés();
    document.getElementById("vissza").onclick = function vissza() {
        kérdés--;
        if (kérdés == -1) {
            kérdés = kérdések.length - 1;
        }
        kérdésMegjelenítés(kérdés);
    }
    document.getElementById("előre").onclick = function előre() {
        kérdés++;
        if (kérdés == kérdések.length) {
            kérdés = 0;
        }
        kérdésMegjelenítés(kérdés);
        valasz1.classList.remove("jó");
        valasz1.classList.remove("rossz");
        valasz2.classList.remove("jó");
        valasz2.classList.remove("rossz");
        valasz3.classList.remove("jó");
        valasz3.classList.remove("rossz");
    }
}
valasz1.onclick = function valasz() {

    if (kérdések[kérdés].correctAnswer == 1) {
        valasz1.classList.add("jó");
    }
    else valasz1.classList.add("rossz");
}
valasz2.onclick = function valasz() {

    if (kérdések[kérdés].correctAnswer == 2) {
        valasz2.classList.add("jó");
    }
    else valasz2.classList.add("rossz");
}
valasz3.onclick = function valasz() {

    if (kérdések[kérdés].correctAnswer == 3) {
        valasz3.classList.add("jó");
    }
    else valasz3.classList.add("rossz");
}
