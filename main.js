const navSlide = () => {
    const navOverlay = document.querySelector('.nav-overlay');
    const burger = document.querySelector('.nav-burger');
    const name = document.querySelector('.nav-name').querySelector('a');
    const nav = document.querySelector('.nav-links');
    const navSoc = document.querySelector('.nav-socials');

    burger.addEventListener('click', () => {
        navOverlay.classList.toggle('nav-active');
        // name.classList.toggle('nav-name-active');
        // nav.classList.toggle('nav-active');
        // navSoc.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    })
}

navSlide();

// const app  = () => {
//     navSlide();
// }