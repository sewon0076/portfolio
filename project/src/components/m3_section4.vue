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
            <div class="b_oatmeal p50all">
                <h2 v-bind:class="{ fixed: change }">FUNCTIONS</h2>
                <div class="content">
                    <div class="list">
                        <h3 class="apple">게시판,뉴스 작성 / 수정 / 삭제</h3>
                        <p>
                            게시판과 뉴스를 작성하고 각각의 아이디를 받아와 불러오고 수정 / 삭제가 가능하도록 만들었다. route.js와 db.js가 넘겨주고
                            받아오는 바인딩 작업을 하였다. db.js에서 select from같은 구문을 사용하여 데이터를 저장하고 불러주는 작업을 통해 게시판은
                            가장 최근에 작성된 것 4가지가 메인페이지에서 보여질 수 있도록 만들었고, 카테고리를 정하면 카테고리에 해당하는 색이
                            보여지도록 설정해주었다.
                        </p>
                        <p class="bold comple apple">보완해야 할 점</p>
                        <p></p>
                    </div>
                    <div class="list">
                        <h3 class="apple">예약페이지</h3>
                        <p>
                            원하는 축제 이름과,날짜,시간대,예약자 이름 그리고 전화번호를 입력하면 예약확인 페이지로 넘어가게끔 만들었다. 예약확인
                            페이지에서 한번 정보들을 확인 할 수 있도록 데이터베이스 연결을 해주었다
                        </p>
                        <p class="bold comple apple">보완해야 할 점</p>
                        <p>예약확인 페이지를 따로 만들어 예약자 이름과 전화번호를 넣으면 확인할 수 있는 페이지가 있으면 좋을 것 같다</p>
                    </div>
                    <div class="list">
                        <h3 class="apple">댓글 이벤트</h3>
                        <p>
                            메인 페이지의 가장 하단의 이벤트 섹션을 통해 들어갈 수 있고 댓글을 남기면 추첨을 통해 선물을 드린다는 이벤트 형삭이다.
                            데이터 베이스 연결로 아이디 비밀번호 댓글 내용을 받아와서 화면에는 아이디 내용 작성 날짜만 뜨도록 구현해주었다.
                        </p>
                        <p class="bold comple apple">보완해야 힐 점</p>
                        <p>
                            로그인한 상태를 인식하게 만든다면 불필요하게 아이디 비밀번호를 넣지 않아도 될 것이다. 댓글 작성시 현재 저장되어있는
                            아이디를 불러올 수 있는 방법으로 보완하면 좋을 것 같다.
                        </p>
                    </div>
                    <div class="list">
                        <h3 class="apple">반응형 구현</h3>
                        <p>
                            반응형은 크게 데스크탑, 노트북/태블릿 , 모바일 사이즈로 구현했다. 사이트 디자인이 이미지가 많고 포지션을 사용한 부분들이
                            많아 이미지들이 너무 작아지거나 위치가 무너지지 않는 것에 중점을 두었다. 사이트를 소개하는 about us나 축제들을 소개하는
                            festival페이지들에는 내용이 많아 글자가 너무 작아지지 않도록 반응형을 조절 해주었다.
                        </p>
                    </div>

                    <div class="list">
                        <h3 class="apple">프로젝트 소감</h3>
                        <p>
                            게시판을 작성하고 각각의 아이디를 받아와 불러오고 수정 / 삭제가 가능하도록 만들었다. 또 게시판의 리스트가 가장 최근에
                            작성된것 4개만 메인페이지에서도 볼 수 있도록 연동 시켰다. 아마존 aws에서 제공하는 rds를 사용하여 데이터베이스를
                            저장하였다.
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
            const sec4_0 = document.querySelectorAll(".section4 .sec_wrap>.b_oatmeal");
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
.function h2.fixed {
    background-color: #f3f2ee;
}
.img.func1 > div {
    background-image: url(../../public/img/s_notice.gif);
}
.img.func2 > div {
    background-image: url(../../public/img/s_signup.gif);
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
</style>
