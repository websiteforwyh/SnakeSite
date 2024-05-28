var s = window.screen; // 获取屏幕的属性

// 私人平板电脑屏幕大小（width=1344，height=840，360浏览器）
if (s.height <= 840 && s.width <= 1344) {
    $('.featured-dish h2').css('margin', '28px 0px 0 30px');
    $('.one').css('top', '400px');
    $('.one').css('left', '1%');
    $(".content").css('height', '300px');

    $("#index_frame").css('height', '657px');
    $("#introduction_frame").css('height', '657px');
    $("#snakelist_frame").css('height', '657px');
} else {
    $('.featured-dish h2').css('margin', '51px 0px 0 901px');
    $('.one').css('top', '570px');
    $('.one').css('left', '18%');

    $('#show').css('height', '400px');
    $('#slider img').css('height', '400px');
    $('#slider').css('height', '400px');
    $(".content").css('height', '400px');
    $(".content").css('position', 'relative');
    $(".content").css('top', '20px');


}