$(function () {
    //swiper
  //--------------------------------------------
  const swiper = new Swiper('.swiper', {

    effect: 'fade', // フェードモードにする（デフォルトは 'slide'）
    fadeEffect: {
      crossFade: true, // クロスフェードを有効にする（フェードモードの場合 true 推奨）
    },

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