let swiperInstance;

  function initSwiper() {
    const slideElements = document.querySelectorAll('.swiper-slide');
    const totalSlides = slideElements.length;

    // Determine max slidesPerView (from breakpoints)
    const maxSlidesPerView = 6;

    // Disable loop if not enough slides
    const loopEnabled = totalSlides > maxSlidesPerView;

    // Destroy existing swiper instance
    if (swiperInstance) swiperInstance.destroy(true, true);

    swiperInstance = new Swiper('.swiper', {
      direction: 'horizontal', // Always horizontal now
      loop: loopEnabled,
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
  window.addEventListener('load', initSwiper);

  // Re-initialize on resize
  window.addEventListener('resize', initSwiper);

  // Optional: Flip card button functionality
  document.querySelectorAll('.flip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const container = btn.closest('.card-container');
      container.classList.toggle('flipped');
    });
  });