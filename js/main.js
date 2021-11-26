document.addEventListener('DOMContentLoaded', function () {
  const anchors = document.querySelectorAll('a.main__menu__link')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href')

      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

  const buttonDrop = document.querySelectorAll('.header__sub__link');
  buttonDrop.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      let button = this;
      console.log(this)
      if (e.target.classList.contains('activ')) { //если уже класс есть на этой кнопке
        e.currentTarget.classList.remove('activ') //то удаляем конкретно на этой кнопке
      } else {
        e.target.classList.add('activ') //иначе добавляем класс
        buttonDrop.forEach(el => {      //удаляем активный класс на других кнопках
          if (el != button) {
            el.classList.remove("activ");
          }
        });
      }
    })
  })
  //если это не кнопка и не само выпадающее меню, то удаляем класс
  //первое условие необходимо добавить, чтобы незацикливать появление->исчезновение класса
  document.addEventListener('click', function (event) {
    if (!event.target.classList.contains('header__sub__link') && !event.target.classList.contains('header__sub__scroll')) {
      buttonDrop.forEach(function (e) {
        e.classList.remove('activ')
      })
    }
  })


  const simpleBar1 = new SimpleBar(document.getElementById('scroll-1'), {autoHide: false, scrollbarMaxSize: 28});
  simpleBar1.recalculate();

  const simpleBar2 = new SimpleBar(document.getElementById('scroll-2'), {autoHide: false, scrollbarMaxSize: 28});
  simpleBar2.recalculate();

  const simpleBar3 = new SimpleBar(document.getElementById('scroll-3'), {autoHide: false, scrollbarMaxSize: 28});
  simpleBar3.recalculate();

  const simpleBar4 = new SimpleBar(document.getElementById('scroll-4'), {autoHide: false, scrollbarMaxSize: 28});
  simpleBar4.recalculate();

  const simpleBar5 = new SimpleBar(document.getElementById('scroll-5'), {autoHide: false, scrollbarMaxSize: 28});
  simpleBar5.recalculate();

  const mediaQueryMax1199 = window.matchMedia('(max-width: 1199px)');

  function handleTabletChange1199(e) {
    if (e.matches) {
      document.querySelector('#header__btn-seach').addEventListener('click', function (e) {
        e.preventDefault();
        if (!this.classList.contains('is-active')) {
          this.classList.add('is-active');
          this.classList.add('fadeInLeft');
          document.querySelector('#input__search').classList.add('is-active');
          document.querySelector('#input__search').classList.add('fadeInLeft');
          document.querySelector('.header__logo').classList.add('move');
        } else {
          this.classList.remove('is-active');
          this.classList.remove('fadeInLeft');
          document.querySelector('#input__search').classList.remove('is-active');
          document.querySelector('#input__search').classList.remove('fadeInLeft');
          document.querySelector('.header__logo').classList.remove('move');
        }
      })
    }
  }

  mediaQueryMax1199.addListener(handleTabletChange1199);
  handleTabletChange1199(mediaQueryMax1199);

  const mediaQueryMax991 = window.matchMedia('(max-width: 991px)');

  function handleTabletChange991(e) {
    if (e.matches) {
      document.querySelector('#header__btn-seach').addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.add('is-active');
        this.classList.add('fadeInLeft');
        document.querySelector('.header__logo').classList.add('hidden');
        document.querySelector('#burger').classList.add('hidden');
        document.querySelector('#input__search').classList.add('is-active');
        document.querySelector('#input__search').classList.add('fadeInLeft');
        document.querySelector('#burger__search-close').classList.add('is-active');
        document.querySelector('#burger__search-close').classList.add('fadeInLeft');
      });

      document.querySelector('#burger__search-close').addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.remove('is-active');
        this.classList.remove('fadeInLeft');
        document.querySelector('.header__logo').classList.remove('hidden');
        document.querySelector('.header__logo').classList.remove('move');
        document.querySelector('#burger').classList.remove('hidden');
        document.querySelector('#input__search').classList.remove('is-active');
        document.querySelector('#input__search').classList.remove('fadeInLeft');
        document.querySelector('#header__btn-seach').classList.remove('is-active');
        document.querySelector('#header__btn-seach').classList.remove('fadeInLeft');


      })
    }
  }

  mediaQueryMax991.addListener(handleTabletChange991);
  handleTabletChange991(mediaQueryMax991);

  const mediaQueryMax480 = window.matchMedia('(max-width: 480px)');

  function handleTabletChangeMax480(e) {
    if (e.matches) {
      document.querySelector('#header__btn-seach').addEventListener('click', function (e) {
        document.querySelector('.header__top').classList.add('add-Blur');
        document.querySelector('.section-hero').style.height = "355px";
        document.querySelector('.section-hero__content').style.top = "78px";
      });
      document.querySelector('#burger__search-close').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.header__top').classList.remove('add-Blur');
        document.querySelector('.section-hero').style.height = "310px";
        document.querySelector('.section-hero__content').style.top = "78px";
      });
    }


  }

  mediaQueryMax480.addListener(handleTabletChangeMax480);
  handleTabletChangeMax480(mediaQueryMax480);

  $('#burger').click(function () {
    $("#menu").show('slide', {direction: 'right'}, 300);
    document.body.style.overflow = "auto";
  });
  $('#burger__close').click(function () {
    $("#menu").hide('slide', {direction: 'right'}, 300);
    document.body.style.overflow = "auto";
  });

  /*--------------------- End Burger ------------------- */
  /*-------------- Section-Hero ------------ */
