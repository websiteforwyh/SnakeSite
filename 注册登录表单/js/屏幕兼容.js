var s = window.screen; // 获取屏幕的属性

// 私人平板电脑屏幕大小（width=1344，height=840，360浏览器）
if (s.height <= 840 && s.width <= 1344) {
    $('.container').css('top', '100px');
    $('.container').css('left', '30px');
} else {
    $('.container').css('top', '100px');
    $('.container').css('left', '-15px');
}