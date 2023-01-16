<template>
    <div class="section1">
       <div class="sec_wrap">
            <div class="p50all b_beige left">
                <div class="top">
                    <h1>SEWON<span class="blue">'S</span>
                    </h1>
                    <h1>PORTFOLIO</h1>
                </div>
                <div class="bottom">
                    <p>김세원_SEWON KIM</p>
                    <p>TEL : 010 5754 8799</p>
                    <p>E-MAIL : sewon0076@naver.com</p>
                </div>
            </div>
            <div class="p50all b_black">
                <div class="circle_wrap">
                    <div class="circle">
                        <div class="b_beige"></div>
                    </div>
                    <div class="circle">
                        <div class="b_yellow"></div>
                    </div>
                    <div class="circle">
                        <div class="b_red"></div>
                    </div>
                    <div class="circle">
                        <div class="b_green"></div>
                    </div>
                </div>
            </div>
       </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
    .circle_wrap{
        padding:50px 0;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        gap:25px;
    }
    .circle{
        width:calc(50% - 12.5px);
        height:auto;
    }
    .circle>div{
        width:100%;
        padding-top: 100%;
        box-sizing: border-box;
        border-radius: 50%;
    }
    .left{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>