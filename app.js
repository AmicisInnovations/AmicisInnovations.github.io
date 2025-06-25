let swiperInstance;

function initSwiper() {
  const isMobile = window.innerWidth <= 768;

  // Destroy existing swiper if exists
  if (swiperInstance) swiperInstance.destroy(true, true);

  swiperInstance = new Swiper('.swiper', {
    loop: true,
    direction: isMobile ? 'vertical' : 'horizontal',
    grabCursor: true,
    speed: 900,
    centeredSlides: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: -10,
      stretch: -45,
      depth: 90,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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
}

// Initialize on load
initSwiper();

// Re-initialize on resize
window.addEventListener('resize', () => {
  initSwiper();
});

document.querySelectorAll('.flip-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const container = btn.closest('.card-container');
    container.classList.toggle('flipped');
  });
});