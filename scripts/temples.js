const footerYear = document.querySelector("#current-year");
let currentYear = new Date().getFullYear();
footerYear.textContent = currentYear;

const footerLastModified = document.querySelector("#last-modified");
footerLastModified.textContent = `Last Modification: ${document.lastModified}`;

const burgerButton = document.querySelector('#BurgerMenu')
const navMenu = document.querySelector('nav')
let isVisible = true;
burgerButton.addEventListener("click", function () {
    navMenu.classList.toggle("isVisible")
    isVisible = !isVisible;
    if (!isVisible) { burgerButton.textContent = "❎"; }
    else { burgerButton.textContent = "☰"; }
})

if (window.innerWidth >= 640) {
    burgerButton.textContent = "☰";
    navMenu.classList.remove("isVisible");
    isVisible = true;
}