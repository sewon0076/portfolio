<template>
    <div class="section3">
        <div class="sec_wrap desktop">
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
                </div>
                <div class="content2" v-if="!show">
                    <div class="content_wrap">
                        <p>EXPERIENCES</p>
                        <div class="ex_wrap">
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
        <div class="sec_wrap mobile">
            <div class="b_red p50all">
                <div class="list" v-for="(tab, index) in tabs" :key="index" @click="currents(index)">
                    <div class="b_beige" v-bind:class="{ active: current == index }">
                        <h2>{{ tab.title }}</h2>
                        <div class="arrow-next"></div>
                    </div>
                    <div class="b_beige content" v-show="current == index">
                        <p class="bold">{{ tab.date1 }}</p>
                        <p class="kr">
                            {{ tab.content1 }}
                        </p>
                        <p class="bold">{{ tab.date2 }}</p>
                        <p class="kr">
                            {{ tab.content2 }}
                        </p>
                        <p class="bold">{{ tab.date3 }}</p>
                        <p class="kr">
                            {{ tab.content3 }}
                        </p>
                        <p class="bold">{{ tab.date4 }}</p>
                        <p class="kr">
                            {{ tab.content4 }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from "vue";
export default {
    setup() {
        let current = ref(0);
        const tabs = [
            {
                title: "EDUCATION",
                content1: "검정고시 졸업",
                content2: "Graphic Design, GeorgeBrownCollege, Toronto 입학",
                content3: " 휴학(COVID - 19)",
                date1: "2018.04",
                date2: "2019.09",
                date3: " 2020. 09",
            },
            {
                title: "EXPERIENCES",
                content1: "거제시 교육지원청 학교폭력 교육자료 '더 나은 나'- 삽화 및 편집/제작",
                content2: " 거제시 교육지원청 초/중등 애도교육 자료 삽화 및 피피티 제작",
                content3: "청소년 상담복지센터 소식지 삽화 및 편집/제작",
                content4: " 중.고등학교 진로특강 - 캐릭터/광고 디자인",
                date1: "2021.12 - 2022.02",
                date2: "2021.12 - 2022.01",
                date3: " 2021.12",
                date4: "2021.09~",
            },
            {
                title: "CERTIFICATION",
                content1: "IELTS EACH 6.5(TOEIC 900 ~ 955 해당)",
                content2: "2022.09 ~ 2023.02 - 국비지원 프론트엔드 수료",
            },
        ];
        function currents(index) {
            //클릭하면 current의 값은 현재 클릭한 index의 값으로 바뀐다
            //그리고 그 current(answer에 해당하는 부분)dml 값이 클릭하는 곳의 인덱스와 같으면 (true이면) active라는 클래스가 붙는다
            current.value = index;
            console.log(current);
        }
        return {
            tabs,
            current,
            currents,
        };
    },
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
            if (this.accor == true) {
                this.show = !this.show;
                this.opacity = !this.opacity;
            } else if (this.accor == false) {
                this.show = !this.show;
                this.opacity = !this.opacity;
            }
        },
    },
};
</script>
<style scoped>
.sec_wrap.mobile {
    display: none;
}
.sec_wrap.mobile > div {
    width: 100%;
    height: 100vh;
}
.sec_wrap.mobile .b_red {
    gap: 15px;
}
.sec_wrap.mobile .list {
    width: 100%;
    height: fit-content;
}
.sec_wrap.mobile .b_red .b_beige {
    display: flex;
    justify-content: space-between;
    padding: 15px 30px 15px 15px;
    opacity: 0.6;
}
.sec_wrap.mobile .b_red .b_beige.active {
    opacity: 1;
    padding: 15px 15px 15px 30px;
}
.arrow-next::after {
    position: absolute;
    left: 2.5px;
    top: 5px;
    content: "";
    width: 12.5px; /* 사이즈 */
    height: 12.5px; /* 사이즈 */
    border-top: 3px solid #202124; /* 선 두께 */
    border-right: 3px solid #202124; /* 선 두께 */
    transform: rotate(45deg); /* 각도 */
}
.sec_wrap.mobile .b_red .b_beige.content {
    opacity: 1;
    display: block;
    height: fit-content;
    overflow: hidden;
    padding: 15px;
    margin-top: 15px;
}
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
    /* font-size: 19px; */
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
    .sec_wrap.mobile {
        display: block;
    }
    .sec_wrap.desktop {
        display: none;
    }
}
/* @media (max-width: 1440px) {
    p {
        font-size: 16px;
    }
} */
</style>
