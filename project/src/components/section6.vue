<!-- <template>
    <swiper
        :direction="horizontal"
        :slidesPerView="4"
        :spaceBetween="30"
        :Mousewheel="true"
        :modules="modules"
        :pagination="{
            clickable: true,
        }"
        class="mySwiper"
    >
        <swiper-slide class="swiper-slide">Slide 1</swiper-slide>
        <swiper-slide class="swiper-slide">Slide 2</swiper-slide>
        <swiper-slide class="swiper-slide">Slide 3</swiper-slide>
        <swiper-slide class="swiper-slide">Slide 2</swiper-slide>
        <swiper-slide class="swiper-slide">Slide 3</swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel, Pagination } from "swiper";

// Import Swiper styles
//import "swiper/css";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log("slide change");
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Mousewheel, Pagination],
        };
    },
};
</script>
<style scoped>
.mySwiper {
    width: 100%;
    height: 100vh;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: rgb(189, 156, 156);

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

swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style> -->
<template>
    <div class="section6">
        <div class="sec_wrap b_black"></div>
    </div>
</template>
<script></script>
<style scoped></style>
