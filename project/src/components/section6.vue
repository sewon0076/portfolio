<template>
    <div class="section6">
        <div class="sec_wrap b_black p50all">
            <h2 class="beige">CLONE-CODING / TOY-PROJECT</h2>
            <div class="content_wrap">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>
<script></script>
<style scoped>
.sec_wrap {
    display: block;
    height: 50vh;
}
.content_wrap {
    display: flex;
    width: 100%;
    gap: 50px;
    padding-top: 50px;
    box-sizing: border-box;
}
.content_wrap > div {
    flex: 1;
    height: calc(50vh - 200px);
    box-sizing: border-box;
    background-color: aqua;
}
@media (max-width: 834px) {
    .sec_wrap {
        display: block;
        height: 100vh;
    }
    .content_wrap {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        gap: 40px;
        padding: 40px 0;
        box-sizing: border-box;
    }
    .content_wrap > div {
        flex: none;
        width: calc(50% - 20px);
        height: calc(50% - 20px);
        box-sizing: border-box;
        background-color: aqua;
    }
}
</style>
