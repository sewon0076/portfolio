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
            <div class="right b_yellow">
                <h2 class="p50all">CONTACT</h2>
                <div class="info p50all" v-if="mobile">
                    <p>SEWON KIM</p>
                    <p>TEL : 010 - 5754 - 8799</p>
                    <p>E-MAIL : sewon0076@naver.com</p>
                    <p>INSTAGRAM : @31_luminous</p>
                </div>
                <div class="circle_wrap1">
                    <div class="c_circle1" id="c2"><img src="../../public/img/Asset8.png" alt="" /></div>
                    <div class="c_circle1" id="c3"><img src="../../public/img/Asset5.png" alt="" /></div>
                    <div class="c_circle1" id="c4"><img src="../../public/img/Asset22.png" alt="" /></div>

                    <div class="c_circle1" id="c6"><img src="../../public/img/Asset17.png" alt="" /></div>
                    <div class="c_circle1" id="c7"><img src="../../public/img/Asset1.png" alt="" /></div>

                    <div class="c_circle1" id="c9"><img src="../../public/img/Asset9.png" alt="" /></div>
                </div>
                <div class="circle_wrap">
                    <div class="c_circle" id="c1"><img src="../../public/img/Asset21.png" alt="" /></div>

                    <div class="c_circle2" id="c5"><img src="../../public/img/Asset18.png" alt="" /></div>

                    <div class="c_circle2" id="c8"><img src="../../public/img/Asset10.png" alt="" /></div>

                    <div class="c_circle" id="c10"><img src="../../public/img/Asset11.png" alt="" /></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            mobile: false,
        };
    },
    mounted() {
        let vw = window.innerWidth;
        if (vw < 834) {
            this.mobile = !this.mobile;
        } else {
            this.mobile = false;
        }
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
.right {
    position: relative;
    overflow: hidden;
}
.right > div {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
}
.right > .circle_wrap {
    top: -260px;
}
.right > .circle_wrap1 {
    justify-content: space-evenly;
    top: -140px;
}
.c_circle1:nth-child(2n) {
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
/* .c_circle {
    transform: translateY(-240px);
}
.c_circle1 {
    transform: translateY(-120px);
}
.c_circle2 {
    transform: translateY(-360px);
} */
.c_circle1 > img {
    width: 100%;
}
.c_circle > img {
    width: 100%;
}
.c_circle2 > img {
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
