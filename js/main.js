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

$(function () {
  $(".catalog__column-right").accordion({
    // active: true,
    collapsible: true,
    heightStyle: "content",
    header: ".accordion__header",
    icons: {"header": "accordion__header__icon", "activeHeader": "accordion__header__icon"},
    classes: {
      "ui-accordion-header": "accordion__header",
      "ui-accordion-header-collapsed": "accordion__header",
      "ui-accordion-content": "accordion__body"
    }
  });

  $('.bullet').click(function () {
    $('.bullet').removeClass('active');
    $(this).addClass('active');
    let parent = this.parentElement;
    let length = parent.children.length;
    for (let i = 0; i < length; i++) {
      let el = parent.children[i];
      if (el.classList.contains('active')) {
        let cards = document.querySelectorAll('.events__card');
        for (let c = 0; c < length; c++) {
          cards[c].classList.remove('is-hidden');
          cards[c].style.display = 'none';
        }
        cards[i].style.display = 'block';
        break;
      }
    }
  })

  $('.events__button').click(function () {
    this.classList.add('is-hidden');
    $('.events__card').removeClass('is-hidden');
  })

});



