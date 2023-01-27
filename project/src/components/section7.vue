<template>
    <div class="section7" id="experiences">
        <div class="sec_wrap">
            <div class="left p50all b_beige">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="right b_green">
                <div class="title p50all" v-bind:class="{ fixed: change }"><img src="../../public/img/hobby_title.png" alt="" /></div>
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
            // this.title = document.querySelectorAll(".title");
            const sec7 = document.getElementById("experiences");
            let sec7h = sec7.offsetTop;
            let num = sec7.clientHeight / 2;
            if (sec7h <= window.scrollY && sec7h + num >= window.scrollY) {
                this.change = true;
            } else if (sec7h > window.scrollY || sec7h + num < window.scrollY) {
                this.change = false;
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
    background-color: aliceblue;
}
.title {
    position: relative;
    width: 100%;
    margin-top: 100px;
}
.title.fixed {
    position: fixed;
    width: 50%;
    top: 0;
    right: 0;
}
.title > img {
    width: 100%;
}
.right {
    position: relative;
}
@media (max-width: 834px) {
    .sec_wrap {
        flex-wrap: wrap-reverse;
    }
    .right {
        height: 15vh;
    }
    .left {
        height: 85vh;
        gap: 40px;
    }
    .left > div {
        width: calc(50% - 20px);
        height: calc(33.3333% - 26.66666px);
    }
    .left > div:nth-child(8),
    .left > div:nth-child(9) {
        display: none;
    }
}
</style>
