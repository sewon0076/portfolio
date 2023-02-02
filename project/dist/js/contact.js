$(window).ready(function () {
    let vh = window.innerHeight;
    let vw = window.innerWidth;
    let sec8 = $(".section8");
    let offTop = sec8[0].offsetTop;
    let circle = $(".c_circle");
    let circleW = circle[0].clientWidth;
    let sec8H = $(".section8").height() + 20;
    //animation으로 각자 위치 잡아서 랜덤시키기!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    $(window).on("scroll", function () {
        var scrT = $(window).scrollTop();
        // console.log(scrT); //스크롤 값 확인용
        if (scrT >= offTop) {
            // 스크롤바가 아래 쪽에 위치할 때
            $(".c_circle").each(function () {
                $(this).delay(parseInt(Math.random() * 4) * 100);
                $(this).animate({ marginTop: sec8H }, 850);
            });
            $(".c_circle2").each(function () {
                $(this).delay(parseInt(Math.random() * 3) * 90);
                $(this).animate({ marginTop: sec8H + 40 }, 700);
            });
            $(".c_circle1").each(function () {
                $(this).delay(parseInt(Math.random() * 6) * 80);
                $(this).animate({ marginTop: sec8H }, 400);
                // $(".c_circle1"[1]).animate({ marginTop: margin_top + 30 }, 400);
            });
        } else if (scrT + sec8H + 1 >= offTop && vw > 834) {
            $(".c_circle").each(function () {
                $(this).delay(parseInt(Math.random() * 4) * 100);
                $(this).animate({ marginTop: sec8H }, 850);
                $("#c1").animate;
            });
            $(".c_circle2").each(function () {
                $(this).delay(parseInt(Math.random() * 3) * 90);
                $(this).animate({ marginTop: sec8H + 40 }, 700);
            });
            $(".c_circle1").each(function () {
                $(this).delay(parseInt(Math.random() * 6) * 80);
                $(this).animate({ marginTop: sec8H }, 400);
                // $(".c_circle1"[1]).animate({ marginTop: margin_top + 30 }, 400);
            });
        } else if (scrT < offTop) {
            return;
        } else {
            return;
        }
    });
});
