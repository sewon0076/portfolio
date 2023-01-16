<template>
    <div class="home">
        <S_230116 />
        <section1 />
        <section2 />
        <section3 />
        <section4 />
        <section5 />
        <section6 />
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
    },
};
</script>
