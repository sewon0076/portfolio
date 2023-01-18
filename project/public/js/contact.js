$(window).ready(function () {
    let vh = window.innerHeight;
    let vw = window.innerWidth;
    let vh_2 = vh / 2;
    let margin_top = vh_2 + 20;
    let sec8 = $(".section8");
    let offTop = sec8[0].offsetTop;
    let scrollTop = window.scrollY;
    var scrollH = $(".section8").height();
    var contentH = $("#app").height(); //문서 전체 내용을 갖는 div의 높
    $(window).on("scroll", function () {
        var scrT = $(window).scrollTop();
        console.log(scrT); //스크롤 값 확인용
        if (scrT + scrollH + 1 >= offTop) {
            // console.log(scrollTop + scrollH);
            // console.log(offTop);
            console.log("hi");
            // 스크롤바가 아래 쪽에 위치할 때
            $(".c_circle").each(function () {
                $(this).delay(parseInt(Math.random() * 4) * 100);
                $(this).animate({ marginTop: margin_top }, 850);
            });
            $(".c_circle2").each(function () {
                $(this).delay(parseInt(Math.random() * 3) * 90);
                $(this).animate({ marginTop: margin_top + 40 }, 700);
            });
            $(".c_circle1").each(function () {
                $(this).delay(parseInt(Math.random() * 6) * 80);
                $(this).animate({ marginTop: margin_top }, 400);
                // $(".c_circle1"[1]).animate({ marginTop: margin_top + 30 }, 400);
            });
        } else if (scrT < offTop) {
            return;
        } else {
            return;
        }
    });
});
