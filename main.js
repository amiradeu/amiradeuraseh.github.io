const navSlide = () => {
    const navOverlay = document.querySelector('.nav-overlay');
    const burger = document.querySelector('.nav-burger');

    burger.addEventListener('click', () => {
        navOverlay.classList.toggle('nav-active');
    })
}

navSlide();

// const app  = () => {
//     navSlide();
// }