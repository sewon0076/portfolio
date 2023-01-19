<template>
    <div class="BfocView">
        <m3_section1 />
    </div>
</template>

<script>
// @ is an alias to /src
import m3_section1 from "@/components/m3_section1.vue";

export default {
    data() {
        return {
            clientH: "",
        };
    },
    name: "BfocView",
    components: {
        m3_section1,
    },
};
</script>
