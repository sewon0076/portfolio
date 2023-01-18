<template>
    <div class="spinner-div" v-if="isLoading">
        <q-spinner-cube color="primary" size="5em" />
    </div>
    // ... 기타 코드
</template>
<script>
export default defineComponent({
    data() {
        return {
            isLoading: true,
        };
    },
});
</script>
