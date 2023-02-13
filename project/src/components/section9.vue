<template>
    <div class="section8" id="contact">
        <div class="sec_wrap">
            <div class="left p50all b_black">
                <div>
                    <p class="beige">SEWON KIM</p>
                    <p class="beige">TEL : 010 - 5754 - 8799</p>
                    <p class="beige">E-MAIL : sewon0076@naver.com</p>
                    <p class="beige">INSTAGRAM : @31_luminous</p>
                </div>
            </div>
            <div class="right b_yellow" v-bind:class="{ bg: mobile }">
                <h2 class="p50all">CONTACT</h2>
                <div class="info p50all" v-if="mobile">
                    <p>SEWON KIM</p>
                    <p>TEL : 010 - 5754 - 8799</p>
                    <p>E-MAIL : sewon0076@naver.com</p>
                    <p>INSTAGRAM : @31_luminous</p>
                </div>
                <div class="arrow">
                    <img src="../../public/img/arrow_sec1.png" alt="" v-show="!mobile" />
                    <img src="../../public/img/arrow_sec1_mobile.png" alt="" v-show="mobile" />
                </div>
                <div class="point_cir">
                    <div class="circle" id="c1">
                        <img src="../../public/img/Asset1.png" alt="" />
                    </div>
                    <div class="circle" id="c2">
                        <img src="../../public/img/Asset2.png" alt="" />
                    </div>
                    <div class="circle" id="c13" v-on:click="goTop" data-target="top">
                        <img src="../../public/img/Asset20.png" alt="" />
                    </div>
                </div>
                <div class="top_cir">
                    <div class="circle" id="c3">
                        <img src="../../public/img/Asset19.png" alt="" />
                    </div>
                    <div class="circle" id="c4">
                        <img src="../../public/img/Asset8.png" alt="" />
                    </div>
                    <div class="circle" id="c5" v-bind:class="{ size: mobile }">
                        <img src="../../public/img/Asset16.png" alt="" />
                    </div>
                    <div class="circle" id="c6">
                        <img src="../../public/img/Asset3.png" alt="" />
                    </div>
                </div>
                <div class="bottom_cir">
                    <div class="circle" id="c7">
                        <img src="../../public/img/Asset18.png" alt="" />
                    </div>
                    <div class="circle" id="c8">
                        <img src="../../public/img/Asset15.png" alt="" />
                    </div>
                    <div class="circle" id="c9">
                        <img src="../../public/img/Asset9.png" alt="" />
                    </div>
                    <div class="circle" id="c10">
                        <img src="../../public/img/Asset7.png" alt="" />
                    </div>
                    <div class="circle" id="c11" v-bind:class="{ size: mobile }">
                        <img src="../../public/img/Asset5.png" alt="" />
                    </div>
                    <div class="circle" id="c12" v-bind:class="{ size: mobile }">
                        <img src="../../public/img/Asset1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import contact_js from "../../public/js/contact.js";
export default {
    contact_js,
    data() {
        return {
            mobile: false,
            fall: false,
        };
    },
    mounted() {
        // document.addEventListener("scroll", this.scrollChange);
        let vw = window.innerWidth;
        let w = vw / 4.5;
        let w_2 = vw / 2 / 7;
        const circle = document.querySelectorAll(".section8 .circle");
        if (vw < 834) {
            this.mobile = true;
            for (let i = 0; i < circle.length; i++) {
                circle[i].style.width = w + "px";
                circle[i].style.height = w + "px";
            }
        } else {
            this.mobile = false;
            // point_cir.style.marginLeft = w_2 + "px";
            for (let i = 0; i < circle.length; i++) {
                circle[i].style.width = w_2 + "px";
                circle[i].style.height = w_2 + "px";
            }
        }
    },
    methods: {
        goTop() {
            const top = document.querySelector(".section1");
            if (top) {
                top.scrollIntoView({
                    behavior: "smooth",
                });
            }
        },
    },
};
</script>
<style scoped>
.sec_wrap > div {
    height: 50vh;
    overflow: hidden;
}
.left p {
    font-weight: 800;
}
.left > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 12.5px;
}
.right.b_yellow.bg {
    background-color: #060606;
}
.right.b_yellow.bg > h2,
.right.b_yellow.bg p {
    color: #f3ede4;
}
.right {
    position: relative;
    overflow: hidden;
}
.point_cir,
.top_cir,
.bottom_cir {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
}
.point_cir {
    justify-content: space-between;
}
.top_cir {
    justify-content: space-evenly;
}
.bottom_cir {
    justify-content: space-between;
}
.circle {
    width: calc(100% / 7.5);
    height: 70px;
    border-radius: 50%;
}
.top_cir > .circle,
.bottom_cir > .circle,
.point_cir > .circle {
    z-index: 1;
    transform: translateY(-100%);
}
/*.point_cir > .circle#c2 {
    transform: translate3d(100%, -100%, 0);
}
.top_cir > .circle#c4 {
    transform: translate3d(-9%, -100%, 0);
}

.bottom_cir > .circle#c7 {
    transform: translate3d(12%, -100%, 0);
}
.bottom_cir > .circle#c11 {
    transform: translate3d(9%, -100%, 0);
} */
.circle.size {
    display: none;
}
.circle > img {
    width: 100%;
}

@keyframes arrow {
    from {
        margin-bottom: -20px;
    }
    to {
        margin-bottom: 0;
    }
}

.arrow::before {
    position: absolute;
    font-family: "Nanum Pen Script", cursive;
    font-size: 22px;
    display: block;
    content: "top";
    transform: rotate(-50deg) translate3d(-100%, -100%, 0);
}
.arrow {
    position: absolute;
    width: 60px;
    right: 0;
    bottom: calc(50vw / 7 * 2.8);
    transform: rotate(50deg);
    animation-name: arrow;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}
.arrow > img {
    width: 100%;
}
@media (max-width: 834px) {
    .left {
        display: none;
    }
    .sec_wrap > .right {
        height: 100vh;
    }
    .right > .info {
        position: relative;
        display: block;
    }
    .info p {
        font-weight: 900;
    }
    .top_cir > .circle,
    .bottom_cir > .circle,
    .point_cir > .circle {
        z-index: 1;
        transform: translateY(-100%);
    }
    .point_cir > .circle#c2 {
        transform: translate3d(50%, -100%, 0);
    }
    .arrow {
        right: 20px;
        bottom: calc(100vw / 5 * 3.5);
        width: 30px;
        transform: rotate(-20deg);
    }
    .arrow::before {
        color: #f3ede4;
    }
    .arrow::before {
        position: absolute;
        font-family: "Nanum Pen Script", cursive;
        font-size: 22px;
        display: block;
        content: "top";
        transform: rotate(0deg) translate3d(50%, -150%, 0);
    }
}
</style>
