"use strict";

// Hämtar element
let openButtonEl = document.getElementById("menu-button-open");
let closeButtonEl = document.getElementById("menu-button-close");
let navMenuEl = document.getElementById("nav-menu");

// Eventlyssnare
openButtonEl.addEventListener("click", toggleMenu); // Klick på "Meny"-knappen anropar funktionen toggleMenu
closeButtonEl.addEventListener("click", toggleMenu); // Klick på "Stäng meny"-knappen anropar funktionen toggleMenu

// Funktion som kontrollerar om menyn visas eller inte, och utför åtgärd baserat på det
function toggleMenu() {
    let menuStyle = window.getComputedStyle(navMenuEl);

    // Om menyn inte visas, så visas den
    if (menuStyle.display === "none") {
        navMenuEl.style.display = "flex";
    // Om menyn visas, så döljs den
    } else {
        navMenuEl.style.display = "none";
    }
}