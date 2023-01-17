<template>
    <div class="home">
        <section1 />
        <section2 />
        <section3> </section3>
        <section4 />
        <section5 />
        <section6 />
        <section7 />
        <section8 />
    </div>
</template>

<script>
// @ is an alias to /src
import S_230116 from "@/components/230116.vue";
import section1 from "@/components/section1.vue";
import section2 from "@/components/section2.vue";
import section3 from "@/components/section3.vue";
import section4 from "@/components/section4.vue";
import section5 from "@/components/section5.vue";
import section6 from "@/components/section6.vue";
import section7 from "@/components/section7.vue";
import section8 from "@/components/section8.vue";

export default {
    data() {
        return {
            clientH: "",
        };
    },
    name: "HomeView",
    components: {
        S_230116,
        section1,
        section2,
        section3,
        section4,
        section5,
        section6,
        section7,
        section8,
    },
    // mounted() {
    //     document.addEventListener("scroll", this.scrollChange);
    // },
    // methods: {
    //     sec5(sec5) {
    //         console.log(sec5);
    //         console.log(sec5.offsetHeight);
    //     },
    //     scrollChange: function () {
    //         const vh = window.innerHeight;
    //         if (window.scrollY > 3 * vh && window.scrollY < 3.5 * vh) {
    //             console.log("start" + window.scrollY);
    //         } else if (window.scrollY >= 3.5 * vh) {
    //             return;
    //         }
    //     },

    //     //밑에 있는 함수를 불러주는 역할
    //     // console.log(window.scrollY);
    //     // console.log(window.innerHeight);
    // },
};
</script>
