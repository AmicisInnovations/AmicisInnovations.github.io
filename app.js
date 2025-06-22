var swiper = new Swiper(".swiper", {
  loop: true,
  speed: 900,
  grabCursor: true,
  centeredSlides: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: -10,
    stretch: -45,
    depth: 90,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

document.querySelectorAll('.flip-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const container = btn.closest('.card-container');
    container.classList.toggle('flipped');
  });
});
