document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3, // Exibe 3 slides ao mesmo tempo
    spaceBetween: 30, // Espaçamento entre os slides
    loop: true, // Ativa a rolagem infinita
    pagination: {
        el: ".swiper-pagination",
        clickable: true, // Permite interação com as bolinhas
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
