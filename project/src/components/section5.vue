<template>
    <div class="section5" id="projects">
        <div class="sec_wrap">
            <div class="left b_blue">
                <div v-bind:class="{ fixed: change }">
                    <img src="../../public/img/project_title_w.png" alt="" />
                    <!-- <div class="title_wrap">
                        <img src="../../public/img/poly_rec_beige.png" alt="" />
                        <h2>P</h2>
                    </div>
                    <div class="title_wrap">
                        <img src="../../public/img/poly_rec_beige.png" alt="" />
                        <h2>R</h2>
                    </div>
                    <div class="title_wrap">
                        <img src="../../public/img/poly_rec_beige.png" alt="" />
                        <h2>O</h2>
                    </div>
                    <div class="title_wrap">
                        <img src="../../public/img/poly_rec_beige.png" alt="" />
                        <h2>J</h2>
                    </div>
                    <div class="title_wrap">
                        <img src="../../public/img/poly9_black.png" alt="" />
                        <h2 class="beige">E</h2>
                    </div>
                    <div class="title_wrap">
                        <img src="../../public/img/poly_rec_beige.png" alt="" />
                        <h2>C</h2>
                    </div>
                    <div class="title_wrap">
                        <img src="../../public/img/poly_rec_beige.png" alt="" />
                        <h2>T</h2>
                    </div> -->
                </div>
            </div>
            <div class="right p50all b_beige">
                <div></div>
                <div></div>
                <div></div>
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
                console.log("start" + num);
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
/* .left > div {
    position: absolute;
    top: 200px;
    left: 0%;
    transform: translate3d(0, -50%, 0);
    width: 50vw;
    box-sizing: border-box;
    height: auto;
    display: flex;
} */
/* .title_wrap {
    position: relative;
    width: 14%;
    height: fit-content;
    padding: 0 10px;
    box-sizing: border-box;
}
.title_wrap > img {
    width: 100%;
}
.title_wrap h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    font-weight: 900;
} */
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
    width: 100%;
    padding-top: 53.125%;
    background-color: lightblue;
}
.right > div:nth-child(2) {
    margin: 50px 0;
}
</style>