//переход от кнопки к футеру
  let btn = document.querySelector('.btn-to-footer')

  btn.addEventListener('click', function () {
    document.querySelector('#footer').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  });

  const swiper = new Swiper('.swiper-hero', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 2000,
    autoplay: {
      delay: 2000
    },
    effect: "fade",
    allowTouchMove: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: '.swiper-bullet-pagination',
      type: 'bullets',
      clickable: true
    }

  })

  const element = document.querySelector('#selectCustom');
  const choices = new Choices(element, {
    itemSelectText: '',
    searchEnabled: false,
    position: 'bottom',
    shouldSort: false
  });

  new Swiper(".section-gallery__slider", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
      rows: 2
    },
    spaceBetween: 30,
    navigation: {
      nextEl: '.slider-gallery__click-right',
      prevEl: '.slider-gallery__click-left',
    },
    pagination: {
      el: '.gallery-pagination',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span> / <span class="' + totalClass + '"></span>';
      }
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        grid: {
          rows: 1
        },
        spaceBetween: 0
      },
      576: {
        slidesPerView: 2,
        grid: {
          rows: 2
        },
        spaceBetween: 30
      },

      1200: {
        slidesPerView: 3,
        grid: {
          rows: 2
        },
        spaceBetween: 50
      }
    },

    a11y: {
      prevSlideMessage: 'Предыдущий',
      nextSlideMessage: 'Следующий',
    }
  })

  $(function () {
    $(".tabs__accordion").accordion({
      collapsible: true,
      heightStyle: "content",
      header: "h3",
      classes: {
        "ui-accordion-header": ".tabs__painter-desc",
      }
    });
  });

  document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      document.querySelectorAll('.tabs__btn').forEach(function (tabsBtnActive) {
        tabsBtnActive.classList.remove('tabs__btn-active')
      })
      this.classList.add('tabs__btn-active')
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.tabs__content').forEach(function (tabsContent) {
        tabsContent.classList.remove('tabs__content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs__content-active')
      document.querySelector('#plug').classList.remove('tabs__painter-desc-active')
      document.querySelector('#plugButton').classList.remove('accordion__btn-active')
      let firstMatch = document.querySelector(`[data-target="${path}"]`).querySelectorAll('.accordion__item button');
      let activeFirstMatch;
      firstMatch.forEach(element => {
        if (element.classList.contains('accordion__btn-active')) {
          activeFirstMatch = element;
        }
      });
      let firstMatchValue;
      let dataValueFirstMatch;
      if (!activeFirstMatch) {
        firstMatch = document.querySelector(`[data-target="${path}"]`).querySelector('.ui-accordion-content-active .accordion__item button');
        firstMatch.classList.add('accordion__btn-active');
        firstMatchValue = firstMatch.innerHTML;

        dataValueFirstMatch = firstMatch.dataset.path;
      } else {
        firstMatchValue = activeFirstMatch.innerHTML;

        dataValueFirstMatch = activeFirstMatch.dataset.path;
      }
      const areaFirstMatch = document.querySelector(`[data-target="${dataValueFirstMatch}"]`)
      areaFirstMatch.classList.add('tabs__painter-desc-active');

      createContentWiki(firstMatchValue, areaFirstMatch);

      $(function () {
        $(".tabs__accordion").accordion("refresh");
      });
    })
    tabsBtn.addEventListener('mouseover', function (event) {
      let target = event.target;
      target.classList.add('tabs__shadow');
    });
    tabsBtn.addEventListener('mouseout', function (event) {
      let target = event.target;
      target.classList.remove('tabs__shadow');
    });
    tabsBtn.addEventListener('focus', function (event) {
      let target = event.target;
      target.classList.add('tabs__shadow');
    });
    tabsBtn.addEventListener('blur', function (event) {
      let target = event.target;
      target.classList.remove('tabs__shadow');
    });
  })


  document.querySelectorAll('.accordion__btn').forEach(function (tabsBtnAcc) {
    tabsBtnAcc.addEventListener('click', function (event) {
      document.querySelectorAll(".default").forEach(function (e) {
        e.remove();
      })
      document.querySelectorAll('.accordion__btn').forEach(function (tabsBtnAccActive) {
        tabsBtnAccActive.classList.remove('accordion__btn-active')
      })
      this.classList.add('accordion__btn-active')
      let currentBtnActive = this.innerHTML;

      const pathAcc = event.currentTarget.dataset.path
      document.querySelectorAll('.tabs__painter-desc').forEach(function (tabsContentAcc) {
        tabsContentAcc.classList.remove('tabs__painter-desc-active')
      })
      document.querySelector(`[data-target="${pathAcc}"]`).classList.add('tabs__painter-desc-active')

      let currentContentActive = document.querySelector(`[data-target="${pathAcc}"]`);

      createContentWiki(currentBtnActive, currentContentActive);
    })
  })

  const linksToAcc = document.querySelectorAll('a.desc-plug__link')

  for (let element of linksToAcc) {
    element.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = element.getAttribute('href')

      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }


  const mediaQuery = window.matchMedia('(max-width: 991px)');

  function handleTabletChange(e) {
    if (e.matches) {
      document.querySelector('.event-card3').classList.add('hidden');
      document.querySelector('.event-card3').classList.add('fadeInUp');
    }
  }

  mediaQuery.addListener(handleTabletChange);
  handleTabletChange(mediaQuery);


  const defCheck = document.querySelector('.default-checkbox');
