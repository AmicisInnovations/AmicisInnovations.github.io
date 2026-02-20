document.addEventListener("DOMContentLoaded", () => {
    const navLogo = document.getElementById("nav-logo");
    navLogo.addEventListener("click", () => {
        window.location.href = "index.html";
    });
    const footLogo = document.getElementById("footer-logo");
    footLogo.addEventListener("click", () => {
        window.location.href = "index.html";
    });

const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
});

})