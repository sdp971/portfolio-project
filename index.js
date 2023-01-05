const menuHambuger = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".nav-list");

menuHambuger.addEventListener('click', function () {
    navList.classList.toggle('mobile-menu');
})