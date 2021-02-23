const hero = new Swiper('.swiper-hero', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    1024: {
      height: 770,
    }
  }

});


const gallery = new Swiper('.swiper-gallery', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerColumn: 2,
  slidesPerColumnFill: 'row',

  navigation: {
    nextEl: '.swiper-arrow-right',
    prevEl: '.swiper-arrow-left',
  },
  pagination: {
    el: '.gallery-pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span> / <span class="' + totalClass + '"></span>';
    }
  },
  watchOverflow: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerColumn: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
      spaceBetween: 35
    },
    1024: {
      height: 595,
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
      spaceBetween: 35
    },
    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
      spaceBetween: 50
    }
  }
})
