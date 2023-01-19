<template>
    <div class="section7" id="experiences">
        <div class="sec_wrap">
            <div class="left p50all b_beige">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="right b_green"></div>
        </div>
    </div>
</template>
<script></script>
<style scoped>
.left {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
}
.left > div {
    width: calc(33.3333% - 33.33333px);
    height: calc(33.3333% - 33.33333px);
    background-color: aliceblue;
}
@media (max-width: 834px) {
    .sec_wrap {
        flex-wrap: wrap-reverse;
    }
    .right {
        height: 15vh;
    }
    .left {
        height: 85vh;
        gap: 40px;
    }
    .left > div {
        width: calc(50% - 20px);
        height: calc(33.3333% - 26.66666px);
    }
    .left > div:nth-child(8),
    .left > div:nth-child(9) {
        display: none;
    }
}
</style>
