function initializeSwiper() {
    if (window.innerWidth < 768) {
      new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
        spaceBetween: 16,
        touchEventsTarget: 'container',
        simulateTouch: true,
        preventClicks: true,
        preventClicksPropagation: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
  }
  
  window.addEventListener('load', initializeSwiper);
  window.addEventListener('resize', initializeSwiper);