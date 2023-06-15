 $(function(){



    $('a[href^="#"]').click(function() {
  
       // 初期設定：移動時間(ms)と頭出し位置
       var speed = 500;
       var offset = 250;
  
       // アンカーを取得
       var anchor = $(this).attr("href");
  
       // ターゲットの位置を取得
       var target = $(anchor == "#" || anchor == "" ? 'html' : anchor);
       var position = target.offset().top + offset;
  
       // スクロール（アニメーション）
       $('body,html').animate({scrollTop:position}, speed, 'swing');
  
       return false;
  
    });



      // 戻るボタン
    $(window).on("scroll", function() {
      if ($(this).scrollTop() > 100) {
          $(".float-button__wrap").fadeIn(300);
          } else {
          $(".float-button__wrap").fadeOut(300);
      }



      // フェードイン
      $(window).scroll(function () {
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();
    
        $('.element').each(function () {
          const targetPosition = $(this).offset().top;
          if (scroll > targetPosition - windowHeight + 100) {
            $(this).addClass("is-fadein");
          }
        });
      });
      

      
  });
  
  });