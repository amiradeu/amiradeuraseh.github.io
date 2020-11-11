const navSlide = () => {
    const navOverlay = document.querySelector('.nav-overlay');

    burger.addEventListener('click', () => {
        navOverlay.classList.toggle('nav-active');
    })
}

navSlide();

// const app  = () => {
//     navSlide();
// }