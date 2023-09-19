"use strict";

const closeNavbar = document.getElementById('close');
const leftNavbar = document.getElementById('navbar');
const menuBar = document.getElementById('menuBar');
const note = document.getElementById('note');

menuBar.addEventListener('click', () => {
    leftNavbar.style.display = "inline-block";
    menuBar.removeAttribute('class', 'fa-solid fa-bars');
    note.style.width = "70vw";
})

closeNavbar.addEventListener('click', () => {
    leftNavbar.style.display = "none";
    note.style.width = "94.3vw";
    menuBar.setAttribute('class', 'fa-solid fa-bars');
});