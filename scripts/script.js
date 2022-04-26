// JavaScript Document
console.log("Howdy!");
// overlay pokemon kaart https://www.w3schools.com/howto/howto_css_overlay.asp
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// https://www.w3schools.com/js/js_functions.asp

// Variables die de buttons aanspreken
var btnEevee = document.getElementById('btnEevee');
btnEevee.addEventListener("click",showOverlayEevee);

var btnVaporeon = document.getElementById('btnVaporeon');
btnVaporeon.addEventListener("click",showOverlayVaporeon);

var btnJolteon = document.getElementById('btnJolteon');
btnJolteon.addEventListener("click",showOverlayJolteon);

var btnFlareon = document.getElementById('btnFlareon');
btnFlareon.addEventListener("click",showOverlayFlareon);

var btnUmbreon = document.getElementById('btnUmbreon');
btnUmbreon.addEventListener("click",showOverlayUmbreon);

var btnEspeon = document.getElementById('btnEspeon');
btnEspeon.addEventListener("click",showOverlayEspeon);

var btnLeafeon = document.getElementById('btnLeafeon');
btnLeafeon.addEventListener("click",showOverlayLeafeon);

var btnGlaceon = document.getElementById('btnGlaceon');
btnGlaceon.addEventListener("click",showOverlayGlaceon);

var btnSylveon = document.getElementById('btnSylveon');
btnSylveon.addEventListener("click",showOverlaySylveon);

var overlay = document.getElementById('overlay');
overlay.addEventListener("click",hideOverlay);

// Functies die de kaart en bijbehorende kaart laten zien zodra er op de button is geklikt
function showOverlayEevee() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("eeveeKaart").style.display = "block";
}

function showOverlayVaporeon() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("vaporeonKaart").style.display = "block";
}

function showOverlayJolteon() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("jolteonKaart").style.display = "block";
}

function showOverlayFlareon() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("flareonKaart").style.display = "block";
}

function showOverlayUmbreon() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("umbreonKaart").style.display = "block";
}

function showOverlayEspeon() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("espeonKaart").style.display = "block";
}

function showOverlayLeafeon() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("leafeonKaart").style.display = "block";
}

function showOverlayGlaceon() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("glaceonKaart").style.display = "block";
}

function showOverlaySylveon() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("sylveonKaart").style.display = "block";
}

// Overlay en kaart verdwijnen zodra er op het scherm wordt geklikt
function hideOverlay() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("eeveeKaart").style.display = "none";
    document.getElementById("vaporeonKaart").style.display = "none";
    document.getElementById("jolteonKaart").style.display = "none";
    document.getElementById("flareonKaart").style.display = "none";
    document.getElementById("umbreonKaart").style.display = "none";
    document.getElementById("espeonKaart").style.display = "none";
    document.getElementById("leafeonKaart").style.display = "none";
    document.getElementById("glaceonKaart").style.display = "none";
    document.getElementById("sylveonKaart").style.display = "none";
}