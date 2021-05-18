$(function(){
    var headerHeight = $('header').outerHeight(); /* ヘッダーの高さ取得 */
    var start = 0;
  
    $(window).on('load scroll', function(){
        var value = $(this).scrollTop(); /* 現在の高さ */

        if(value > start && value > headerHeight /* 下方向へのスクロール */
            && value > 100){ /* 最初少し待ってから隠す */
            $('header').addClass('hide');
        }
        else{ /* 上方向へのスクロール */
            $('header').removeClass('hide');
        }
        start = value;
    });
});