"use strict";

const closeNavbar = document.getElementById('close');
const leftNavbar = document.getElementById('navbar');





closeNavbar.addEventListener('click', () => {
    leftNavbar.style.display = "none";
});