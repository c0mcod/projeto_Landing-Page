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

document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove a classe 'active' de todas as abas
            tabButtons.forEach((btn) => btn.classList.remove("active"));
            tabPanes.forEach((pane) => pane.classList.remove("active"));

            // Adiciona a classe 'active' para a aba clicada e seu conteúdo
            button.classList.add("active");
            const target = button.getAttribute("data-target");
            document.getElementById(target).classList.add("active");
        });
    });
});
