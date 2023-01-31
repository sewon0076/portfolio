<template>
    <div class="section4">
        <div class="sec_wrap">
            <div class="p50all left">
                <div class="img" v-bind:class="{ fixed: change, func1: func1, func2: func2, func3: func3, func4: func4 }">
                    <div></div>
                </div>
            </div>
            <div class="b_black p50all">
                <h2 class="white">FUNCTIONS</h2>
                <div class="content">
                    <div class="list">
                        <h3 class="mint kr bold">컨텐츠(JOURNAL / NOTICE) 작성 / 수정 / 삭제</h3>
                        <p class="white kr">
                            우주관련 저널을 작성하고 각각의 번호를 받아와 불러오고 수정 / 삭제가 가능하도록 만들었다. node.js 에서 mySql을 연동하여
                            route.js와 db.js가 넘겨주가 받아오는 바인딩 작업을 하였다. 가장 최근의 6개가 먼저 보여지는 부분과 모든 저널을 볼 수 있는
                            부분을 만들었다. 또, 모든 저널들을 시간 순서/역순 카테고리 별로 볼 수 있도록 만들어 주었다.
                            <br />공지사항을 적을 수 있는 부분도 만들었으며 사용한 테크닉은 위와 같다. 한가지 다른 점은 관리자 아이디 비밀번호를
                            입력해야만 게시글을 작성할 수 있도록 만들어 주었다.
                        </p>
                        <p class="bold mint kr">보완해야 할 점</p>
                        <p class="white kr">아이디 비밀번호 작성시 검열하는 부분이 아직 완성되지 않았다.</p>
                    </div>
                    <div class="list">
                        <h3 class="mint kr bold">좋아요 / 조회수</h3>
                        <p class="white kr">
                            하트를 누르면 하트의 색이 채워지면서 숫자가 올라가고 기사를 클릭해서 확인하면 조회수가 올라가도록 만들었다.
                        </p>
                        <p class="mint bold kr">보완해야 할 점</p>
                        <p class="white kr">
                            첫번쨰로는 데이터베이스와 연결이 되어있지않아 새로고침하면 조회한 내역이 사라진다. 때문에 추후에 연동을 하여 클릭한 정보를
                            가질 수 있게끔 만들 예정이다. 또 구조상의 문제로 하트를 클릭하면 하트가 변화하는 동시에 기사를 읽는 페이지로 넘어간다.
                            구조적인 부분에 대해 조금 더 생각해 봐야할 것 같다.
                        </p>
                    </div>
                    <div class="list">
                        <h3 class="mint kr bold">COUNT DOWN(D-day)</h3>
                        <p class="white kr">
                            2023년의 천체관련 이벤트(개기일식, 반영월식등)의 날자를 확인하는 간단한 js로 카운트 다운 기능을 넣어주었다. 카운트 다운
                            기능을 넣은 섹션을 아코디언으로 만들어 누르면 하나씩 볼 수 있는 기능도 더해주었다.
                        </p>
                        <p class="bold mint kr">보완해야할 점</p>
                        <p class="white kr">
                            현재 코드느 다음번에 있을 천체 이벤트들을 일일히 코드를 작성해야하는 번거로움이 있다. 날짜만 있으면 코드 작성 없이
                            첸체일정을 등록하고 카운트 다운을 받아볼 수 있도록 하면 보완 할 것이다.
                        </p>
                    </div>

                    <div class="list">
                        <h3 class="mint kr bold">반응형 구현</h3>
                        <p class="white kr">
                            반응형은 크게 데스크탑, 노트북/태블릿 , 모바일 사이즈로 구현했다. 사이트 특성상 푸터에 많은 정보들이 모여있어, 이 부분의
                            반응형에 중점을 두었는데, 조금씩 형태가 변화하다 모바일 사이즈일때는 아코디언 형식으로 모두 줄여주는 방식을 선택했다.
                            대부분의 경우 반응형이 되면 화면을 세로로 쓰게끔 만들었고 모바일일때에도 라인을 사용한 디자인이 무너지지 않게끔 디자인
                            하였다.
                        </p>
                        <p class="mint bold kr">보완해야 할 점</p>
                        <p class="white kr">
                            디자인 적인 부분에서는 저널을 보여주는 구조가 조금 아쉽다. 특히 반응형을 했을때 처음 사용했던 구조와 많이 달라지는 부분이
                            아쉽게 느껴져 보완할 예정이다.
                        </p>
                    </div>
                    <div class="list">
                        <h3 class="mint kr bold">프로젝트 소감</h3>
                        <p class="white kr">
                            프로젝트를 하면서 데이터베이스를 넘기고 받아오는 기능들을 반복하여 사용하는게 많은 도움이 되었고, 좋아요나 카운트 등의
                            다양한 스크립트를 짜 볼수 있는 기회가 되었다. 아직 보완해야 할 부분들이 몇가지 있어 약간의 아쉬움이 남는 부분들은 완벽히
                            보완하여 프로젝트를 완성 할 것이다.
                        </p>
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
            func1: true,
            func2: false,
            func3: false,
            func4: false,
        };
    },
    mounted() {
        document.addEventListener("scroll", this.scrollChange);
    },
    methods: {
        scrollChange: function () {
            const sec4_0 = document.querySelectorAll(".section4 .sec_wrap>.b_black");
            const lists = document.querySelectorAll(".list");
            const sec4 = sec4_0[0];
            console.log("0" + lists[0].offsetTop);
            console.log("1" + lists[1].offsetTop);
            if (window.scrollY >= sec4.offsetTop) {
                this.change = true;
            } else {
                this.change = false;
            }
            if (window.scrollY < lists[1].offsetTop) {
                this.func1 = true;
            } else {
                this.func1 = false;
            }
            if (window.scrollY >= lists[1].offsetTop && window.scrollY < lists[2].offsetTop) {
                this.func2 = true;
            } else {
                this.func2 = false;
            }
            if (window.scrollY >= lists[2].offsetTop && window.scrollY < lists[3].offsetTop) {
                this.func3 = true;
            } else {
                this.func3 = false;
            }
            if (window.scrollY >= lists[3].offsetTop) {
                this.func4 = true;
            } else {
                this.func4 = false;
            }
        },
    },
};
</script>
<style scoped>
.sec_wrap > div {
    min-height: 100vh;
    height: auto;
}
.left {
    position: relative;
}
.img {
    position: absolute;
    top: 200px;
    left: 50px;
    width: calc(100% - 100px);
}
.img > div {
    padding-top: 59.2569%;
    width: 100%;
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
}
.func1 {
    background-color: aqua;
}
.func2 {
    background-color: lightcoral;
}
.func3 {
    background-color: lightgreen;
}
.func4 {
    background-color: lightslategrey;
}
.img.fixed {
    position: fixed;
    top: 200px;
    left: 50px;
    width: calc(50% - 100px);
}
.img.func1 > div {
    background-image: url(../../public/img/s_notice.gif);
}
.list {
    margin: 100px 0;
    box-sizing: border-box;
}
.list:last-child {
    margin-top: 500px;
}
p.bold {
    padding: 40px 0 20px;
    box-sizing: border-box;
}
</style>
