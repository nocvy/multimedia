$(function(){
    var appear = false; /* 現在ボタンが出現しているかの判定 */

    /* スクロール位置によってボタンが現れる、隠れる動作 */
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){ /* 現在位置が100pxより下なら現れる */
            if(appear == false){
            appear = true;
            $('#page_top').stop().animate({'bottom': '50px'}, 500);
            }
        }
        else{ /* 上なら隠れる */
            if(appear){
            appear = false;
            $('#page_top').stop().animate({'bottom': '-50px'}, 500);
            }
        }
    });
    
    /* ボタンを押した時に一番上に戻る動作 */
    /* ヘッダーの「Nono Ohara's Page」を押した時も同様にする */
    $('#page_top, #page_top_img').click(function(){
        $('body, html').animate({scrollTop: 0}, 500);
        return false;
    });
});
  