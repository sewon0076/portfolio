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
                            IELTS EACH 6.5<br />
                            2022.09 ~ 2023.02 - 국비지원 프론트엔드 수료
                        </p>
                    </div>
                </div>
                <div class="content2" v-if="!show">
                    <div class="content_wrap">
                        <p>CERTIFICATION</p>
                        <p>
                            IELTS EACH 6.5<br />
                            2022.09 ~ 2023.02 - 국비지원 프론트엔드 수료
                        </p>
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
            console.log("sec5");
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
    justify-content: space-between;
}
.content1 > span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: #202124;
}
.content_wrap p:nth-child(1) {
    font-weight: 900;
    margin-bottom: 10px;
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
        gap: 30px;
    }
}
</style>
