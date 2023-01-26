<template>
    <div class="section3">
        <div class="sec_wrap">
            <div class="b_gray p50all">
                <h2 class="navy">DEVELOPE CONCEPT</h2>
                <div class="content">
                    <h3 class="pink">COLOR</h3>
                    <p>
                        야시장이라는 특성을 살리고자 어두운 남색 계열의 색상을 사용하면서, 네온 사인의 느낌을 줄 수 있는 밝고 비비드한 분홍과 노랑을
                        사용했다. 선택한 색상들을 사이트 전반에 사용하여 통일감을 주었다.
                    </p>
                    <h3 class="pink">FONT</h3>
                    <p>
                        사용한 폰트는 영어에는 Gill-Sans, 한국어에는 G마켓 산스를 사용했다. 두 가지 폰트 모두 bold일때 글자체가 굉장히 강해서
                        중요한것을 강조할때 효과적이며, 트렌디한 느낌을 주는 동시에 깔끔하다는 특징이 있다.
                    </p>
                    <h3 class="pink">NEW LAYOUT</h3>
                    <p>
                        1. 데스크탑, 태블릿, 모바일일때 구조를 다르게 잡아 반응형이 가능하도록 만들었다. <br />2. 메인이미지, 홍보배너, 갤러리 그리고
                        로그인 페이지까지 모두 약간의 여백을 제외하고 화면 전체를 사용하는 디자인을 사용했다. <br />3. 흐르는 전광판 효과나 호버시
                        돌아가는 빙고판까지 역동적인 효과들을 주어 사이트가 단조로워 보이지 않게 했다. <br />4. 모집공고/공지사항 같이 중요한 것들은
                        메인페이지에서도 확인이 가능하거나 페이지로 바로 접속할 수 있게 했다. <br />5. 반복되는 헤더 카테고리는 정리하고 자주 들어가는
                        카테고리들 밑에 세부 카테고리를 두어 접근성을 올렸다.
                    </p>
                </div>
            </div>
            <div class="color_p p50all">
                <p>COLOR</p>
                <div><img src="../../public/img/s_colors.png" alt="" /></div>
                <p>PALLETTE</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.b_gray {
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
    width: 200%;
}
.color_p p {
    font-weight: 900;
}
.color_p > div > img {
    width: 100%;
}
</style>
