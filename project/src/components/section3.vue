<template>
    <div class="section3">
        <div class="sec_wrap">
            <div class="b_beige p50all">
                <div class="content1" v-if="show">
                    <div class="content_wrap">
                        <p>EDUCATION</p>
                        <p class="kr">
                            2018.04 - 검정고시 졸업<br />
                            2019.09 - Graphic Design, GeorgeBrownCollege, Toronto 입학<br />
                            2020. 09 ~ 휴학(COVID - 19)
                        </p>
                    </div>
                    <span></span>
                    <div class="content_wrap">
                        <p>CERTIFICATION</p>
                        <p class="kr">
                            IELTS EACH 6.5(TOEIC 900 ~ 955 해당)<br />
                            2022.09 ~ 2023.02 - 국비지원 프론트엔드 수료
                        </p>
                    </div>
                    <div class="content_wrap mobile">
                        <p>EXPERIENCES</p>
                        <div class="ex_wrap">
                            <p>
                                2022.05
                                <br />
                                거제시 성년의 날 축하카드 편집 및 제작
                            </p>
                            <p>
                                2021.12 - 2022.02
                                <br />
                                거제시 교육지원청 학교폭력 교육자료 '더 나은 나'- 삽화 및 편집/제작
                            </p>
                            <p>
                                2021.12 - 2022.01
                                <br />
                                거제시 교육지원청 초/중등 애도교육 자료 삽화 및 피피티 제작
                            </p>
                            <p>
                                2021.12
                                <br />
                                청소년 상담복지센터 소식지 삽화 및 편집/제작
                            </p>
                            <p>
                                2021.09~
                                <br />
                                중.고등학교 진로특강 - 캐릭터/광고 디자인
                            </p>
                        </div>
                    </div>
                </div>
                <div class="content2" v-if="!show">
                    <div class="content_wrap">
                        <p>EXPERIENCES</p>
                        <div class="ex_wrap">
                            <p>
                                2022.05
                                <br />
                                거제시 성년의 날 축하카드 편집 및 제작
                            </p>
                            <p>
                                2021.12 - 2022.02
                                <br />
                                거제시 교육지원청 학교폭력 교육자료 '더 나은 나'- 삽화 및 편집/제작
                            </p>
                            <p>
                                2021.12 - 2022.01
                                <br />
                                거제시 교육지원청 초/중등 애도교육 자료 삽화 및 피피티 제작
                            </p>
                            <p>
                                2021.12
                                <br />
                                청소년 상담복지센터 소식지 삽화 및 편집/제작
                            </p>
                            <p>
                                2021.09~
                                <br />
                                중.고등학교 진로특강 - 캐릭터/광고 디자인
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="b_red p50all">
                <div class="b_beige btn1" @click="accordion" v-bind:class="{ opacity: !opacity }">
                    <h2>EDUCATION / CERTIFICATION</h2>
                </div>
                <div class="b_beige btn2" @click="accordion" v-bind:class="{ opacity: opacity }">
                    <h2>EXPERIENCES</h2>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            accor: true,
            opacity: true,
            show: true,
        };
    },

    // data를 쓰고 있으면 this.뭐라고 적어야함
    methods: {
        accordion: function () {
            if (window.innerWidth < 834) {
                this.show = true;
            } else {
                if (this.accor == true) {
                    this.show = !this.show;
                    this.opacity = !this.opacity;
                } else if (this.accor == false) {
                    this.show = !this.show;
                    this.opacity = !this.opacity;
                }
            }
        },
    },
};
</script>
<style scoped>
.sec_wrap > div {
    height: 50vh;
}
.sec_wrap > .b_beige {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.content1 {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 25px;
}
/* .content1 > span {
    display: block;
    width: 100%;
    height: 1.5px;
    background-color: #202124;
} */
.content_wrap > p:nth-child(1) {
    font-size: 22px;
    font-weight: 900;
    margin-bottom: 10px;
}
.content2 {
    overflow: hidden;
}
.b_red {
    display: flex;
    flex-direction: column;
    gap: 50px;
}
.b_red .b_beige {
    width: 100%;
    padding: 30px 20px;
    box-sizing: border-box;
    transition: 0.5s;
}
p {
    line-height: 1.7;
    font-size: 19px;
}
.b_red .b_beige:hover {
    opacity: 1;
    padding-left: 50px;
    transition: 0.5s;
}
.opacity {
    box-sizing: border-box;
    opacity: 0.5;
    transition: 0.5s;
}
.mobile {
    display: none;
}
@media (max-width: 834px) {
    .sec_wrap {
        flex-wrap: wrap-reverse;
    }
    .sec_wrap > .b_red {
        height: 25vh;
    }
    .sec_wrap > .b_beige {
        height: 75vh;
    }
    .b_red {
        gap: 25px;
    }
    .b_red .b_beige[data-v-425082fe] {
        width: 100%;
        padding: 20px 20px;
        box-sizing: border-box;
        transition: 0.5s;
    }
    .mobile {
        display: block;
    }
    .content2 {
        display: none;
    }
    .btn2 {
        display: none;
    }
}
@media (max-width: 1440px) {
    p {
        font-size: 16px;
    }
}
@media (max-width: 600px) {
    .b_red {
        gap: 12.5px;
    }
}
</style>
