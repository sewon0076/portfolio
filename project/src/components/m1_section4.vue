<template>
    <div class="section4 function">
        <div class="sec_wrap">
            <div class="p50all left">
                <div class="img_wrap">
                    <div class="img" v-bind:class="{ fixed: change, func1: func1, func2: func2, func3: func3, func4: func4 }">
                        <div></div>
                    </div>
                </div>
            </div>
            <div class="b_gray p50all">
                <h2 class="navy" v-bind:class="{ fixed: change }">FUNCTIONS</h2>
                <div class="content">
                    <div class="list">
                        <h3 class="pink">게시판 작성 / 수정 / 삭제</h3>
                        <p>
                            게시판을 작성하고 각각의 아이디를 받아와 불러오고 수정 / 삭제가 가능하도록 만들었다. 또 게시판의 리스트가 가장 최근에
                            작성된것 4개만 메인페이지에서도 볼 수 있도록 연동 시켰다. 아마존 aws에서 제공하는 rds를 사용하여 데이터베이스를
                            저장하였다.
                        </p>
                        <p class="bold pink comple">보완해야 할 점</p>
                        <p>
                            게시판 리스트 부분에서 넘버링이 자동으로 생성되지 않는 것, 다음 페이지로 넘어가는 부분을 스와이퍼로 대체한 부분들에 대한
                            보완이 필요하다.
                        </p>
                    </div>
                    <div class="list">
                        <h3 class="pink">회원가입 / 로그인</h3>
                        <p>
                            회원가입 페이지에서는 스크립트를 이용한 간단한 유효성 검사를 실시하도록 만들었고, 작성한 아이디 값과 비밀번호를
                            데이터베이스에 저장할 수 있도록 만들어 주었다. 로그인 페이지에서는 회원가입을 통해 디비에 저장되어있는 아이디와 비밀번호가
                            일치하지 않거나 빈칸이 채워지지 않으면 alert을 띄워 유효하지 않음을 알리도록 만들어 주었다.
                        </p>
                        <p class="bold pink comple">보완해야 할 점</p>
                        <p>사용자가 로그인을 헀을때 변화하는 부분이 없어 로그인이 됬는지 안됬는지 확인이 불가한 부분에 대한 보완이 필요하다</p>
                    </div>
                    <div class="list">
                        <h3 class="pink">text marquee</h3>
                        <p>
                            야시장의 전광판과 같은 효과를 주기위해서 text Marquee를 만들었다. marquee태그를 따로 사용하지 않고 바닐라 스크립트로
                            무한히 흐르는 텍스트 효과를 주었다. 배너 하나를 먼저 만든 후, 하나를 더 복제헤서 총 두개의 배너로 구현했습니다. 복제
                            배너는 원본 배너가 왼쪽 바깥 영역으로 완전히 이동하면서 생기는 배너의 view port 영역에 빈 공간을 채워 들어오는 역할을
                            합니다. 실제로는 같은 데이터를 가진 배너 2개가 번갈아가면서 view port를 채우면서 왼쪽으로 이동하는 것이지만, 실제 동작은
                            하나의 배너가 무한 롤링을 하는 것처럼 보이게 된다.
                        </p>
                        <p class="bold pink comple">보완해야 할 점</p>
                        <p>
                            클론을 할때 '/'를 기준으로 글자를 나눌 수 있게끔 만들었는데 한글을 인식하지 못해 한 글자씩 쪼개지는 일이 생긴다. 한글을
                            인식 못한다면 다른 방법을 찾아볼 필요가 있다.
                        </p>
                    </div>
                    <div class="list">
                        <h3 class="pink">반응형 구현</h3>
                        <p>
                            반응형은 데스크탑, 태블릿 , 모바일 등에서 사용할 수 있도록 구현했다. 모바일에서는 카테고리 아이콘으로 네비게이션을
                            대체하고, 4칸 배열을 두칸으로 조정하는 등의 구조적 변화를 주었다.
                        </p>
                        <p class="bold pink comple">보완해야 할 점</p>
                        <p>
                            반응형이 됬을때 호버 효과를 주지 못하는데 이를 대체할 다른 요소들을 따로 넣지 않았다. 약간의 효과를 줄 수 있는 부분을
                            추가해주는 것이 좋을 것 같다.
                        </p>
                    </div>

                    <div class="list">
                        <h3 class="pink">프로젝트 소감</h3>
                        <p>
                            처음 만든 개인 리뉴얼 페이지로 조금 부족한 부분들이 계속 눈에 띄어 아쉬운 점이 조금 남지만 처음의 사이트를 보완한다라는
                            개념보단 사이트의 목적은 그대로 두고 사용자가 더 편리하고 재밌게 느낄 수 있도록 처음부터 다시 만든 사이트에 가까웠다. 이런
                            부분에서 가장 뿌듯함을 많이 느낀 페이지였다.
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
            change_1: false,
        };
    },
    mounted() {
        document.addEventListener("scroll", this.scrollChange);
    },
    methods: {
        scrollChange: function () {
            const sec4_0 = document.querySelectorAll(".section4 .sec_wrap>.b_gray");
            const lists = document.querySelectorAll(".list");
            const sec4 = sec4_0[0];
            console.log("0" + lists[0].offsetTop - 100);
            console.log("1" + lists[1].offsetTop - 100);
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
.img.func1 > div {
    background-image: url(../../public/img/s_notice.gif);
}
.img.func2 > div {
    background-image: url(../../public/img/s_signup.gif);
}
.img.func3 > div {
    background-image: url(../../public/img/text_marquee.gif);
}
.img.func4 > div {
    background-image: url(../../public/img/s_reactive.gif);
}
</style>
