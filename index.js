function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}


// слайдер в архитектурных решениях
$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 4,  // Показывать 4 слайда одновременно
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        infinite: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    });

    // Подключаем Fancybox
    $("[data-fancybox]").fancybox();
});
