<template>
    <div class="S_230116">
        <div class="wrap">
            <div class="menu" ref="menu" @click="mouseDown"></div>
            <button @click="accor = !accor">CLICK</button>
            <button @click="accor = !accor">CLICK</button>
            <!-- click하면 true는 false가되고 false 는 true가 되라는 말 -->
        </div>
        <div class="dropdown" v-if="state.isOpened"></div>
        <transition name="fadeA">
            <h2 v-if="accor == true">SHOW CONTENT</h2>
        </transition>
        <div v-if="accor == true">1</div>
        <div v-if="accor == false">2</div>
    </div>
</template>
<script>
import { ref, reactive } from "vue";

export default {
    data() {
        return {
            accor: true,
        };
    },
    setup() {
        const menu = ref(null);
        const state = reactive({ isOpened: false });

        function mouseDown() {
            !state.isOpened ? open() : close();
        }

        function open() {
            state.isOpened = true;
            window.addEventListener("mousedown", outside);
        }

        function close() {
            state.isOpened = false;
            window.removeEventListener("mousedown", outside);
        }

        function outside(e) {
            if (e.target !== menu.value) close();
        }

        return { menu, state, mouseDown };
    },
};
</script>
<style scoped>
.S_230116 {
    width: 100%;
    height: 100vh;
}
.wrap {
    display: flex;
    gap: 50px;
}
.menu {
    width: 200px;
    height: 100px;
    background-color: lightblue;
}
.dropdown {
    width: 200px;
    height: 500px;
    background-color: aquamarine;
}
.fadeA-enter-from {
    opacity: 0;
    /* 이렇게 시작해서 */
}
.fadeA-enter-active {
    transition: opacity 1s;
}
.fadeA-enter-to {
    opacity: 1;
    /* 이렇게 끝나라 */
}
.fadeA-leave-from {
    opacity: 1;
    /* 이렇게 시작해서 */
}
.fadeA-leave-active {
    transition: opacity 1s;
}
.fadeA-leave-to {
    opacity: 0;
    /* 이렇게 끝나라 */
}
</style>
