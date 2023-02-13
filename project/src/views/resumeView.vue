<template>
    <div class="resume">
        <div class="wrap">
            <div class="b_red">
                <right />
            </div>
            <div class="b_beige">
                <left />
            </div>
        </div>
    </div>
</template>
<script>
import right from "@/components/resumeRight.vue";
import left from "@/components/resumeLeft.vue";
export default {
    components: {
        right,
        left,
    },
};
</script>

<style scoped>
.wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
}
.wrap > div:nth-child(1) {
    width: 400px;
    height: 100%;
}
.wrap > div:nth-child(2) {
    width: calc(100% - 400px);
    height: 100%;
}
.resume {
    width: 100%;
    height: 100vh;
}
@media (max-width: 834px) {
    .resume {
        width: 100%;
        height: auto;
    }
    .wrap > div:nth-child(1) {
        width: 100%;
        height: 100vh;
    }
    .wrap > div:nth-child(2) {
        width: 100%;
        height: 100%;
    }
}
</style>
