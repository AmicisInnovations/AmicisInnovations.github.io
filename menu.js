 const menu = document.querySelector("#mobile-menu");
  const menuLinks = document.querySelector(".nav-links");
  
  // Toggle Mobile Menu
  menu.addEventListener("click", () => {
      menu.classList.toggle("is-active");
      menuLinks.classList.toggle("active");
  });