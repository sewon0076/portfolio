<template>
    <div class="section5" id="projects">
        <div class="sec_wrap">
            <div class="left b_blue">
                <div class="p50all" v-bind:class="{ fixed: change }">
                    <img src="../../public/img/project_title_w.png" alt="" />
                    <img src="../../public/img/project_title_m.png" alt="" />
                </div>
            </div>
            <div class="right p50all b_beige">
                <a href="/seomoon">
                    <div>
                        <div class="view b_beige">
                            <div class="b_blue"></div>
                            <h3>VIEW WEBSITE</h3>
                        </div>
                        <div class="explain">
                            <h2 class="kr">서문야시장 <span>seomoon-night market</span></h2>
                            <p>
                                대구의 전통적인 시장이며 총 길이 350m에 달하는 대형 야시장인 서문야시장의 홈페이지 리뉴얼 작업입니다.<br />
                                구조적인 불편함과 반응형이 되지 않는 등의 문제점들을 보완하면서 새로운 페이지들을 추가하며, DB연결을 통해 데이터를
                                담아두고 불러오는등의 작업을 완료한 프로젝트 입니다.
                            </p>
                            <div>
                                <div class="list">
                                    <p class="bold">PERIOD :</p>
                                    <p>2022.10월 중순 ~2022.12월 중순</p>
                                </div>
                                <div class="list">
                                    <p class="bold">TECHNIQUE :</p>
                                    <p>node,html,css,js,mySql,photoshop,illustrator,figma</p>
                                </div>
                                <div class="list">
                                    <p class="bold">CONFIGURATION :</p>
                                    <p>반응형 웹 + Main + Sub() + DB연결(notice, store , login)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="/wouldyou">
                    <div>
                        <div class="view b_beige">
                            <div class="b_blue"></div>
                            <h3>VIEW WEBSITE</h3>
                        </div>
                        <div class="explain">
                            <h2 class="kr">우주라이크 <span>Would you like?</span></h2>
                            <p>
                                천문우주 전문 잡지 우주라이크를 제작하고 무료 배포하는 비영리 사이트 우주라이크를 리뉴얼한 프로젝트 입니다.
                                <br />불편한 네비게이션과 컨텐프의 부족등을 보완하고 동적인 요소들을 추가하여 사이트에 재미를 더했습니다. <br />
                                DB연결을 통해 데이터를 담아두고 불러오는등의 작업을 완료한 프로젝트 입니다.
                            </p>
                            <div>
                                <div class="list">
                                    <p class="bold">PERIOD :</p>
                                    <p>2022.11월 초 ~2022.1월 초</p>
                                </div>
                                <div class="list">
                                    <p class="bold">TECHNIQUE :</p>
                                    <p>node,html,css,js,mySql,photoshop,illustrator,figma</p>
                                </div>
                                <div class="list">
                                    <p class="bold">CONFIGURATION :</p>
                                    <p>반응형 웹 + Main + Sub() + DB연결(journal,notice)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="/bfoc">
                    <div>
                        <div class="view b_beige">
                            <div class="b_blue"></div>
                            <h3>VIEW WEBSITE</h3>
                        </div>
                        <div class="explain">
                            <h2 class="kr">부산문화관광축제조직위원회<span>BFOC</span></h2>
                            <p>
                                부산의 대표적인 축제들을 소개하고 관련 정보들을 알려주는 사이트인 부산문화관광축제조직위원회를 리뉴얼한 프로젝트
                                입니다. <br />반응형과 복잡한 구조등을 개선하고 사이트의 목적에 맞는 부위기로 리디자인 하였습니다. <br />또, DB연결을
                                통해 데이터를 담아두고 불러오는등의 작업을 완료한 프로젝트 입니다.
                            </p>
                            <div>
                                <div class="list">
                                    <p class="bold">PERIOD :</p>
                                    <p>2022.11월 초 ~2022.1월 초</p>
                                </div>
                                <div class="list">
                                    <p class="bold">TECHNIQUE :</p>
                                    <p>node,html,css,js,mySql,photoshop,illustrator,figma</p>
                                </div>
                                <div class="list">
                                    <p class="bold">CONFIGURATION :</p>
                                    <p>반응형 웹 + Main + Sub() + DB연결(journal,notice)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            change: false,
        };
    },
    mounted() {
        document.addEventListener("scroll", this.scrollChange);
        // const sec5 = document.getElementsByClassName("section5");

        //밑에 있는 함수를 불러주는 역할
        // console.log(window.scrollY);
        // console.log(window.innerHeight);
    },
    methods: {
        scrollChange: function () {
            const vh = window.innerHeight;
            const vw = window.innerWidth;
            // console.log(vw);
            this.title = document.querySelectorAll(".title");
            // if (window.scrollY > 3 * vh && window.scrollY < 3.8 * vh) {
            //     this.change = true;
            //     let num = window.scrollY / vh;
            //     // console.log("start" + num);
            // } else if (window.scrollY <= 3 * vh || window.scrollY >= 3.8 * vh) {
            //     this.change = false;
            // }
            if (vw > 834) {
                if (window.scrollY > 3 * vh && window.scrollY < 3.8 * vh) {
                    this.change = true;
                    let num = window.scrollY / vh;
                    // console.log("start" + num);
                } else if (window.scrollY <= 3 * vh || window.scrollY >= 3.8 * vh) {
                    this.change = false;
                }
            } else {
                // console.log("vh" + vh);
                // console.log("window.scrollY" + window.scrollY);
                if (window.scrollY > 5 * vh && window.scrollY < 6.9 * vh) {
                    this.change = true;
                    let num = window.scrollY / vh;
                    // console.log("vh" + vh);
                    // console.log("window.scrollY" + window.scrollY);
                } else if (window.scrollY <= 5 * vh || window.scrollY >= 6.9 * vh) {
                    this.change = false;
                }
            }
        },
    },
};
</script>
<style scoped>
.left {
    height: auto;
    position: relative;
}
.left > div {
    width: 50vw;
    box-sizing: border-box;
    position: absolute;
    top: 100px;
    left: 0;
}
.left > div > img {
    width: 100%;
}

