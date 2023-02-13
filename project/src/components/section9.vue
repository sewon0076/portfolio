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
                <div class="point_cir">
                    <div class="circle" id="c1">
                        <img src="../../public/img/Asset1.png" alt="" />
                    </div>
                    <div class="circle" id="c2">
                        <img src="../../public/img/Asset2.png" alt="" />
                    </div>
                    <div class="circle" id="c13">
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
                    <div class="circle" id="c5">
                        <img src="../../public/img/Asset16.png" alt="" />
                    </div>
                    <div class="circle" id="c6">
                        <img src="../../public/img/Asset3.png" alt="" />
                    </div>
                </div>
                <div class="bottom_cir" v-bind:class="({ size: mobile }, { action: fall })">
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
                    <div class="circle" id="c11">
                        <img src="../../public/img/Asset5.png" alt="" />
                    </div>
                    <div class="circle" id="c12">
                        <img src="../../public/img/Asset1.png" alt="" />
                    </div>
                </div>
                <!-- <div class="circle_wrap1">
                    <div class="c_circle1" id="c2" v-bind:class="{ action: fall }"><img src="../../public/img/Asset8.png" alt="" /></div>
                    <div class="c_circle1" id="c3" v-bind:class="{ action: fall }"><img src="../../public/img/Asset5.png" alt="" /></div>
                    <div class="c_circle1" id="c4" v-bind:class="({ action: fall }, { none: mobile })">
                        <img src="../../public/img/Asset22.png" alt="" />
                    </div>

                    <div class="c_circle1" id="c6" v-bind:class="{ action: fall }"><img src="../../public/img/Asset17.png" alt="" /></div>
                    <div class="c_circle1" id="c7" v-bind:class="{ action: fall }"><img src="../../public/img/Asset1.png" alt="" /></div>

                    <div class="c_circle1" id="c9" v-bind:class="{ action: fall }"><img src="../../public/img/Asset9.png" alt="" /></div>
                </div>
                <div class="circle_wrap" v-bind:class="{ action: fall }">
                    <div class="c_circle" id="c1" v-bind:class="({ action: fall }, { none: mobile })">
                        <img src="../../public/img/Asset21.png" alt="" />
                    </div>

                    <div class="c_circle2" id="c5" v-bind:class="{ action: fall }"><img src="../../public/img/Asset18.png" alt="" /></div>

                    <div class="c_circle2" id="c8" v-bind:class="{ action: fall }"><img src="../../public/img/Asset10.png" alt="" /></div>

                    <div class="c_circle" id="c10" v-bind:class="{ action: fall }"><img src="../../public/img/Asset11.png" alt="" /></div>
                </div> -->
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
        let w = vw / 7;
        let w_2 = vw / 2 / 7;
        const point_cir = document.querySelector(".point_cir");
        const circle = document.querySelectorAll(".section8 .circle");
        if (vw < 834) {
            this.mobile = !this.mobile;
            // point_cir.style.marginLeft = w + "px";
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
    transform: translate3d(0, -100%, 0);
}
.point_cir > .circle#c2 {
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
}
.circle > img {
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
}
</style>
