<template>
    <div class="section3">
        <div class="sec_wrap">
            <div class="b_beige p50all">
                <div class="content_wrap">
                    <p>
                        EDUCATION
                    </p>
                    <p>
                        2018.04  - 검정고시 졸업<br>
                        2019.09  - Graphic Design, GeorgeBrownCollege, Toronto 입학<br>
                        2020. 09 ~ 휴학(COVID - 19)
                    </p>
                </div>
                <div class="content_wrap">
                    <p>
                        CERTIFICATION
                    </p>
                    <p>
                        IELTS EACH 6.5<br>
                        2022.09 ~ 2023.02 - 국비지원 프론트엔드 수료
                    </p>
                </div>
            </div>
            <div class="b_red p50all">
                <div class="b_beige">
                    <h2>EDUCATION / CERTIFICATION</h2>
                </div>
                <div class="b_beige">
                    <h2>
                        EXPERIENCES
                    </h2>
                </div>
            </div>
        </div>
    </div>
</template>
<script></script>
<style scoped>
    .sec_wrap>div{
        height: 50vh;
    }
    .sec_wrap>.b_beige{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .content_wrap>p:nth-child(1){
        font-weight: 900;
        margin-bottom: 10px;
    }
    .b_red{
        display: flex;
        flex-direction: column;
        gap:50px;
    }
    .b_red>.b_beige{
        width:100%;
        padding:30px 20px;
        box-sizing: border-box;
    }
</style>