"use strict";

const changeBtn = document.getElementById('edit-btn');
const imgModal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const dd = document.getElementById('img-modal');
const nameInp = document.getElementById('name-inp');
const userName = document.getElementById('user-name');
const changeNameBtn = document.getElementById('change-name');
const form = document.querySelector('form');





// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if(nameInp.value <= 0){
//         alert('Plase enter name');
//     }else{
//         userName.innerText = nameInp.value;
//     }
// });

















// "use script";

// const unorderedList = document.querySelector('ul');
// const editNameBtn = document.getElementById('edit-name');
// const editInput = document.getElementById('user-name');
// const userName = document.getElementById('user_name');
// const userMenu = document.getElementById('user-menu');
// const list3 = document.getElementById('list-3');
// const minList = document.getElementById('min-list');
// const delBtn = document.getElementById('delete-btn');
// const boxing = document.querySelector('section');
// const box = document.getElementById('box');

// const getRemainder = () => {
//     editNameBtn.addEventListener('click', () => {
//         const firsNameuser = String(prompt('Ismingizni kiriting'));
//         userName.textContent = firsNameuser;
//         userName.style.fontSize = "26px";
//         editNameBtn.textContent = "Saqlandi";
//     });
    
//     list3.addEventListener('click', () => {
//         boxing.innerHTML += <div class="box"><textarea class="list list-1" id="box" type="text" placeholder="Xabar"></textarea><div class="min-menu"><i class="fa-solid fa-ellipsis-vertical" id="min-list"></i><button class="btn1" id="delete-btn">O'chirish</button></div></div>;
//         box.style.display = "flex";
//     });
// }

// getRemainder();