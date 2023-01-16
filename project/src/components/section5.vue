<template>
    <div class="section5" id="contact">
        <div class="sec_wrap">
            <div class="left b_blue">
                <div></div>
            </div>
            <div class="right p50all">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>
<script></script>
<style scoped>
.left {
    height: auto;
    position: relative;
}
.left > div {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 100px;
    background-color: aliceblue;
}
.right {
    height: fit-content;
    background-color: aquamarine;
}
.right > div {
    width: 100%;
    padding-top: 53.125%;
    background-color: lightblue;
}
.right > div:nth-child(2) {
    margin: 50px 0;
}
</style>
