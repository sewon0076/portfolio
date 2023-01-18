<template>
    <div class="section2" id="intro">
        <div class="sec_wrap">
            <div class="b_yellow p50all">
                <div class="title_wrap">
                    <h1 class="top">KEEP</h1>
                    <h1 class="middle">GOING</h1>
                    <h1 class="bottom">NEVER, GIVE UP</h1>
                </div>
            </div>
            <div class="b_beige p50all">
                <div class="portrait"><img src="../../public/img/portrait.png" alt="" /></div>
                <div class="b_green">
                    <h3 class="beige">RESUME</h3>
                    <div class="arrow-next"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script></script>
<style scoped>
.sec_wrap > .b_yellow {
    display: flex;
    justify-content: center;
    align-items: center;
}
.title_wrap {
    width: 100%;
}
h1.middle {
    padding-right: 30px;
    box-sizing: border-box;
    text-align: center;
    /* margin:10px 0; */
}
h1.bottom {
    text-align: right;
}
.b_beige {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.portrait {
    width: 60%;
}
.portrait > img {
    width: 100%;
}
.b_green {
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 40px;
}
.arrow-next {
    position: relative;
    width: 25px;
    height: 25px;
}

.arrow-next::after {
    position: absolute;
    left: 2.5px;
    top: 5px;
    content: "";
    width: 12.5px; /* 사이즈 */
    height: 12.5px; /* 사이즈 */
    border-top: 3px solid #f3ede4; /* 선 두께 */
    border-right: 3px solid #f3ede4; /* 선 두께 */
    transform: rotate(45deg); /* 각도 */
}
</style>
