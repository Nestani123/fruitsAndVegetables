let menu = document.querySelector("#menu-icon");
let navBar = document.querySelector(".nav-bar");
let header = document.querySelector("header");

menu.addEventListener('click',() => {
    menu.classList.toggle('bx-x');
    navBar.classList.toggle('active');
});




window.onscroll = () => {
    menu.classList.remove('bx-x');
    navBar.classList.remove('active');
};

window.addEventListener('scroll', () =>{
header.classList.toggle('shadow', window.scrollY > 0);
});