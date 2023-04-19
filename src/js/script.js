let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slider__slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0.4";
        slides[i].style.transition = "opacity 0.4s linear";
        slides[i].style.zIndex = "0";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.opacity = "1";
    slides[slideIndex - 1].style.transition = "opacity 0.4s linear";
    slides[slideIndex - 1].style.zIndex = "1";

    setTimeout(showSlides, 2000);
}

function menuOpen() {
    const burger = document.querySelector('.hamburger-nav')
    const nav = document.querySelector('.header__nav')

    document.addEventListener('click', function(e) {
        if (e.target.closest('.hamburger-nav')) {
            nav.classList.add('header__nav--open')
        } else {
            nav.classList.remove('header__nav--open')

        }
    })
}

menuOpen()