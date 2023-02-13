$(window).ready(function () {
    console.log("jQuery================");
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    const sec8 = document.querySelector(".section8");
    const cW = document.getElementById("c1").clientWidth;
    let top = sec8.offsetTop;
    let sec8H = sec8.clientHeight;
    const vh_2 = vh - sec8H;
    const sec3SH = top - vh_2;
    //animation으로 각자 위치 잡아서 랜덤시키기!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    $(window).on("scroll", function () {
        var scrT = $(window).scrollTop();
        // console.log(scrT); //스크롤 값 확인용
        if (scrT >= top && vw <= 834) {
            // 스크롤바가 아래 쪽에 위치할 때
            $(".point_cir>.circle").each(function () {
                $(this).delay(parseInt(Math.random() * (3 - 1) + 1) * 800);
                $(this).animate({ marginTop: vh - cW * 1.8 });
            });
            $(".top_cir>.circle").each(function () {
                $(this).delay(parseInt(Math.random() * (4 - 1) + 1) * 240);
                $(this).animate({ marginTop: vh - cW * 0.95 });
            });
            $(".bottom_cir>.circle").each(function () {
                $(this).delay(parseInt(Math.random() * (6 - 1) + 1) * 40);
                $(this).animate({ marginTop: vh });
            });
        } else if (scrT >= top - vh_2 - 2 && vw > 834) {
            $(".point_cir>.circle").each(function () {
                $(this).delay(parseInt(Math.random() * 3) * 600);
                $(this).animate({ marginTop: vh / 2 - cW * 1.78 });
            });
            $(".top_cir > .circle").each(function () {
                $(this).delay(parseInt(Math.random() * 6) * 100);
                $(this).animate({ marginTop: vh / 2 - cW * 0.92 });
            });
            $(".bottom_cir > .circle").each(function () {
                $(this).delay(parseInt(Math.random() * 6) * 30);
                $(this).animate({ marginTop: vh / 2 });
            });
        } else if (scrT < top) {
            return;
        } else {
            return;
        }
    });
});
