<template>
    <div class="home">
        <section1 />
        <section2 />
        <section3 />
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
};
</script>
