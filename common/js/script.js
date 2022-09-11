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


  //ページトップボタンがふわっと出現
  //--------------------------------------------
  var $pageTop = $('.page-top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $pageTop.fadeIn();
    } else {
      $pageTop.fadeOut();
    }
  });


  //ページトップへ戻る
  //--------------------------------------------
  $('.page-top').click(function () {
    $('body,html').animate({
      scrollTop: 0 //ページトップまでスクロール
    }, 500); //ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false; //リンク自体の無効化
  });


  //スクロールするとヘッダーの背景色が追加
  //--------------------------------------------
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.header').addClass('header--active');
    } else {
      $('.header').removeClass('header--active');
    }
  });


});