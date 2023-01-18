<template>
    <div class="section8" id="contact">
        <div class="sec_wrap">
            <div class="left p50all b_black">
                <div>
                    <p class="beige">SEWON KIM</p>
                    <p class="beige">TEL : 010 - 5754 - 8799</p>
                    <p class="beige">E-MAIL : sewon0076@naver.com</p>
                    <p class="beige">INSTAGRAM : @31_luminous</p>
                </div>
            </div>
            <div class="right p50all b_yellow">
                <h2>CONTACT</h2>
                <div>
                    <div class="c_circle" id="c1"><img src="../../public/img/Asset1.png" alt=""></div>
                    <div class="c_circle" id="c2"><img src="../../public/img/Asset1.png" alt=""></div>
                    <div class="c_circle" id="c3"><img src="../../public/img/Asset1.png" alt=""></div>
                    <div class="c_circle" id="c4"><img src="../../public/img/Asset1.png" alt=""></div>
                    <div class="c_circle" id="c5"><img src="../../public/img/Asset1.png" alt=""></div>
                    <div class="c_circle" id="c6"><img src="../../public/img/Asset1.png" alt=""></div>
                    <div class="c_circle" id="c7"><img src="../../public/img/Asset1.png" alt=""></div>
                    <div class="c_circle" id="c8"><img src="../../public/img/Asset1.png" alt=""></div>
                    <div class="c_circle" id="c9"><img src="../../public/img/Asset1.png" alt=""></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="../../public/js/contact.js"></script>
<style scoped>
.sec_wrap>div{
    height: 50vh;
}
.left p{
    font-weight: 800;
}
.left>div{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap:12.5px;

}
.right{
    position: relatives;
}
.right{
    position: relative;
}
.right>div{
    position: absolute;
    top:0;
    right:0;
    width:100%;
    height:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.c_circle{
    width:100px;
    height:fit-content;
}
.c_circle:nth-child(3n-1){
    margin-top:40px;

}
.c_circle:nth-child(4n-1){
    margin-top:20px;

}
.c_circle>img{
    width:100%;
}
</style>