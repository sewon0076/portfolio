<template>
    <div class="section5" id="projects">
        <div class="sec_wrap">
            <div class="left b_blue">
                <div v-bind:class="{ fixed: change }">
                    <img src="../../public/img/project_title_w.png" alt="" />
                </div>
            </div>
            <div class="right p50all b_beige">
                <div>
                    <div class="view b_beige">
                        <div class="b_blue"></div>
                        <h3>VIEW WEBSITE</h3>
                    </div>
                </div>
                <div>
                    <div class="view b_beige">
                        <div class="b_blue"></div>
                        <h3>VIEW WEBSITE</h3>
                    </div>
                </div>
                <div>
                    <div class="view b_beige">
                        <div class="b_blue"></div>
                        <h3>VIEW WEBSITE</h3>
                    </div>
                </div>
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
            this.title = document.querySelectorAll(".title");
            if (window.scrollY > 3 * vh && window.scrollY < 4 * vh) {
                this.change = true;
                let num = window.scrollY / vh;
                // console.log("start" + num);
            } else if (window.scrollY <= 3 * vh || window.scrollY >= 4 * vh) {
                this.change = false;
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
    padding: 50px;
    box-sizing: border-box;
    position: absolute;
    top: 100px;
    left: 0;
}
.left > div > img {
    width: 100%;
}

.left > .fixed {
    position: fixed;
    top: 200px;
    left: 0%;
    transform: translate3d(0, -50%, 0);
}
.right {
    height: fit-content;
}
.right > div {
    position: relative;
    width: 100%;
    padding-top: 53.125%;
    background-color: lightblue;
}
.right > div:nth-child(2) {
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
</style>
