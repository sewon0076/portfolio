<template>
    <div class="WouldyouView b_white">
        <section1 />
        <section2 />
        <section3 />
    </div>
</template>

<script>
// @ is an alias to /src
import section1 from "@/components/m2_section1.vue";
import section2 from "@/components/m2_section2.vue";
import section3 from "@/components/m2_section3.vue";

export default {
    data() {
        return {
            clientH: "",
        };
    },
    name: "SeomoonView",
    components: {
        section1,
        section2,
        section3,
    },
};
</script>
<style scoped>
@import url(../../public/css/m_common.css);
</style>
