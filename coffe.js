// img scroll
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }); var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },     
    });
let menu=document.querySelector(".menu-icon");
let navbar=document.querySelector(".navbar");
menu.onclick=()=>{
  menu.classList.toggle("move");
  navbar.classList.toggle("open-menu");
};
window.onscroll=()=>{
  menu.classList.remove("move");
  navbar.classList.remove("open-menu");
};
