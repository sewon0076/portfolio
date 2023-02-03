<template>
    <div class="section7" id="experiences">
        <div class="sec_wrap">
            <div class="left p50all b_beige">
                <div>
                    <a href=""><img src="../../public/img/insta1.png" alt="" /></a>
                </div>
                <div>
                    <a href=""><img src="../../public/img/insta2.png" alt="" /></a>
                </div>
                <div>
                    <a href=""><img src="../../public/img/insta3.png" alt="" /></a>
                </div>
                <div>
                    <a href=""><img src="../../public/img/insta4.png" alt="" /></a>
                </div>
                <div>
                    <a href=""><img src="../../public/img/insta5.png" alt="" /></a>
                </div>
                <div>
                    <a href="https://www.instagram.com/p/CZyrFdzP-4H/"><img src="../../public/img/insta6.png" alt="" /></a>
                </div>
                <div>
                    <a href="https://www.instagram.com/p/CZs_GULPihW/"><img src="../../public/img/insta7.png" alt="" /></a>
                </div>
                <div>
                    <a href="https://www.instagram.com/p/CZkxB-7vrGA/"><img src="../../public/img/insta8.png" alt="" /></a>
                </div>
                <div>
                    <a href="https://www.instagram.com/p/CZNjJGiPudk/"><img src="../../public/img/insta9.png" alt="" /></a>
                </div>
            </div>
            <div class="right b_green p50all" v-bind:class="{ fixed: change }">
                <div class="title p50all" v-bind:class="{ fixed: change_1 }"><img src="../../public/img/hobby_title.png" alt="" /></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            change: false,
            change_1: false,
        };
    },
    mounted() {
        document.addEventListener("scroll", this.scrollChange);
        // const sec5 = document.getElementsByClassName("section5");

        //밑에 있는 함수를 불러주는 역할
        // console.log(window.scrollY);
        // console.log(window.innerHeight);
    },
    methods: {
        scrollChange: function () {
            const vh = window.innerHeight;
            const vw = window.innerWidth;
            // this.title = document.querySelectorAll(".title");
            const sec7 = document.getElementById("experiences");
            let sec7h = sec7.offsetTop;
            let num = sec7.clientHeight / 2 + 50;
            if (vw > 834) {
                if (sec7h <= window.scrollY && sec7h + num >= window.scrollY) {
                    this.change_1 = true;
                    console.log(sec7h + vh / 2);
                    console.log("scroll=" + window.scrollY);
                } else if (sec7h > window.scrollY || sec7h + num < window.scrollY) {
                    this.change_1 = false;
                }
            } else {
                if (sec7h <= window.scrollY && sec7h + num >= window.scrollY) {
                    this.change = true;
                    this.change_1 = false;
                } else if (sec7h > window.scrollY || sec7h + num < window.scrollY) {
                    this.change = false;
                    this.change_1 = false;
                }
            }
        },
    },
};
</script>
<style scoped>
.left {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
}
.left > div {
    width: calc(33.3333% - 33.33333px);
    height: calc(33.3333% - 33.33333px);
}
.left > div > a {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.left > div > a > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    height: 100%;
}
.title {
    position: absolute;
    top: 100px;
    right: 0;
    width: 100%;
}
.title.fixed {
    position: fixed;
    width: 50%;
    top: 100px;
    right: 0;
}
.title > img {
    width: 100%;
}
.right {
    position: relative;
}
.right.fixed {
    position: fixed;
    width: 50%;
    top: 0;
    right: 0;
}
@media (max-width: 1440px) {
    .left {
        gap: 25px;
    }
    .left > div {
        width: calc(50% - 12.5px);
    }
    .left > div img {
        width: 100%;
    }
    .left > div:nth-child(7),
    .left > div:nth-child(8),
    .left > div:nth-child(9) {
        display: none;
    }
}
@media (max-width: 834px) {
    .sec_wrap {
        flex-wrap: wrap-reverse;
    }
    .right {
        height: 15vh;
    }
    .right.fixed {
        position: fixed;
        width: 100%;
        top: 0;
        right: 0;
    }
    .title {
        position: absolute;
        top: 0;
        right: 0;
        width: auto;
        height: calc(100% - 100px);
    }
    .left {
        height: 85vh;
        gap: 20px;
    }
    .left > div {
        width: calc(33.3333% - 13.333333px);
        height: calc(33.3333% - 26.66666px);
    }
}
</style>
