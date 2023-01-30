<template>
    <div class="BfocView">
        <section1 />
        <section2 />
        <section3 />
        <section4 />
    </div>
</template>

<script>
// @ is an alias to /src
import section1 from "@/components/m3_section1.vue";
import section2 from "@/components/m3_section2.vue";
import section3 from "@/components/m3_section3.vue";
import section4 from "@/components/m3_section4.vue";

export default {
    data() {
        return {
            clientH: "",
        };
    },
    name: "BfocView",
    components: {
        section1,
        section2,
        section3,
        section4,
    },
};
</script>
<style scoped>
@import url(../../public/css/m_common.css);
</style>
