<template>
    <div class="WouldyouView">
        <m2_section1 />
    </div>
</template>

<script>
// @ is an alias to /src
import m2_section1 from "@/components/m2_section1.vue";

export default {
    data() {
        return {
            clientH: "",
        };
    },
    name: "SeomoonView",
    components: {
        m2_section1,
    },
};
</script>
