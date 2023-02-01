<template>
    <div class="section2" id="intro">
        <div class="sec_wrap">
            <div class="b_yellow p50all">
                <div class="title_wrap">
                    <div class="top">
                        <div class="keep">
                            <h1>K</h1>
                            <h1>e</h1>
                            <h1>e</h1>
                            <h1>p</h1>
                        </div>
                        <span class="line">
                            <img src="../../public/img/line.png" alt="" />
                            <div class="b_yellow"></div>
                        </span>
                        <div class="going">
                            <h1>G</h1>
                            <div class="star"><img src="../../public/img/poly9_red.png" alt="" /></div>
                            <h1>i</h1>
                            <h1>n</h1>
                            <h1>g</h1>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="never">
                            <h1>N</h1>
                            <h1>e</h1>
                            <h1>v</h1>
                            <h1>e</h1>
                            <h1>r,</h1>
                            <div class="line_cir"><img src="../../public/img/line_cir.png" alt="" /></div>
                        </div>
                        <div class="giveup">
                            <h1>G</h1>
                            <h1>i</h1>
                            <h1>v</h1>
                            <h1>e</h1>
                            <h1></h1>
                            <h1>U</h1>
                            <h1>p</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="b_beige p50all">
                <div class="portrait"><img src="../../public/img/portrait.png" alt="" /></div>
                <div class="b_green">
                    <h3 class="beige">RESUME</h3>
                    <div class="arrow-next"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script></script>
<style scoped>
.title_wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-bottom: 20px;
}
.top > div,
.bottom > div {
    display: flex;
    align-items: baseline;
    gap: 10px;
}
.top .going {
    display: flex;
    justify-content: right;
}
.line {
    display: block;
    width: 30%;
    position: relative;
    overflow: hidden;
}
span.line .b_yellow {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    transform: translateX(100%);
    animation-name: going;
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
}
@keyframes going {
    from {
        transform: translateX(0);
        transition: 0.5s;
    }
    to {
        transform: translateX(100%);
        transition: 0.5s;
    }
}
.line > img {
    width: 100%;
}
.star {
    width: 50px;
}
.star > img {
    width: 100%;
}
.bottom {
    display: flex;
    justify-content: center;
    height: 18%;
    margin-top: 25px;
    position: relative;
    width: 100%;
    gap: 50px;
}
.never {
    width: fit-content;
    position: relative;
    /* transform: translate(50%); */
}
.never > .line_cir {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
}
.line_cir > img {
    width: 100%;
}
.giveup {
    /* position: absolute; */
    bottom: 0px;
    right: 0;
}
.b_beige {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.portrait {
    height: 85%;
}
.portrait > img {
    height: 100%;
}
.b_green {
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 40px;
}
.arrow-next {
    position: relative;
    width: 25px;
    height: 25px;
}

.arrow-next::after {
    position: absolute;
    left: 2.5px;
    top: 5px;
    content: "";
    width: 12.5px; /* 사이즈 */
    height: 12.5px; /* 사이즈 */
    border-top: 3px solid #f3ede4; /* 선 두께 */
    border-right: 3px solid #f3ede4; /* 선 두께 */
    transform: rotate(45deg); /* 각도 */
}
@media (max-width: 834px) {
    .sec_wrap > .b_yellow {
        height: 50vh;
    }
    .portrait {
        width: auto;
        height: 70%;
        margin-top: 100px;
    }
    .portrait > img {
        height: 100%;
    }
}
</style>
