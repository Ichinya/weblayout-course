const hero = new Swiper('.swiper-hero', {
  // Optional parameters
  loop: true,
  parallax: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    1024: {
      height: 770,
    }
  }

});

const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
  searchEnabled: false
});

const simpleBar = new SimpleBar(document.getElementById('dd-scroll'), {
  scrollbarMinSize: 20,
  scrollbarMaxSize: 30,
})
// simpleBar.recalculate()

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
    1: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerColumn: 1,
    },
    576: {
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

const magazines__gallery = new Swiper('.swiper-magazines', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  slidesPerColumnFill: 'row',

  navigation: {
    nextEl: '.magazines-swiper-arrow-right',
    prevEl: '.magazines-swiper-arrow-left',
  },
  pagination: {
    el: '.magazines__gallery-pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span> / <span class="' + totalClass + '"></span>';
    }
  },
  watchOverflow: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 34
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
})

const projects__gallery = new Swiper('.swiper-project', {
  slidesPerView: 3,

  navigation: {
    nextEl: '.project-arrow-right',
    prevEl: '.project-arrow-left',
  },
  watchOverflow: true,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 34
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.icon-flags').forEach(function (el) {
    el.addEventListener('click', function (e) {
      let path = e.currentTarget.dataset.path;
      console.log(path);

      // меняем на табе
      document.querySelectorAll('.icon-flags').forEach(function (link) {
        link.classList.remove('flag-active');
      })
      e.currentTarget.classList.add('flag-active');

      // показываем таб
      document.querySelectorAll('.catalog__text').forEach(function (link) {
        link.classList.remove('active');
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('active');
    })
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.catalog__list__item').forEach(function (el) {
    el.addEventListener('click', function (e) {
      let path = e.currentTarget.dataset.path;
      console.log(path);

      // меняем на табе
      document.querySelectorAll('.catalog__list__item').forEach(function (link) {
        link.classList.remove('catalog__list__item-active');
      })
      e.currentTarget.classList.add('catalog__list__item-active');

      // показываем таб
      document.querySelectorAll('.catalog__column-left').forEach(function (link) {
        link.classList.add('is-hidden');
      })

      let el = document.querySelector(`[data-target="${path}"]`)
      console.log(el)
      console.log(typeof el)
      if (el == null) {
        el = document.querySelector(`[data-target="unknown"]`)
      }
      el.classList.remove('is-hidden');
    })
  })
})

function close_modal() {
  modal_gallery.classList.remove('is-active');
}

let myMap;

function init() {
  myMap = new ymaps.Map(document.getElementById("YMapsID"), {
    center: [55.759927, 37.644897],
    zoom: 13,
    // autoFitToViewport: 'always',
    controls: []
  }),

    myPoint = new ymaps.Placemark([55.758463, 37.601079], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/target_maps.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-10, -10]
    });

  myMap.geoObjects.add(myPoint);

}

let yandexmap = ymaps.ready(init);

$(function () {


  window.addEventListener(`resize`, () => {
    console.log('resize');
    hero.init();
    gallery.init();
    magazines__gallery.init();
    projects__gallery.init();

    // данный способ иногда дублирует создание карты, из-за чего js вешается
    // myMap.container.destroy();
    // yandexmap = ymaps.ready(init);

    // перестраиваем карту, если убрать задержку, то карта криво встает
    YMapsID.style.display = 'none';
    setTimeout(function () {
      YMapsID.style.display = 'block';
      myMap.container.fitToViewport([true]);
    }, 10);


    document.querySelectorAll('.magazines__list-select li').forEach(function (el) {
      el.remove();
    })
  }, false);


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
    let cards = document.querySelectorAll('.events__card');
    cards[2].style.display = 'block';
  })

  $('.sub__menu__link').click(function (e) {
    let s = document.getElementById('dd-scroll');
    let left = e.currentTarget.offsetLeft;
    console.log(left, e);
    s.style.left = left + 'px';
    s.classList.toggle('is-hidden');
  })

  $('.checkbox__item').click(function (e) {
    if ($(this).prop('checked')) {
      this.closest('label').style.color = "#C283F3";
    } else {
      this.closest('label').style.color = "#FFFFFF";
    }
  })

  $('.magazines__category-header').click(function (e) {
    if (window.screen.width >= 768) {
      return;
    }
    document.querySelector('.magazines__list').classList.toggle('modal');
    document.querySelector('.magazines__list-select').classList.toggle('is-hidden');
    document.querySelector('.magazines__category-header').classList.toggle('rotate');
  })

  $('.gallery-slide').click(function () {
    modal_gallery.classList.add('is-active');
    $('#modal_gallery').find('.modal-content')[0].innerHTML = '';
    let el = this.cloneNode(true);
    $('#modal_gallery').find('.modal-content')[0].appendChild(el.childNodes[0]);
  })

  $('.modal-background').click(function () {
    close_modal();
  })

  $('.modal-content').click(function () {
    close_modal();
  })

  $('.modal-close').click(function () {
    close_modal();
  })

  $('.magazines__list li').click(function (e) {
    if (window.screen.width >= 768) {
      return;
    }
    let el = this.cloneNode(true);
    if (!el.children[0].children[0].checked) {
      return;
    }
    if (typeof this.dataset.list == "undefined") {
      el.addEventListener('click', function () {
        let list = document.querySelectorAll('.magazines__list li');
        for (let i = 0; i < list.length; i++) {
          if (list[i].dataset.list == this.innerText) {
            list[i].children[0].children[0].click();
          }
        }
        this.remove();
      })
      document.querySelector('.magazines__list-select').appendChild(el);
      this.dataset.list = this.children[0].innerText;
    } else {
      let list = document.querySelectorAll('.magazines__list-select li');
      for (let i = 0; i < list.length; i++) {
        if (list[i].innerText == this.dataset.list) {
          list[i].remove();
        }
      }
    }
    $('.magazines__category-header').click();
    return;
  })


  document.body.querySelector('#gallery-form-author').addEventListener('change', event => {

    $('.gallery__select').removeClass('is-hidden');
    $('.gallery__select')[1].style.visibility = 'visible';
    $('.gallery__select')[2].style.visibility = 'visible';
  }, false);

});

document.addEventListener('keydown', function (event) {
  if (event.code == 'Escape') {
    close_modal();
  }
});

// валидация
new window.JustValidate('#click_to_call', {
  tooltip: {fadeOutTime: 3000,},
  rules: {
    name: {required: true, minLength: 3},
    phone: {
      required: true,
      function: (name, value) => {
        let phone = value.replace(/[^\d]+/g, '');
        return phone.length == 11;
      }
    },
  },
  submitHandler: function (form, values, ajax) {
    console.log(values)
    ajax({
      url: 'https://just-validate-api.herokuapp.com/submit',
      method: 'POST',
      data: values,
      async: true,
      callback: (response) => {
        console.log(response);
      }
    });
  },
});

