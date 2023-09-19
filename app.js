"use strict";

const changeBtn = document.getElementById('change-btn');
const closeNavbar = document.getElementById('close');
const leftNavbar = document.getElementById('navbar');
const modal = document.getElementById('modal');
const menuBar = document.getElementById('menuBar');
const note = document.getElementById('note');
const rightBox = document.querySelector('section');
const imgBar = document.getElementById('close-img-box');

menuBar.addEventListener('click', () => {
    leftNavbar.style.display = "inline-block";
    menuBar.removeAttribute('class', 'fa-solid fa-bars');
    note.style.width = "70vw";
});

closeNavbar.addEventListener('click', () => {
    leftNavbar.style.display = "none";
    note.style.width = "94.3vw";
    menuBar.setAttribute('class', 'fa-solid fa-bars');
});

changeBtn.addEventListener('click', () => {
    leftNavbar.style.display = "none";
    modal.style.display = "flex";
    rightBox.style.display = "none";
});

imgBar.addEventListener('click', () => {
    leftNavbar.style.display = "inline-block";
    modal.style.display = "none";
    rightBox.style.display = "flex";
})