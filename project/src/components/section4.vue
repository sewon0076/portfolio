<template>
    <div class="section4">
        <div class="sec_wrap b_black p50all">
            <h2 class="beige">ABILITIES</h2>
            <div class="circle_wrap">
                <div class="circle">
                    <div class="b_beige">
                        <div class="wave1 b_red"></div>
                        <div class="img_wrap">
                            <img src="../../public/img/html.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="circle">
                    <div class="b_beige">
                        <div class="wave2 b_blue"></div>
                        <div class="img_wrap">
                            <img src="../../public/img/css.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="circle">
                    <div class="b_beige">
                        <div class="wave1 b_yellow"></div>
                        <div class="img_wrap">
                            <img src="../../public/img/js.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="circle">
                    <div class="b_beige">
                        <div class="wave1 b_green"></div>
                        <div class="img_wrap">
                            <img src="../../public/img/node.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="circle">
                    <div class="b_beige">
                        <div class="wave2 b_red"></div>
                        <div class="img_wrap">
                            <img src="../../public/img/vue.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="circle">
                    <div class="b_beige">
                        <div class="wave1 b_blue"></div>
                        <div class="img_wrap">
                            <img src="../../public/img/mysql.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="circle">
                    <div class="b_beige">
                        <div class="wave2 b_yellow"></div>
                        <div class="img_wrap">
                            <img src="../../public/img/ai.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="circle">
                    <div class="b_beige">
                        <div class="wave1 b_green"></div>
                        <div class="img_wrap">
                            <img src="../../public/img/ps.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="circle">
                    <div class="b_beige">
                        <div class="wave2 b_red"></div>
                        <div class="img_wrap">
                            <img src="../../public/img/english.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script></script>
<style scoped>
.sec_wrap {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    height: 50vh;
    overflow: hidden;
}
.circle_wrap {
    width: 100%;
    padding-top: 50px;
    display: flex;
    align-items: center;
    gap: 25px;
}
.circle {
    width: calc(100% / 9 - 22.2222px);
    height: fit-content;
}
.circle > div {
    position: relative;
    width: 100%;
    padding-top: 100%;
    border-radius: 50%;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
}
.wave1 {
    position: absolute;
    width: 160%;
    border-radius: 45%;
    transition-duration: 0.75s;
    transition-property: margin-bottom;
    transition-timing-function: ease;
    left: -20%;
    animation: wave 10s infinite linear, rotate 3s infinite ease-out alternate;
}
.circle .img_wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    transform: translate3d(-50%, -50%, 0);
}
.circle .img_wrap > img {
    width: 100%;
}
@keyframes wave {
    0% {
        height: 120%;
        bottom: -220%;
    }
    70% {
        height: 160%;
        bottom: -160%;
    }
    90% {
        height: 130%;
        bottom: -210%;
    }
}
@keyframes rotate {
    from {
        transform: translateY(-50%) rotate(0deg);
        transition: 2s;
    }
    to {
        transform: translateY(-50%) rotate(360deg);
        transition: 2s;
    }
}
.wave2 {
    position: absolute;
    width: 200%;
    height: 150%;
    border-radius: 45%;
    margin-left: -50%;
    animation: wave2 10s infinite linear alternate, rotate2 3s infinite ease-out alternate;
}
@keyframes wave2 {
    0% {
        height: 150%;
        bottom: -180%;
    }
    70% {
        height: 200%;
        bottom: -98%;
    }
    90% {
        height: 160%;
        bottom: -160%;
    }
}
@keyframes rotate2 {
    from {
        transform: rotate(0deg);
        transition: 2s;
    }
    to {
        transform: rotate(360deg);
        transition: 2s;
    }
}
@media (max-width: 834px) {
    .sec_wrap {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        height: 100vh;
        align-items: center;
    }
    .circle_wrap {
        width: 100%;
        height: fit-content;
        padding-top: 100px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 30px;
    }
    .circle {
        width: calc(33.3333% - 20px);
        height: fit-content;
    }
    h2 {
        width: 100%;
        text-align: left;
    }
}
</style>
