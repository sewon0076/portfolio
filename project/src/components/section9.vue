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
                <div class="top_cir" v-bind:class="{ size: mobile }">
                    <div class="circle" id="c1"><img src="" alt="" /></div>
                    <div class="circle" id="c2"><img src="" alt="" /></div>
                    <div class="circle" id="c3"><img src="" alt="" /></div>
                    <div class="circle" id="c4"><img src="" alt="" /></div>
                    <div class="circle" id="c5"><img src="" alt="" /></div>
                    <div class="circle" id="c6"><img src="" alt="" /></div>
                </div>
                <div class="bottom_cir" v-bind:class="{ size: mobile }">
                    <div class="circle" id="c7"><img src="" alt="" /></div>
                    <div class="circle" id="c8"><img src="" alt="" /></div>
                    <div class="circle" id="c9"><img src="" alt="" /></div>
                    <div class="circle" id="c10"><img src="" alt="" /></div>
                    <div class="circle" id="c11"><img src="" alt="" /></div>
                    <div class="circle" id="c12"><img src="" alt="" /></div>
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
export default {
    data() {
        return {
            mobile: false,
            fall: false,
        };
    },
    mounted() {
        document.addEventListener("scroll", this.scrollChange);
        let vw = window.innerWidth;
        if (vw < 834) {
            this.mobile = !this.mobile;
        } else {
            this.mobile = false;
        }
    },
    methods: {
        scrollChange: function () {
            const vh = window.innerHeight;
            const vw = window.innerWidth;
            const sec8 = document.querySelector(".section8");
            let top = sec8.offsetTop;
            let sec8H = sec8.clientHeight;
            if (window.scrollY >= top) {
                this.fall = true;
            } else if (window.scrollY < top) {
                this.fall = false;
            }
        },
    },
};
</script>
<style scoped>
.sec_wrap > div {
    height: 50vh;
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
    background-color: #202124;
}
.right.b_yellow.bg > h2,
.right.b_yellow.bg p {
    color: #f3ede4;
}
.right {
    position: relative;
    overflow: hidden;
}
.top_cir,
.bottom_cir {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
}
.circle {
    position: relative;
    flex: 1;
    padding-top: 100%;
    background-color: #f3ede4;
    border-radius: 50%;
}
.circle > img {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
}
/* .c_circle1:nth-child(2n) {
    margin-left: -50px;
}
#c2 {
    transform: translate3d(-20%, 0, 0);
}
#c9 {
    transform: translate3d(30%, 0, 0);
}
#c5 {
    transform: translate3d(-10%, 0, 0);
}

#c8 {
    transform: translate3d(10%, 0, 0);
}

.c_circle,
.c_circle1,
.c_circle2 {
    width: 120px;
}
.c_circle1 > img {
    width: 100%;
}
.c_circle > img {
    width: 100%;
}
.c_circle2 > img {
    width: 100%;
}
.c_circle.none {
    display: none;
}
.c_circle1.none {
    display: none;
} */
@keyframes fall_1 {
    from {
        transform: translateY(-200%);
    }
    to {
        transform: translateY(0);
    }
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
    .c_circle,
    .c_circle1,
    .c_circle2 {
        width: 90px;
    }
}
</style>
