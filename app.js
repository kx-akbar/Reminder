"use strict";

const changeBtn = document.getElementById("change-btn");
const closeNavbar = document.getElementById("close");
const leftNavbar = document.getElementById("navbar");
const modal = document.getElementById("modal");
const menuBar = document.getElementById("menuBar");
const addNote = document.getElementById("add-note");
const rightBox = document.querySelector("section");
const imgBar = document.getElementById("close-img-box");
const nameInp = document.getElementById("name-inp");
const userName = document.getElementById("user-name");
const changBack = document.getElementById('changeBack');
const body = document.querySelector('body');
const form = document.querySelector("form");
const maleUser = document.getElementById('male');
const famaleUser = document.getElementById('fa-male');
const userLogo = document.getElementById('user-logo');
const noteStyle = document.getElementById('change-note-style');

changeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    leftNavbar.style.display = "none";
    modal.style.display = "flex";
    rightBox.style.display = "none";
});

userLogo.addEventListener("click", (e) => {
    e.preventDefault();
    leftNavbar.style.display = "none";
    modal.style.display = "flex";
    rightBox.style.display = "none";
});

imgBar.addEventListener("click", (e) => {
    e.preventDefault();
    leftNavbar.style.display = "inline-block";
    modal.style.display = "none";
    rightBox.style.display = "flex";
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (nameInp.value == 0) {
        alert("Enter Name");
    } else {
        userName.style.display = "inline-block";
        nameInp.style.display = "none";
        localStorage.setItem("user-name", nameInp.value);
        userName.innerText = localStorage.getItem("user-name");
    }
});

addNote.addEventListener("click", (e) => {
    e.preventDefault();
    const note = document.createElement("div");
    note.classList.add("note");
    rightBox.appendChild(note);

    const text = document.createElement("textarea");
    text.setAttribute("class", "text");
    text.setAttribute("cols", "30");
    text.setAttribute("rows", "8");
    text.setAttribute("placeholder", "Enter your text");
    text.setAttribute('maxlength', '830');
    note.appendChild(text);
    localStorage.setItem('note', note);

    const iconBox = document.createElement("div");
    iconBox.classList.add("icon");

    const bookMark = document.createElement("i");
    bookMark.setAttribute("class", "fa-regular fa-bookmark");

    const like = document.createElement("i");
    like.setAttribute("class", "fa-regular fa-heart");

    const trash = document.createElement("i");
    trash.setAttribute("class", "fa-solid fa-trash");

    iconBox.appendChild(bookMark);
    iconBox.appendChild(like);
    iconBox.appendChild(trash);
    note.appendChild(iconBox);

    if (rightBox.children.length > Infinity) {
        rightBox.classList.remove();
        rightBox.classList.add('grid-note');

    } else if (rightBox.children.length > 1) {
        rightBox.classList.add('grid-note');
        rightBox.firstChild.style.width = "30vw";
        note.style.width = "30vw";
    }

    bookMark.addEventListener("click", (e) => {
        e.preventDefault();
        if (bookMark.hasAttribute("class", "fa-regular")) {
            bookMark.classList.toggle("fa-solid");
        }
        if (bookMark.hasAttribute("class")) {
            bookMark.classList.toggle("fa-regular");
        }
    });

    like.addEventListener("click", (e) => {
        e.preventDefault();
        if (like.hasAttribute("class", "fa-regular")) {
            like.classList.toggle("fa-solid");
        }
        if (like.hasAttribute("class")) {
            like.classList.toggle("fa-regular");
        }
    });

    trash.addEventListener("click", (e) => {
        e.preventDefault();
        note.remove();
    });

    noteStyle.addEventListener('click', () => {
        note.style.backgroundColor = "white";
        bookMark.style.color = "#000";
        like.style.color = "#000";
        trash.style.color = "#000";
        text.style.backgroundColor = "teal";
        text.style.color = "#000";
    });
});

changBack.addEventListener('click', (e) => {
    e.preventDefault()
    let backarr = ['url("images/back-1.jpg")', 'url("images/back-2.jpg")', 'url("images/back-3.jpg")', 'url("images/back-4.jpg")', 'url("images/back-5.jpg")']
    let bg = backarr[Math.floor(Math.random() * backarr.length)];
    body.style.backgroundImage = bg;
});

menuBar.addEventListener("click", () => {
    leftNavbar.style.display = "inline-block";
    menuBar.removeAttribute("class", "fa-solid fa-bars");
});

closeNavbar.addEventListener("click", () => {
    leftNavbar.style.display = "none";
    menuBar.setAttribute("class", "fa-solid fa-bars");
});

maleUser.addEventListener('click', () => {
    userLogo.removeAttribute('src');
    userLogo.setAttribute('src', './images/user-logo_1.png');
    userLogo.style.height = "5rem";
    userLogo.style.width = "5rem";
    userLogo.style.filter = "contrast(2.6)";
    leftNavbar.style.display = "inline-block";
    modal.style.display = "none";
    rightBox.style.display = "flex";
});

famaleUser.addEventListener('click', () => {
    userLogo.removeAttribute('src');
    userLogo.setAttribute('src', './images/user-logo_2.png');
    leftNavbar.style.display = "inline-block";
    modal.style.display = "none";
    rightBox.style.display = "flex";
});