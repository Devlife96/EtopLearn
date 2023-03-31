const swiper1 = new Swiper('.swiper1', {
      slidesPerView: 4,
     spaceBetween: 20,

  // If we need pagination
  pagination: {
   el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992:{
        slidesPerView: 2,
        spaceBetween: 20
    },
    1200:{
        slidesPerView: 4,
        spaceBetween: 20
    }
  }

 

});

const swiper2 = new Swiper('.swiper2',{
     slidesPerView: 2,
     spaceBetween: 20,
     pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    992:{
        slidesPerView: 1,
        spaceBetween: 20
    },
    1200:{
        slidesPerView: 2,
        spaceBetween: 20
    }
  }
});
const swiper3 = new Swiper('.swiper3',{
    slidesPerView: 4,
    spaceBetween: 16,
     navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//active the menu
const menu = document.querySelector('.menu');
const nav = document.querySelector('.navbar-nav')
menu.addEventListener('click',function(){
    nav.classList.toggle('active')
})