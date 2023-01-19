<template>
    <div class="section5" id="projects">
        <div class="sec_wrap">
            <div class="left b_blue">
                <div class="p50all" v-bind:class="{ fixed: change }">
                    <img src="../../public/img/project_title_w.png" alt="" />
                    <img src="../../public/img/project_title_m.png" alt="" />
                </div>
            </div>
            <div class="right p50all b_beige">
                <a href="/seomoon">
                    <div>
                        <div class="view b_beige">
                            <div class="b_blue"></div>
                            <h3>VIEW WEBSITE</h3>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div>
                        <div class="view b_beige">
                            <div class="b_blue"></div>
                            <h3>VIEW WEBSITE</h3>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div>
                        <div class="view b_beige">
                            <div class="b_blue"></div>
                            <h3>VIEW WEBSITE</h3>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            change: false,
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
            // console.log(vw);
            this.title = document.querySelectorAll(".title");
            // if (window.scrollY > 3 * vh && window.scrollY < 3.8 * vh) {
            //     this.change = true;
            //     let num = window.scrollY / vh;
            //     // console.log("start" + num);
            // } else if (window.scrollY <= 3 * vh || window.scrollY >= 3.8 * vh) {
            //     this.change = false;
            // }
            if (vw > 834) {
                if (window.scrollY > 3 * vh && window.scrollY < 3.8 * vh) {
                    this.change = true;
                    let num = window.scrollY / vh;
                    // console.log("start" + num);
                } else if (window.scrollY <= 3 * vh || window.scrollY >= 3.8 * vh) {
                    this.change = false;
                }
            } else {
                // console.log("vh" + vh);
                // console.log("window.scrollY" + window.scrollY);
                if (window.scrollY > 5 * vh && window.scrollY < 6.9 * vh) {
                    this.change = true;
                    let num = window.scrollY / vh;
                    // console.log("vh" + vh);
                    // console.log("window.scrollY" + window.scrollY);
                } else if (window.scrollY <= 5 * vh || window.scrollY >= 6.9 * vh) {
                    this.change = false;
                }
            }
        },
    },
};
</script>
<style scoped>
.left {
    height: auto;
    position: relative;
}
.left > div {
    width: 50vw;
    box-sizing: border-box;
    position: absolute;
    top: 100px;
    left: 0;
}
.left > div > img {
    width: 100%;
}

.left > div > img:nth-child(2) {
    display: none;
}

.left > div.fixed {
    position: fixed;
    top: 0px;
    left: 0%;
    /* transform: translate3d(0, -50%, 0); */
}
.right {
    height: fit-content;
}
.right > a {
    display: block;
    width: 100%;
    height: fit-content;
}
.right > a > div {
    position: relative;
    width: 100%;
    padding-top: 53.125%;
    background-color: lightblue;
}
.right > a:nth-child(2) {
    margin: 50px 0;
}
.view {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    width: fit-content;
}
.view .b_blue {
    width: 50px;
    height: 50px;
    background-image: url(../../public/img/poly9_beige.png);
    background-size: 80%;
    background-position: center center;
    background-repeat: no-repeat;
}
.view h3 {
    padding: 0 25px;
    box-sizing: border-box;
    line-height: 50px;
}
@media (max-width: 834px) {
    .left {
        height: 15vh;
        position: relative;
        z-index: 1;
    }
    .left > div {
        top: 0;
        width: 100%;
        height: 15vh;
        background-color: #4885f5;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .left > div > img:nth-child(2) {
        display: block;
        width: 100%;
    }
    .left > div > img:nth-child(1) {
        display: none;
    }

    .left > div.fixed {
        position: fixed;
        top: 0px;
        left: 0%;
        /* transform: translate3d(0, -50%, 0); */
    }
    .right {
        height: 255vh;
    }
    .right > a > div {
        position: relative;
        width: 100%;
        padding-top: 0;
        height: calc(85vh - 80px);
        background-color: lightblue;
    }
    .right > a:nth-child(2) {
        margin: 80px 0;
    }
}
</style>
