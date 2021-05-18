window.onload = function() { /* ページを開いた時もフェードインさせる */
    scroll_effect();
  
    $(window).scroll(function(){
        scroll_effect();
    });
  
    function scroll_effect(){
        $('.effect-fade').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){ 
                $(this).addClass('effect-scroll'); /* opacity:1のクラス追加 */
            }
            else{
                $(this).removeClass('effect-scroll'); /* opacity:1のクラス削除 */
            }
        });
    }
};