// defCheck.classList.add('on-click');
  if (defCheck.classList.contains('is-none')) {
    defCheck.classList.remove('is-none')
  }
  const inputDefCheck = defCheck.querySelector('.checkbox__input');
  inputDefCheck.setAttribute('checked', true)

  const mediaQuery480 = window.matchMedia('(max-width: 480px)');

  function handleTabletChange480(e) {
    if (e.matches) {

      const accButton = document.querySelectorAll('button.accordion__btn');
      for (let button of accButton) {
        button.addEventListener('click', function () {
          setTimeout(function () { //задержка для того, чтобы успел прийти ответ от сервера апи вики
            document.querySelector('.tabs__painter-desc-active').scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }, 1000)
        });
      }


      const categories = document.querySelector('.checkbox__title__cat');
      const itemCategories = document.querySelectorAll('.checkbox__item');
      const checkAll = document.querySelectorAll('.checkbox__input');
      let flag = true;
      let firstCheck = false;
      defCheck.classList.add('check-on');

      checkAll.forEach(check => { //перебираем все чекбоксы и вешаем на еих событие клик
        check.addEventListener('click', () => {
          if (check.checked) { //если чекбокс включен
            check.closest('.checkbox__item').classList.add('check-on'); //родителю добавляем класс
          } else {
            check.closest('.checkbox__item').classList.remove('check-on');
            if (flag) {
              check.closest('.checkbox__item').classList.add('is-none');
            }
          }
        })
      });
      categories.addEventListener('click', () => {

        categories.classList.toggle('on-click');
        itemCategories.forEach(item => { //перебираем каждый элемент списка категорий

          if ((!item.classList.contains('is-none')) && (!item.classList.contains('check-on'))) { //если нет класса с display=none и не включен чек бокс
            item.classList.add('is-none') //скрываем элементы
          } else {
            item.classList.remove('is-none') //иначе все видимые
          }
        });
        flag = !flag;

        if (!firstCheck) {
          defCheck.classList.remove('is-none');
          firstCheck = true;
        }
      })
    }
  }

  mediaQuery480.addListener(handleTabletChange480);
  handleTabletChange480(mediaQuery480);

  const swiperEvent = new Swiper('.section-event__wrapper', {
    a11y: {
      prevSlideMessage: 'Предыдущий',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Это первый слайд',
      lastSlideMessage: 'Это последний слайд'
    },
    slidesPerView: 3,
    spaceBetween: 50,
    scrollbar: {
      hide: true,
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 10,
        clickable: true,
        pagination: {
          el: '.swiper-pagination-bullets',
          type: 'bullets',
        },
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 34,
        navigation: {
          nextEl: '.swiper-event-button-next',
          prevEl: '.swiper-event-button-prev',
        }
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 27,
        navigation: {
          nextEl: '.swiper-event-button-next',
          prevEl: '.swiper-event-button-prev',
        }
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 50,

        navigation: {
          nextEl: '.swiper-event-button-next',
          prevEl: '.swiper-event-button-prev',
        }
      }
    }
  });

  let swiper2 = new Swiper('.slider-publications__swiper-container', {

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

    a11y: {
      prevSlideMessage: 'Предыдущий',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Это первый слайд',
      lastSlideMessage: 'Это последний слайд'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 2.3,
        spaceBetween: 15
      },
      481: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 34
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 49
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 48
      }
    }
  });

