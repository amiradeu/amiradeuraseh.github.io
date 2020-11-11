const navSlide = () => {
    const burger = document.querySelector('.nav-burger');
    const nav = document.querySelector('.nav-links');
    const navSoc = document.querySelector('.nav-socials');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navSoc.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    })
}

navSlide();

// const app  = () => {
//     navSlide();
// }