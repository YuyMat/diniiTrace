$(document).ready(function () {
    $('.hero-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: false,
        arrows: false,
    });
});

$(function() {
    $('.company-slider1').slick({
      autoplay: true,//自動でスライドさせる
      autoplaySpeed: 0,//次の画像に切り替えるまでの時間 今回の場合は0
      speed: 8000,//画像が切り替わるまでの時間 今回の場合は難病で1枚分動くか
      cssEase: 'linear',//動きの種類は等速に
      arrows:false,//左右に出る矢印を非表示
      swipe: false,//スワイプ禁止
      pauseOnFocus: false,//フォーカスが合っても止めない
      pauseOnHover: false,//hoverしても止めない
      variableWidth: true,//スライドの要素の幅をcssで設定できるようにする 
    });
});

$(function() {
    $('.company-slider2').slick({
      autoplay: true,//自動でスライドさせる
      autoplaySpeed: 0,//次の画像に切り替えるまでの時間 今回の場合は0
      speed: 8000,//画像が切り替わるまでの時間 今回の場合は難病で1枚分動くか
      cssEase: 'linear',//動きの種類は等速に
      arrows:false,//左右に出る矢印を非表示
      swipe: false,//スワイプ禁止
      pauseOnFocus: false,//フォーカスが合っても止めない
      pauseOnHover: false,//hoverしても止めない
      variableWidth: true,//スライドの要素の幅をcssで設定できるようにする 
      rtl: true,
    });
});

$(document).ready(function () {
    $('.interview__slider').slick({
        infinite: false,
        variableWidth: true,
        infinite: true,
        centerMode: true,
        dots: true,
    });
});