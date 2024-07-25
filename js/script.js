jQuery(function($) {

    var loggedIn = false,
        playable = true,
        alreadyPlayed = false;

    $(".btn-get-confirm-yes").on('click', function(event) {
        if (alreadyPlayed) {
            $(".popup-alert").fadeIn();
            $('.alert-text').html('您今日已领取过奖励了<br>每天仅可获得1个奖励！');
        } else {
          if (loggedIn == true && playable == true) {
            $(".popup-get-confirm").fadeOut();
            $('.popup-loading').show();
            anim = setTimeout(function(){
                $('.popup-loading').hide();
                $('.popup-gift-result').fadeIn();
                alreadyPlayed = true;
            },2000);
            loggedIn = true;  
          } else {
            $(".popup-alert").fadeIn();
            $('.alert-text').text('請技術加上公版登入彈窗');
            loggedIn = true;
          }
        }
    });

    $(".btn-normal").on('click', function(event) {

      if (alreadyPlayed) {
          $(".popup-alert").fadeIn();
          $('.alert-text').html('您今日已领取过奖励了<br>每天仅可获得1个奖励！');
      } else {
          if (loggedIn == true && playable == true) {
            $('.popup-get-confirm').fadeIn();
          } else {
              $(".popup-alert").fadeIn();
              $('.popup-alert .alert-text').text('請技術加上公版登入彈窗');
              loggedIn = true;
          }
      }

    });

    /*-------- 其他功能 --------*/
    $(".pop-close, .btn-know, .btn-get-confirm-no").on('click', function(event) {
        $(".popup").fadeOut();
    });

    $(".login-btn").on('click', function(event) {
        $(".login>form").hide();
        $(".logout").show();
        loggedIn = true;
        playable = true;
    });
    $(".logout-btn").on('click', function(event) {
        $(".login>form").show();
        $(".logout").hide();
        loggedIn = false;
        playable = false;
    });
    $(".btn-rule").on('click', function(event) {
        $(".popup-rule").fadeIn();
    });

});


$(window).on('load', function (e) {
    // delete preloader
    $(".preloader").fadeOut(300);
});