<template>
    <div class="section3">
        <div class="sec_wrap">
            <div class="b_black p50all">
                <h2 class="white">DEVELOPE CONCEPT</h2>
                <div class="content">
                    <h3 class="red_w">COLOR</h3>
                    <p class="white kr">
                        라인이 들어간 디자인을 선택했기 때문에 보여지는 색은 블랙&화이트를 주로 했고, 연한 컬러의 색상들은 호버 했을때 보여지거나
                        포인트로 조금 사용했다.
                    </p>
                    <h3 class="red_w">FONT</h3>
                    <p class="white kr">
                        사용한 폰트는 영어에는 ROBOTO, 한국어에는 NOTO SANS KR을 사용했다. 기사가 많고 내용이 많은 사이트이기 때문에 폰트에는 최대한
                        힘을 빼고 제작했다.
                    </p>
                    <h3 class="red_w">NEW LAYOUT</h3>
                    <p class="white kr">
                        1. 네비게이션을 재구성하고 스크롤시 고정을 시켜주면서 스크롤 탑 버튼도 추가해주었다. <br />2. 기존에 간단하던 footer에서, 다른
                        페이지들로 넘어갈 수 있도록 네비게이션 역할을 추가해주었다. <br />3. 기사들의 썸네일이 보여질때 기사의 카테고리를 확인할 수
                        있도록 제작하였다. <br />4. 잡지 구독과 같이 중요한 기능들을 추가하였다. <br />5. 기존의 로고 대신 사이트의 이름이 들어간
                        로고로 대체해주었다.
                    </p>
                </div>
            </div>
            <div class="color_p p50all">
                <p class="red_w">COLOR</p>
                <div><img src="../../public/img/w_colors.png" alt="" /></div>
                <p class="red_w">PALLETTE</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.b_black {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
}
.color_p {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
}
.color_p > div {
    width: 60%;
}
.color_p p {
    font-weight: 900;
}
.color_p > div > img {
    width: 100%;
}
</style>
