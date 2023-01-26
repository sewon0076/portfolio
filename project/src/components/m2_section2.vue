<template>
    <div class="section2">
        <div class="sec_wrap">
            <div class="p50all left">
                <p class="mint">ORIGINAL</p>
                <div><img src="../../public/img/iMac_wouldu.png" alt="" /></div>
                <p class="mint">WEBSITE</p>
            </div>
            <div class="b_black p50all">
                <h2 class="white">ANALYSIS</h2>
                <div class="content">
                    <h3 class="mint">PROBLEM</h3>
                    <p class="white">
                        우주라이크는 천문학과 학생들을 중심으로 만들어져 천문우주 전문 잡지 우주라이크를 제작하고 무료 배포하는 비영리 사이트이다.
                        기존 사이트의 문제점으로는 크게 5가지가 있다.
                        <br />
                        <br />
                        <br />
                        1. 네비게이션이 복잡하고 어디가 어떻게 구분된건지 명확하지 않다. <br />2. 로고로만 사이트를 나타내어 사이트의 이름도 인식하기
                        어렵고 사이트를 소개하는 부분이 눈에 띄지 않는다. <br />3. 메인페이지에서 카테고리 관련없이 저널만 열거하여 이용하기에
                        불편함이 있다. <br />4. 반응형은 되지만 헤더가 고정이 되지 않아 다른페이지로 넘어가기 위해선 스크롤을 해야하며, 이를 위한
                        스트롤 버튼도 존재하지 않아 사용하는데 어려움이 있다 <br />5. 동적인 요소가 없어 다소 단조롭고 사이트에 대한 흥미가 떨어진다
                    </p>
                    <h3 class="mint">SOLUTION</h3>
                    <p class="white">
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
.b_black {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
}
</style>
