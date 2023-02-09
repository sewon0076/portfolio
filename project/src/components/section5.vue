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
                <div class="project project1">
                    <div class="view b_beige" @click="goSeomoon">
                        <div class="b_blue"></div>
                        <h3>VIEW WEBSITE</h3>
                    </div>
                    <router-link to="/seomoon" class="ex_wrap">
                        <div class="explain">
                            <h3 class="kr">서문야시장 <span>seomoon-night market</span></h3>
                            <p>
                                서문야시장의 홈페이지 리뉴얼 작업입니다.<br />
                                구조적인 불편함과 반응형이 되지 않는 등의 문제점들을 보완하면서 새로운 페이지들을 추가하며, DB연결을 통해 데이터를
                                담아두고 불러오는등의 작업을 완료한 프로젝트 입니다.
                            </p>
                            <div>
                                <div class="list">
                                    <p class="bold">제작 기간 :</p>
                                    <p>2022.10월 중순 ~2022.12월 중순</p>
                                </div>
                                <div class="list">
                                    <p class="bold">사용 기술 :</p>
                                    <p>node,html,css,js,mySql,photoshop,illustrator,figma</p>
                                </div>
                                <div class="list">
                                    <p class="bold">프로젝트 구성 :</p>
                                    <p>반응형 웹 + Main + Sub() + DB연결(notice, store , login)</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="mobile_ex p25all">
                    <h3 class="kr">부산문화관광축제조직위원회<span>BFOC</span></h3>
                    <p>
                        부산문화관광축제조직위원회를 리뉴얼한 프로젝트 입니다. <br />반응형과 복잡한 구조등을 개선하고 사이트의 목적에 맞는 분위기로
                        리디자인 하였습니다. <br />또, DB연결을 통해 데이터를 담아두고 불러오는등의 작업을 완료한 프로젝트 입니다.
                    </p>
                    <div>
                        <div class="list">
                            <p class="bold">제작 기간 :</p>
                            <p>2022.11월 초 ~2022.1월 초</p>
                        </div>
                        <div class="list">
                            <p class="bold">사용 기술 :</p>
                            <p>node,html,css,js,mySql,photoshop,illustrator,figma</p>
                        </div>
                        <div class="list">
                            <p class="bold">프로젝트 구성 :</p>
                            <p>반응형 웹 + Main + Sub() + DB연결(journal,notice)</p>
                        </div>
                    </div>
                </div>

                <div class="project project2">
                    <div class="view b_beige" @click="goWouldyou">
                        <div class="b_blue"></div>
                        <h3>VIEW WEBSITE</h3>
                    </div>
                    <router-link to="/wouldyou" class="ex_wrap">
                        <div class="explain">
                            <h3 class="kr">우주라이크 <span>Would you like?</span></h3>
                            <p>
                                천문우주 전문 잡지를 제작하고 배포하는 사이트 우주라이크를 리뉴얼한 프로젝트 입니다.
                                <br />불편한 네비게이션과 컨텐프의 부족등을 보완하고 동적인 요소들을 추가하였습니다. <br />
                                DB연결을 통해 데이터를 담아두고 불러오는등의 작업을 완료한 프로젝트 입니다.
                            </p>
                            <div>
                                <div class="list">
                                    <p class="bold">제작 기간 :</p>
                                    <p>2022.11월 초 ~2022.1월 초</p>
                                </div>
                                <div class="list">
                                    <p class="bold">사용기술 :</p>
                                    <p>node,html,css,js,mySql,photoshop,illustrator,figma</p>
                                </div>
                                <div class="list">
                                    <p class="bold">프로젝트 구성 :</p>
                                    <p>반응형 웹 + Main + Sub() + DB연결(journal,notice)</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="mobile_ex p25all">
                    <h3 class="kr">부산문화관광축제조직위원회<span>BFOC</span></h3>
                    <p>
                        부산문화관광축제조직위원회를 리뉴얼한 프로젝트 입니다. <br />반응형과 복잡한 구조등을 개선하고 사이트의 목적에 맞는 분위기로
                        리디자인 하였습니다. <br />또, DB연결을 통해 데이터를 담아두고 불러오는등의 작업을 완료한 프로젝트 입니다.
                    </p>
                    <div>
                        <div class="list">
                            <p class="bold">제작 기간 :</p>
                            <p>2022.11월 초 ~2022.1월 초</p>
                        </div>
                        <div class="list">
                            <p class="bold">사용 기술 :</p>
                            <p>node,html,css,js,mySql,photoshop,illustrator,figma</p>
                        </div>
                        <div class="list">
                            <p class="bold">프로젝트 구성 :</p>
                            <p>반응형 웹 + Main + Sub() + DB연결(journal,notice)</p>
                        </div>
                    </div>
                </div>

                <div class="project project3">
                    <div class="view b_beige" @click="goBfoc">
                        <div class="b_blue"></div>
                        <h3>VIEW WEBSITE</h3>
                    </div>
                    <router-link to="/bfoc" class="ex_wrap">
                        <div class="explain">
                            <h3 class="kr">부산문화관광축제조직위원회<span>BFOC</span></h3>
                            <p>
                                부산문화관광축제조직위원회를 리뉴얼한 프로젝트 입니다. <br />반응형과 복잡한 구조등을 개선하고 사이트의 목적에 맞는
                                분위기로 리디자인 하였습니다. <br />또, DB연결을 통해 데이터를 담아두고 불러오는등의 작업을 완료한 프로젝트 입니다.
                            </p>
                            <div>
                                <div class="list">
                                    <p class="bold">제작 기간 :</p>
                                    <p>2022.11월 초 ~2022.1월 초</p>
                                </div>
                                <div class="list">
                                    <p class="bold">사용 기술 :</p>
                                    <p>node,html,css,js,mySql,photoshop,illustrator,figma</p>
                                </div>
                                <div class="list">
                                    <p class="bold">프로젝트 구성 :</p>
                                    <p>반응형 웹 + Main + Sub() + DB연결(journal,notice)</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="mobile_ex p25all">
                    <h3 class="kr">부산문화관광축제조직위원회<span>BFOC</span></h3>
                    <p>
                        부산문화관광축제조직위원회를 리뉴얼한 프로젝트 입니다. <br />반응형과 복잡한 구조등을 개선하고 사이트의 목적에 맞는 분위기로
                        리디자인 하였습니다. <br />또, DB연결을 통해 데이터를 담아두고 불러오는등의 작업을 완료한 프로젝트 입니다.
                    </p>
                    <div>
                        <div class="list">
                            <p class="bold">제작 기간 :</p>
                            <p>2022.11월 초 ~2022.1월 초</p>
                        </div>
                        <div class="list">
                            <p class="bold">사용 기술 :</p>
                            <p>node,html,css,js,mySql,photoshop,illustrator,figma</p>
                        </div>
                        <div class="list">
                            <p class="bold">프로젝트 구성 :</p>
                            <p>반응형 웹 + Main + Sub() + DB연결(journal,notice)</p>
                        </div>
                    </div>
                </div>
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
            if (vw > 834) {
                if (window.scrollY > 3 * vh && window.scrollY < 4 * vh) {
                    this.change = true;
                    let num = window.scrollY / vh;
                    // console.log("start" + num);
                } else if (window.scrollY <= 3 * vh || window.scrollY >= 4 * vh) {
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
        goSeomoon: function () {
            console.log("click");
            window.location.href = "https://seomoon-siot.herokuapp.com/";
        },
        goWouldyou: function () {
            window.location.href = "https://wouldyoulike.herokuapp.com/";
        },
        goBfoc: function () {
            window.location.href = "https://bfoc.herokuapp.com/";
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
/* .right > a {
    display: block;
    width: 100%;
    height: fit-content;
    z-index: 0;
} */
.project {
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    /* background-color: lightblue; */
    overflow: hidden;
    margin-bottom: 50px;
}
.project1:hover {
    background-image: url(../../public/img/seomoon.gif);
}
.project2:hover {
    background-image: url(../../public/img/wouldyou.gif);
}
.project3:hover {
    background-image: url(../../public/img/bfoc.gif);
}
.project1 {
    background-image: url(../../public/img/s_main.png);
}
.project2 {
    background-image: url(../../public/img/w_main.png);
}
.project3 {
    background-image: url(../../public/img/b_main.png);
}
.ex_wrap {
    display: block;
    width: 100%;
    height: 0;
    position: absolute;
    box-sizing: border-box;
    overflow: hidden;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.85);
    transition: 1s;
    padding: 0px 25px;
}
.explain {
    width: 100%;
    height: 100%;
}
.explain p,
.explain h3,
.explain span {
    color: #f3ede4;
}
.explain h3 > span {
    font-size: 22px;
}
.explain p {
    font-size: 16px;
}
.explain > p {
    padding: 25px 0 10px;
    box-sizing: border-box;
}
.explain .list {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 10px;
}
.mobile_ex {
    display: none;
}
.right > div:hover .ex_wrap {
    height: 100%;
    transition: 1s;
    padding: 25px 25px 100px;
}
.right > div:nth-child(2) {
    margin: 50px 0;
}
.view {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    width: fit-content;
    z-index: 10;
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
@media (max-width: 1440px) {
    .project {
        margin-bottom: 25px;
    }
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
    .ex_wrap {
        display: none;
    }
    .mobile_ex {
        display: block;
    }
}
</style>