.left > div > img:nth-child(2) {
    display: none;
}

.left > div.fixed {
    position: fixed;
    top: 0px;
    left: 0%;
    /* transform: translate3d(0, -50%, 0); */
}
.left.b_blue {
    z-index: 100;
}
.right {
    height: fit-content;
}
.right > a {
    display: block;
    width: 100%;
    height: fit-content;
}
.right > a > div {
    position: relative;
    width: 100%;
    padding-top: 53.125%;
    background-color: lightblue;
    overflow: hidden;
}
.explain {
    position: absolute;
    width: 100%;
    height: 0;
    box-sizing: border-box;
    overflow: hidden;
    bottom: 0;
    left: 0;
    background-color: rgba(32, 33, 36, 0.85);
    transition: 1s;
    padding: 0px 25px;
}
.explain p,
.explain h2,
.explain span {
    color: #f3ede4;
}
.explain h2 > span {
    font-size: 22px;
}
.explain p {
    font-size: 16px;
}
.explain > p {
    padding: 50px 0 20px;
    box-sizing: border-box;
}
.explain .list {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 10px;
}
.right > a > div:hover .explain {
    height: 100%;
    transition: 1s;
    padding: 25px 25px 100px;
}
.right > a:nth-child(2) {
    margin: 50px 0;
}
.view {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    width: fit-content;
    z-index: 1;
}
.view .b_blue {
    width: 50px;
    height: 50px;
    background-image: url(../../public/img/poly9_beige.png);
    background-size: 80%;
    background-position: center center;
    background-repeat: no-repeat;
}
.view h3 {
    padding: 0 25px;
    box-sizing: border-box;
    line-height: 50px;
}
@media (max-width: 834px) {
    .left {
        height: 15vh;
        position: relative;
        z-index: 1;
    }
    .left > div {
        top: 0;
        width: 100%;
        height: 15vh;
        background-color: #4885f5;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .left > div > img:nth-child(2) {
        display: block;
        width: 100%;
    }
    .left > div > img:nth-child(1) {
        display: none;
    }

    .left > div.fixed {
        position: fixed;
        top: 0px;
        left: 0%;
        /* transform: translate3d(0, -50%, 0); */
    }
    .right {
        height: 255vh;
    }
    .right > a > div {
        position: relative;
        width: 100%;
        padding-top: 0;
        height: calc(85vh - 80px);
        background-color: lightblue;
    }
    .right > a:nth-child(2) {
        margin: 80px 0;
    }
}
</style>
