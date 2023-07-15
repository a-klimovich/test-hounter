;(function () {
  const $prevBtn = document.getElementById('swiperFeaturedHouseBtnPrev')
  const $nextBtn = document.getElementById('swiperFeaturedHouseBtnNext')

  const swiperFeatureHouses = new Swiper('.swipe-featured-house', {
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 40,
    allowTouchMove: false
  })

  $prevBtn.addEventListener('click', () => {
    swiperFeatureHouses.slidePrev()
  })

  $nextBtn.addEventListener('click', () => {
    swiperFeatureHouses.slideNext()
  })

  swiperFeatureHouses.on('slideChange', (e) => {
    if (e.isBeginning) {
      $nextBtn.classList.remove('button-disabled')
      $prevBtn.classList.add('button-disabled')
    } else {
      $prevBtn.classList.remove('button-disabled')
      $nextBtn.classList.add('button-disabled')
    }
  });

  const heroSectionSwiper = new Swiper('.swiper-hero-section', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    freeMode: true,
    grabCursor: true,
  })
})()