// медиавыражение для мобильной версии
  const mediaQueryPublications320 = window.matchMedia('(max-width: 320px)');

  function handleTabletChangePublications320(e) {

  }

  mediaQueryPublications320.addListener(handleTabletChangePublications320);
  handleTabletChangePublications320(mediaQueryPublications320);

  /*------- End Section-Publications --------*/

  /*------------ Section-Projects -----------*/
//   Slider Swiper
  var swiper3 = new Swiper('.slider-projects__swiper-container', {
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    a11y: {
      prevSlideMessage: 'Предыдущий',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Это первый слайд',
      lastSlideMessage: 'Это последний слайд'
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1
      },
      485: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 2
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
        loopFillGroupWithBlank: true,
      }
    }
  });


  tippy('#marker1', {
    theme: 'custom',
    content: 'Пример современных тенденций - современная методология разработки',
    duration: [600, 600],
    maxWidth: 270,

  });
  tippy('#marker2', {
    theme: 'custom',
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    duration: [600, 600],
    maxWidth: 270,
  });
  tippy('#marker3', {
    theme: 'custom',
    content: 'В стремлении повысить качество',
    duration: [600, 600],
    maxWidth: 270,
  });

  let selector = document.querySelector("input[type='tel']");

  let im = new Inputmask("+7(999) 999-99-99");
  im.mask(selector);

  let validator = new JustValidate('.form__wrap', {
    colorWrong: '#7943A4',
    rules: {
      name: {
        required: true
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      }
    },
    messages: {
      name: 'Как вас зовут?',
      tel: 'Укажите ваш телефон'
    }
  });

  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src;
    });
  } else {
    // Dynamically import the LazySizes library
    const script = document.createElement('script');
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';
    document.body.appendChild(script);
  }

  setTimeout(function () {
    var elem = document.createElement('script');
    elem.type = 'text/javascript';
    elem.src = '//api-maps.yandex.ru/2.1/?load=package.standard&lang=ru-RU&onload=getYaMap';
    document.getElementsByTagName('body')[0].appendChild(elem);
  }, 2000);


  const cardGallery = document.querySelectorAll('.slider-gallery__item');

  for (let card of cardGallery) {
    card.addEventListener('click', function () {
      document.body.style.overflowY = 'hidden';
      const popup = document.querySelector('.popup');
      popup.classList.add('popup__is-active');
      let imgSrc = card.querySelector('picture source:nth-child(5)').getAttribute('srcset');
      const mediaQueryMax480img = window.matchMedia('(max-width: 480px)');

      function handleTabletChange480img(e) {
        if (e.matches) {
          imgSrc = card.querySelector('picture source:nth-child(1)').getAttribute('srcset');
        }
      }

      mediaQueryMax480img.addListener(handleTabletChange480img);
      handleTabletChange480img(mediaQueryMax480img);
      const newImg = document.createElement('img');
      newImg.src = imgSrc;

      $('.popup__content img').replaceWith(newImg);
    });
  }
  document.querySelector('#popup__close').addEventListener('click', function () {
    document.body.style.overflowY = 'auto';
    document.querySelector('.popup').classList.remove('popup__is-active');
  });

  const form = document.getElementById('form');
  const btnForm = document.getElementById('btn__callback');
  btnForm.addEventListener('click', formSend);

  async function formSend(event) {
    event.preventDefault();

    let error = formValidate(form);
    let formData = new FormData(form);

    if (error === 0) {
      btnForm.classList.add('_disabled');
      btnForm.disabled = true;

      let response = await fetch('data.php', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        let result = await response.json();
        form.style.visibility = "hidden";

        const divResult = document.createElement('div');
        divResult.className = 'result-message';
        divResult.innerHTML = result.message;
        const containerForm = document.querySelector('.section-contacts__form');
        containerForm.append(divResult);
        setTimeout(function () {
          divResult.remove();
          form.style.visibility = "initial";
          form.reset();
        }, 3000);

        btnForm.classList.remove('_disabled');
        btnForm.disabled = false;
      } else {
        alert("Ошибка");
        btnForm.classList.remove('_disabled');
        btnForm.disabled = false;
      }
    } else {

      const divErrorName = document.createElement('div');
      divErrorName.className = 'js-validate-error-label error-name';
      divErrorName.innerHTML = 'Недопустимый формат';
      divErrorName.style.color = '#D11616';

      const divErrorPhone = document.createElement('div');
      divErrorPhone.className = 'js-validate-error-label error-phone';
      divErrorPhone.innerHTML = 'Недопустимый формат';
      divErrorPhone.style.color = '#D11616';

      const formGroup = document.getElementsByClassName('form__group');

      if (document.querySelectorAll('.js-validate-error-label.error-name').length < 1) {
        formGroup[0].append(divErrorName);
      }
      if (document.querySelectorAll('.js-validate-error-label.error-phone').length < 1) {
        formGroup[1].append(divErrorPhone);
      }
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('.req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('form__name')) {
        if ((input.value.length < 3) || (!input.value.match(/^[а-яёa-z-\s]+$/ig))) {
          formAddError(input);
          error++;
        }
      } else if (input.classList.contains('form__phone')) {
        let phone = input.inputmask.unmaskedvalue();
        if (phone.length < 10) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  function formAddError(input) {
    input.classList.add('_error');

  }

  function formRemoveError(input) {
    input.classList.remove('_error');
  }


  const inputsForm = form.querySelectorAll('input');
  inputsForm.forEach(input => {
    input.addEventListener('input', function () {
      if (this.value !== '') {
        this.classList.add('exist');
        const validate = this.parentElement.querySelectorAll('.js-validate-error-label');
        if (validate) {
          validate.forEach(element => {
            element.remove();
          });
        }
        if (input.classList.contains('_error')) {
          input.classList.remove('_error')
        }
      } else {
        this.classList.remove('exist');
      }
    })
  });

});

function getYaMap() {
  var myMap = new ymaps.Map("myMap", {
    center: [55.7622, 37.6461],
    zoom: 14,
    controls: []
  });
  var geolocationControl = new ymaps.control.GeolocationControl({
    options: {
      position: {
        right: 10,
        top: 355
      }
    }
  });
  myMap.controls.add(geolocationControl);
  var zoomControl = new ymaps.control.ZoomControl({
    options: {
      size: "small",
      position: {
        right: 10,
        top: 265
      }
    }
  });
  myMap.controls.add(zoomControl);
  var myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {
    balloonContentHeader: "Шоурум №4",
    balloonContentBody: "Леонтьевский переулок, дом 5, строение 1"
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/contacts/Group_68.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [0, 0]
  });

  //
  function onResizeMap() {
    if ($(window).width() < '1600') {
      myMap.setCenter([55.7622, 37.63]);
      if ($(window).width() < '1199') {
        //Set New center
        myMap.setCenter([55.7599, 37.6177]);
        myMap.controls.remove(zoomControl);
        myMap.controls.remove(geolocationControl);
        if ($(window).width() < '991') {
          myMap.setCenter([55.7600, 37.6105]);
        }
      }
    } else {
      myMap.setCenter([55.7622, 37.6461]);
    }
  }

  onResizeMap();

  window.onresize = function () {
    onResizeMap();
  };

  myMap.geoObjects.add(myPlacemark);

}


