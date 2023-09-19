"use strict";

const changeBtn = document.getElementById('change-btn');
const closeNavbar = document.getElementById('close');
const leftNavbar = document.getElementById('navbar');
const modal = document.getElementById('modal');
const menuBar = document.getElementById('menuBar');
const note = document.getElementById('note');
const rightBox = document.querySelector('section');
const imgBar = document.getElementById('close-img-box');
const nameInp = document.getElementById('name-inp');
const userName = document.getElementById('user-name');
const form = document.querySelector('form');
const saveIcon = document.querySelector('#save');
const likeIcon = document.querySelector('#like');
const trashIcon = document.querySelector('#trash');

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
});

saveIcon.addEventListener('click', (e) => {
    e.preventDefault()
    if (saveIcon.hasAttribute('class', 'fa-regular')) {
        saveIcon.classList.toggle('fa-solid');
    }
    if (saveIcon.hasAttribute('class')) {
        saveIcon.classList.toggle('fa-regular');
    }
});

likeIcon.addEventListener('click', (e) => {
    e.preventDefault()
    if (likeIcon.hasAttribute('class', 'fa-regular')) {
        likeIcon.classList.toggle('fa-solid');
    }
    if (likeIcon.hasAttribute('class')) {
        likeIcon.classList.toggle('fa-regular');
    }
});

trashIcon.addEventListener('click', (e) => {
    e.preventDefault()
});

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (nameInp.value == 0) {
        alert("Enter Name")
    } else {
        userName.style.display = "inline-block";
        nameInp.style.display = "none";
        localStorage.setItem('user-name', nameInp.value);
        userName.innerText = localStorage.getItem('user-name');
    }
});