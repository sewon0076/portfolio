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
                        <h3 class="mint">게시판 작성 / 수정 / 삭제</h3>
                        <p class="white">
                            게시판을 작성하고 각각의 아이디를 받아와 불러오고 수정 / 삭제가 가능하도록 만들었다. 또 게시판의 리스트가 가장 최근에
                            작성된것 4개만 메인페이지에서도 볼 수 있도록 연동 시켰다. 아마존 aws에서 제공하는 rds를 사용하여 데이터베이스를
                            저장하였다.
                        </p>
                    </div>
                    <div class="list">
                        <h3 class="mint">회원가입 / 로그인</h3>
                        <p class="white">
                            게시판을 작성하고 각각의 아이디를 받아와 불러오고 수정 / 삭제가 가능하도록 만들었다. 또 게시판의 리스트가 가장 최근에
                            작성된것 4개만 메인페이지에서도 볼 수 있도록 연동 시켰다. 성하고 각각의 성하고 각각의 성하고 각각의성하고 각각의성하고
                            각각의성하고 각각의성하고 각각의성하고 각각의성하고 각각의성하고 각각의성하고 각각의성하고 각각의 아마존 aws에서 제공하는
                            rds를 사용하여 데이터베이스를
                            저장하였다.시판을시판을시판을시판을시판을시판을시판을시판을시판을시판을시판을시판을시판을시판을시판을시판을시판을시판을시판을
                        </p>
                    </div>
                    <div class="list">
                        <h3 class="mint">text marquee</h3>
                        <p class="white">text maqqqqqqqqqquw</p>
                    </div>
                    <div class="list">
                        <h3 class="mint">반응형 구현</h3>
                        <p class="white">
                            게시판을 작성하고 각각의 아이디를 받아와 불러오고 수정 / 삭제가 가능하도록 만들었다. 또 게시판의 리스트가 가장 최근에
                            작성된것 4개만 메인페이지에서도 볼 수 있도록 연동 시켰다. 아마존 aws에서 제공하는 rds를 사용하여 데이터베이스를
                            저장하였다.
                        </p>
                    </div>

                    <div class="list">
                        <h3 class="mint">보완해야할점</h3>
                        <p class="white">
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
    padding-top: 51.4635%;
    width: 100%;
    background-size: cover;
    background-position: center center;
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
    background-image: url(../../public/img/seomoon_notice.gif);
}
.list {
    margin: 100px 0;
    box-sizing: border-box;
}
.list:last-child {
    margin-top: 500px;
}
</style>