async function createContentWiki(currentBtnActive, currentContentActive) {
  let url = "https://ru.wikipedia.org/w/api.php";
  let params = {
    action: "parse",
    page: `${currentBtnActive}`,
    format: "json"
  };
  url = url + "?origin=*";
  Object.keys(params).forEach(function (key) {
    url += "&" + key + "=" + params[key];
  });

  let response = await fetch(url);
  let jsonResultText;

  if (response.ok) { // если HTTP-статус в диапазоне 200-299
    let json = await response.json();
    jsonResultText = json.parse.text['*'];
  } else {
    alert("Ошибка HTTP: " + response.status);
  }

  document.querySelectorAll('.js-wrap-content').forEach(function (AllContent) {
    AllContent.remove();
  })

  let divInfo = document.createElement('div');
  divInfo.innerHTML = jsonResultText;

  let dateBirth = divInfo.querySelector("[data-wikidata-property-id='P569']");
  if (dateBirth !== null) {
    getCleanContent(dateBirth);
  } else {
    dateBirth = "неизвестно"
  }
  if (dateBirth !== "неизвестно") {
    dateBirth = dateBirth.innerHTML;
    dateBirth = dateBirth.replace(/ок.|\[(.*)\]/g, '');
  }
  let dateDeath = divInfo.querySelector("[data-wikidata-property-id='P570']");
  if (dateDeath !== null) {
    getCleanContent(dateDeath);
  } else {
    dateDeath = "неизвестно"
  }
  if (dateDeath !== "неизвестно") {
    dateDeath = dateDeath.innerHTML;
    dateDeath = dateDeath.replace(/ок.|\[(.*)\]/g, '');
  }
  let descArtist = divInfo.querySelector(".mw-parser-output p");
  if (descArtist !== null) {
    getCleanContent(descArtist);
  } else {
    descArtist = "";
  }

  let imgArtist = divInfo.querySelector(".mw-parser-output .image img");
  if (imgArtist) {
    imgArtist.className = "painter-desc__img";
  }

  let divWrap = document.createElement('div');
  divWrap.className = "js-wrap-content";

  if (imgArtist) {
    divWrap.append(imgArtist);
  }
  let titleArtist = document.createElement('h3');
  titleArtist.className = "painter-desc__title";
  titleArtist.append(currentBtnActive);
  divWrap.append(titleArtist);
  let subtextArtist = document.createElement('p');
  subtextArtist.className = "painter-desc__subtext";
  subtextArtist.append(dateBirth + " — " + dateDeath);
  divWrap.append(subtextArtist);
  let textDescArtist = document.createElement('p');
  textDescArtist.className = "painter-desc__text";
  textDescArtist.append(descArtist);
  divWrap.append(textDescArtist);

  currentContentActive.append(divWrap);

  // return divInfo.insertAdjacentHTML('beforeend', jsonResultText);
  return;
}

function getCleanContent(element) {
  element.innerHTML = element.innerText || element.textContent;
}
