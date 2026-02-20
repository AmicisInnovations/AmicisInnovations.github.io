document.addEventListener("DOMContentLoaded", () => {
    const contact = document.getElementById("contact-btn");
    contact.addEventListener("click", () => {
        window.location.href = "contact.html";
    });

    const team = document.getElementById("team-btn");
    team.addEventListener("click", () => {
        window.location.href = "team.html";
    });

    const products = document.getElementById("products-btn");
    products.addEventListener("click", () => {
        window.location.href = "products.html";
    });

})