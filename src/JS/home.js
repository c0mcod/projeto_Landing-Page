import AOS from 'aos';
AOS.init();

document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30, 
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true, // Permite interação com as bolinhas
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

