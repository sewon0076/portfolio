$(document).ready(function () {
    $(".c_circle").each(function (i) {
        $(this)
            .delay(i * 500)
            .css({ "transform": "translateY(350%)"}, 5000);

    });
    //각각 0.5초 뒤에 실행되는 것
    //i*500은 순차적으로 딜레이 되게 하기위해서
});