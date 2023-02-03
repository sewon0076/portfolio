<template>
    <div class="section6">
        <div class="sec_wrap p50all b_black">
            <h2 class="beige">TOY-PROJECT / CLONE-CODING</h2>
            <div class="content_wrap">
                <swiper
                    :slidesPerView="4"
                    :spaceBetween="50"
                    :pagination="{
                        clickable: true,
                    }"
                    :autoplay="{
                        delay: 3000,
                        disableOnInteraction: false,
                    }"
                    :modules="modules"
                    class="mySwiper"
                >
                    <swiper-slide>
                        <a href="http://sewon.dothome.co.kr/random_food/main.html">
                            <div>
                                <p class="bold beige">VIEW PROJECT</p>
                            </div>
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a href="/list">
                            <div>
                                <p class="bold beige">VIEW PROJECT</p>
                            </div>
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a href="http://sewon.dothome.co.kr/therichmond/therichmond.html" class="b_beige">
                            <div>
                                <p class="bold beige">VIEW PROJECT</p>
                            </div>
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a href="http://sewon.dothome.co.kr/shouse/shouse.html" class="b_green">
                            <div>
                                <p class="bold beige">VIEW PROJECT</p>
                            </div>
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a href="http://sewon.dothome.co.kr/dosirak/dosirak.html">
                            <div>
                                <p class="bold beige">VIEW PROJECT</p>
                            </div>
                        </a>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

//   import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import "../../public/css/style.css";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination],
        };
    },
};
</script>
<style scoped>
.sec_wrap {
    display: block;
    width: 100%;
    overflow: hidden;
}
.section6 {
    width: 100%;
    height: 50vh;
}
.sec_wrap > div {
    width: 100%;
    height: 100%;
    padding-top: 50px;
}
.sec_wrap .swiper {
    overflow: visible;
}
.swiper-slide {
    text-align: center;
    font-size: 18px;
    height: calc(50vh - 200px);

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.swiper-slide {
    height: calc(50vh - 200px);
    box-sizing: border-box;
}
.swiper-slide > a {
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-size: 85%;
    background-position: center center;
    background-repeat: no-repeat;
    background-color: #f3ede4;
}
.swiper-slide:nth-child(1) > a {
    background-image: url(../../public/img/random.gif);
    /* background-color: #f4644c; */
}
.swiper-slide:nth-child(2) > a {
    background-image: url(../../public/img/todo.gif);
    /* background-color: #ccccfe; */
}
.swiper-slide:nth-child(3) > a {
    background-image: url(../../public/img/richmond.gif);
}
.swiper-slide:nth-child(4) > a {
    background-image: url(../../public/img/shouse.gif);
}
.swiper-slide:nth-child(5) > a {
    background-image: url(../../public/img/dosirak.gif);
}
.swiper-slide > a > div {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.swiper-slide > a:hover > div {
    height: 0;
}
</style>
<style>
.section6 .swiper-pagination {
    bottom: -32px;
    left: 0;
    width: 100%;
}
.section6 .swiper-pagination-bullet {
    background-color: #f3ede4;
    opacity: 0.6;
}
.section6 .swiper-pagination-bullet-active {
    opacity: 1;
    background-color: #f3ede4;
}
</style>
