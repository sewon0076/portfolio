<template>
    <div class="section1">
        <div class="sec_wrap">
            <div class="b_oatmeal">
                <div class="top"></div>
                <div class="bot b_olive"></div>
                <div class="bfoc_wrap">
                    <h1>B</h1>
                    <h1>F</h1>
                    <div><img src="../../public/img/bfoc_sec1.png" alt="" /></div>
                    <h1>C</h1>
                </div>
            </div>
            <div class="right p50all">
                <p class="mustard">RENEWAL</p>
                <div><img src="../../public/img/bfoc_scroll.png" alt="" /></div>
                <p class="mustard">RESULT</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.b_oatmeal {
    position: relative;
    overflow: hidden;
}
.b_oatmeal > div {
    position: absolute;
    width: 100%;
    height: 100vh;
    /* padding-top: 100%; */
    border-radius: 100%;
}
.top {
    top: 0;
    left: 0;
    transform: translateY(-50%);
    background-color: #f9b6b0;
}
.bot {
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
.bfoc_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding-bottom: 50%;
    box-sizing: border-box;
}
h1 {
    font-size: 5em;
}
.bfoc_wrap > div {
    width: 10%;
}
.bfoc_wrap > div > img {
    width: 100%;
}
</style>
