$(function() {
    var flag = true;
    checkToolTop();
    $(window).scroll(function() {
        checkToolTop();
        if(flag){
            $(".floor .w").each(function(i, ele) {
                if($(document).scrollTop() >= $(ele).offset().top) {
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
                }
            })
        }
    });

    $(".fixedtool ul").on("click", "li", function() {
        flag = false;
        var floorTop = $(".floor .w").eq($(this).index()).offset().top;

        $(this).addClass("current").siblings("li").removeClass("current");

        $("body, html").stop().animate({
            scrollTop: floorTop
        }, function() {
            flag = true;
        });

    });

    function checkToolTop() {
        var toolTop = $(".recommend").offset().top;
        if($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn()
        }else{
            $(".fixedtool").fadeOut()
        }
    }
});