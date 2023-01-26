<template>
    <div class="section2">
        <div class="sec_wrap">
            <div class="p50all left">
                <p class="yellow_s">ORIGINAL</p>
                <div><img src="../../public/img/iMac_seomoon.png" alt="" /></div>
                <p class="yellow_s">WEBSITE</p>
            </div>
            <div class="b_gray p50all">
                <h2 class="navy">ANALYSIS</h2>
                <div class="content">
                    <h3 class="pink">PROBLEM</h3>
                    <p>
                        서문 야시장은 대구의 전통적인 시장이며 총 길이 350m에 달하는 대형 야시장이다. 서문야시장 웹사이트는 시장을 방문하거나 매대를
                        이용하고자 하는 상인들이 주로 방문하는 사이트이다. 기존 사이트의 문제점으로는 크게 5가지가 있다.
                        <br />
                        <br />
                        <br />
                        1. 반응형이 되지 않아 모바일이나 태블릿으로 접속한 사용자들에게 불편함을 주었다.
                        <br />2. 중복된 네비게이션으로 세분화가 잘 되어있지 않아 효율적이지 않다. <br />3. 웹사이트를 방문한 사용자들이 흥미를 느낄
                        만한 요소가 전혀 없다. <br />4. 공지사항이나 모집 공고등을 한번에 몰아 넣어 집중이 잘 되지 않았다. <br />5. 통일감을 주는
                        색상이나 이미지가 없어 산만해 보인다.
                    </p>
                    <h3 class="pink">SOLUTION</h3>
                    <p>
                        기존의 사이트는 반응형 대신 전체 넓이 값을 1440px에 맞추어 전체 화면으로 봤을때 다소 답답해 보였다. 따라서 데스크탑, 태블릿,
                        모바일 환경 모두에서 반응 할 수 있도록 제작하고, 화면 전체를 사용하는 디자인을 사용한다. 페이지들은 적절히 세분화 해서
                        사용하는데 불편함이 없게 만들고 중복되는 네비게이션들은 제거한다. 한 곳에 너무 많은 정보가 모여있으면 오히려 정보를 습득하기에
                        어려움이 있으므로 적적히 분배시켜준다. 동적인 요소들을 추가하고, 사이트 전반에 반복되는 컬러 사용으로 통일성을 준다.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.left p {
    font-weight: 900;
}
.b_gray {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
}
</style>
