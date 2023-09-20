"use strict";

const changeBtn = document.getElementById("change-btn");
const closeNavbar = document.getElementById("close");
const leftNavbar = document.getElementById("navbar");
const modal = document.getElementById("modal");
const menuBar = document.getElementById("menuBar");
const addNote = document.getElementById("add-note");
const rightBox = document.querySelector("section");
const note = document.querySelector("section");
const imgBar = document.getElementById("close-img-box");
const nameInp = document.getElementById("name-inp");
const userName = document.getElementById("user-name");
const form = document.querySelector("form");

menuBar.addEventListener("click", () => {
  leftNavbar.style.display = "inline-block";
  menuBar.removeAttribute("class", "fa-solid fa-bars");
  note.style.width = "68vw";
});

closeNavbar.addEventListener("click", () => {
  leftNavbar.style.display = "none";
  note.style.width = "94.3vw";
  menuBar.setAttribute("class", "fa-solid fa-bars");
});

changeBtn.addEventListener("click", () => {
  leftNavbar.style.display = "none";
  modal.style.display = "flex";
  rightBox.style.display = "none";
});

imgBar.addEventListener("click", () => {
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

addNote.addEventListener("click", () => {
  const notr = document.createElement("div");
  notr.classList.add("note");
  rightBox.appendChild(notr);

  const text = document.createElement("textarea");
  text.setAttribute("class", "text");
  text.setAttribute("cols", "30");
  text.setAttribute("rows", "8");
  text.setAttribute("placeholder", "Enter your text");
  notr.appendChild(text);

  const iconBox = document.createElement("div");
  iconBox.classList.add("icon");

  const bookMark = document.createElement("i");
  bookMark.setAttribute("class", "fa-regular fa-bookmark");

  const like = document.createElement("i");
  like.setAttribute("class", "fa-regular fa-heart");

  const traw = document.createElement("i");
  traw.setAttribute("class", "fa-solid fa-trash");

  iconBox.appendChild(bookMark);
  iconBox.appendChild(like);
  iconBox.appendChild(traw);
  notr.appendChild(iconBox);

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

  traw.addEventListener("click", (e) => {
    e.preventDefault();
    notr.remove();
  });
});
