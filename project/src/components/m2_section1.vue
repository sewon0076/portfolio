<template>
    <div class="section1">
        <div class="sec_wrap">
            <div class="b_black">
                <div class="top"><img src="../../public/img/would_top.png" alt="" /></div>
                <h2 class="white">WOULD YOU <br />LIKE?</h2>
                <div class="bot"><img src="../../public/img/would_bot.png" alt="" /></div>
            </div>
            <div class="right p50all">
                <p class="pink_w">RENEWAL</p>
                <div><img src="../../public/img/wouldyou_scroll.png" alt="" /></div>
                <p class="pink_w">RESULT</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.b_black {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.b_black > div {
    position: absolute;
    width: 60%;
}
.b_black > div > img {
    width: 100%;
}
.b_black > .top {
    top: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
.b_black > .bot {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(50%);
}
h2 {
    text-align: center;
}
h2,
p {
    font-weight: 900;
}
</style>
