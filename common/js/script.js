$(function () {
  //ハンバーガーメニュー
  //--------------------------------------------
  $('.hamburger').on('click', function () { //.hamburgerをクリックすると
    $('.hamburger').toggleClass('close'); //.hamburgerにcloseクラスを付与(ボタンのアニメーション)
    $('.header-nav').toggleClass('fade'); //.header-navにfadeクラスを付与
    $('body').toggleClass('noscroll'); //bodyにnoscrollクラスを付与(スクロールを固定)
  });


  //swiper
  //--------------------------------------------
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});