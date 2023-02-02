<template>
    <div class="left wrap p50all">
        <div class="intro_wrap">
            <div class="title">
                <h4 class="en bold blue">Introduction</h4>
                <div class="b_blue line"></div>
            </div>
            <div class="content p50">
                <p>
                    안녕하세요, 경험을 먹고 자라는 프론트엔드 신입 개발자 21살 김세원입니다. 저는 우연한 기회로 프론트엔드 분야에 발을 들이게
                    되었습니다.<br />저의 전공은 그래픽디자인이고, 코로나로 학교를 휴학하고 지내면서는 외주를 받고 일러스트를 그리는 프리랜서 생활을
                    했었습니다. <br />그러다 거제대학교 웹사이트 메인화면 디자인 의뢰를 받게 되었는데, 홈페이지 관리를 담당하시는 개발자 분과 소통을
                    하려니 제가 웹과 관련된 IT 분야에 너무 무지한 나머지 소통에 어려움을 많이 느껴 이를 극복해보고자 프론트엔드 공부를 시작하게
                    되었습니다. 공부를 하면 할 수록 평소에 큰 의미를 두지 않고 사용해왔던 웹사이트나 어플등을 새로운 관점으로 보게 되었고 모든
                    시장에서 IT란 이미 빼놓을 수 없는 분야이며 개발자의 역량이 얼마나 중요한지도 깨닫게 되었습니다. 그리고 제가 그 개발자 중의 한
                    사람이 되겠습니다.
                </p>
            </div>
        </div>
        <div class="skill_wrap">
            <div class="title">
                <h4 class="en bold blue">Skills</h4>
                <span class="b_blue line"></span>
            </div>
            <div class="content p50">
                <div class="skills">
                    <div class="skills_wrap">
                        <div class="skill">
                            <p class="en bold">HTML</p>
                            <div class="progress_wrap html">
                                <div class="bar b_yellow">
                                    <div class="b_yellow circle"></div>
                                </div>
                            </div>
                        </div>
                        <div class="skill">
                            <p class="en bold">CSS</p>
                            <div class="progress_wrap css">
                                <div class="bar b_yellow">
                                    <div class="b_yellow circle"></div>
                                </div>
                            </div>
                        </div>
                        <div class="skill">
                            <p class="en bold">JavaScript</p>
                            <div class="progress_wrap js">
                                <div class="bar b_yellow">
                                    <div class="b_yellow circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="skill">
                            <p class="en bold">Node.js</p>
                            <div class="progress_wrap node">
                                <div class="bar b_yellow">
                                    <div class="b_yellow circle"></div>
                                </div>
                            </div>
                        </div>
                        <div class="skill">
                            <p class="en bold">Vue.js</p>
                            <div class="progress_wrap vue">
                                <div class="bar b_yellow">
                                    <div class="b_yellow circle"></div>
                                </div>
                            </div>
                        </div>
                        <div class="skill">
                            <p class="en bold">jQuery</p>
                            <div class="progress_wrap jQuery">
                                <div class="bar b_yellow">
                                    <div class="b_yellow circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="skill">
                            <p class="en bold">Illustrator</p>
                            <div class="progress_wrap ai">
                                <div class="bar b_yellow">
                                    <div class="b_yellow circle"></div>
                                </div>
                            </div>
                        </div>
                        <div class="skill">
                            <p class="en bold">Photoshop</p>
                            <div class="progress_wrap ps">
                                <div class="bar b_yellow">
                                    <div class="b_yellow circle"></div>
                                </div>
                            </div>
                        </div>
                        <div class="skill">
                            <p class="en bold">Language - English</p>
                            <div class="progress_wrap language">
                                <div class="bar b_yellow">
                                    <div class="b_yellow circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="certi_wrap">
            <div class="title">
                <h4 class="en bold blue">Certification</h4>
                <span class="b_blue line"></span>
            </div>
            <div class="content p50">
                <p>IELTS each 6.5 <span class="bold">(TOEIC 900 ~ 955 해당)</span></p>
                <p>2022.09 ~ 2023.02 vue 활용 프론트엔드 국비지원 수료</p>
            </div>
        </div>
        <div class="port_wrap">
            <div class="title">
                <h4 class="en bold blue">Portfolio</h4>
                <span class="b_blue line"></span>
            </div>
            <div class="content p50">
                <p>Git hub :</p>
                <p>Portfolio adddress :</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
p {
    font-size: 18px;
    font-family: "NanumSquare", san-serif;
}
.en {
    font-family: Helvetica, sans-serif;
}
.left.wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
}
.wrap > div {
    width: 100%;
    margin-top: 50px;
}
.wrap > .intro_wrap {
    margin-top: 0;
}
.title {
    width: 100%;
    display: flex;
    gap: 15px;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 25px;
}
.title .line {
    width: 100%;
    height: 2px;
}
.skills {
    display: flex;
    width: 100%;
    height: fit-content;
    gap: 50px;
    /* background-color: lightblue; */
}
.skills > div {
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex: 1;
}
.skills p.en.bold {
    margin-bottom: 20px;
}
.progress_wrap {
    width: 100%;
    height: 15px;
    background-color: #fff;
    border-radius: 10px;
}
.bar {
    position: relative;
    height: 100%;
    border-radius: 10px;
}
.bar > div {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-image: url(../../public/img/poly_line_beige.png);
    background-size: 75%;
    background-position: center center;
    background-repeat: no-repeat;
}
.css .bar {
    width: 90%;
    animation-name: progressing_90;
    animation-duration: 2s;
    animation-duration: leaner;
    animation-iteration-count: 1;
}
.js .bar {
    width: 80%;
    animation-name: progressing_80;
    animation-duration: 2s;
    animation-duration: leaner;
    animation-iteration-count: 1;
}
.html .bar {
    width: 95%;
    animation-name: progressing_95;
    animation-duration: 2s;
    animation-duration: leaner;
    animation-iteration-count: 1;
}
.node .bar {
    width: 75%;
    animation-name: progressing_75;
    animation-duration: 2s;
    animation-duration: leaner;
    animation-iteration-count: 1;
}
.vue .bar {
    width: 75%;
    animation-name: progressing_75;
    animation-duration: 2s;
    animation-duration: leaner;
    animation-iteration-count: 1;
}
.jQuery .bar {
    width: 80%;
    animation-name: progressing_80;
    animation-duration: 2s;
    animation-duration: leaner;
    animation-iteration-count: 1;
}
.ai .bar {
    width: 95%;
    animation-name: progressing_95;
    animation-duration: 2s;
    animation-duration: leaner;
    animation-iteration-count: 1;
}
.ps .bar {
    width: 80%;
    animation-name: progressing_80;
    animation-duration: 2s;
    animation-duration: leaner;
    animation-iteration-count: 1;
}
.language .bar {
    width: 95%;
    animation-name: progressing_95;
    animation-duration: 2s;
    animation-duration: leaner;
    animation-iteration-count: 1;
}
@keyframes progressing_95 {
    from {
        width: 0;
    }
    to {
        width: 95%;
    }
}
@keyframes progressing_90 {
    from {
        width: 0;
    }
    to {
        width: 90%;
    }
}
@keyframes progressing_80 {
    from {
        width: 0;
    }
    to {
        width: 80%;
    }
}
@keyframes progressing_75 {
    from {
        width: 0;
    }
    to {
        width: 75%;
    }
}
</style>
