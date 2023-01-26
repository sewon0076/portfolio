<template>
    <div class="section3">
        <div class="sec_wrap">
            <div class="b_oatmeal p50all">
                <h2>DEVELOPE CONCEPT</h2>
                <div class="content">
                    <h3 class="cobalt">COLOR</h3>
                    <p>
                        축제사이트의 분위기를 주기위해 다채로운 색상을 사용했지만 너무 복잡하지 않게 메인 컬러로 블랙을 사용하여 전체적으로 색을 조금
                        죽여줌과 동시에 포인트 컬러를 돋보이게 해주었다.
                    </p>
                    <h3 class="cobalt">FONT</h3>
                    <p>
                        사용한 폰트는 영어에는 Gill-Sans, 한국어에는 G마켓 산스를 사용했다. 두 가지 폰트 모두 bold일때 글자체가 굉장히 강해서
                        중요한것을 강조할때 효과적이며, 트렌디한 느낌을 주는 동시에 깔끔하다는 특징이 있다.
                    </p>
                    <h3 class="cobalt">NEW LAYOUT</h3>
                    <p>
                        1. 데스크탑, 태블릿, 모바일일때 구조를 다르게 잡아 반응형이 가능하도록 만들었다. <br />2. 흐르는 물결효과와 같이 동적인 효과를
                        추가했다. <br />3. 예약페이지, 댓글 이벤트 참여 페이지등 기존 웹사이트에서는 없었지만 사용자의 참여를 유도하는 섹션을
                        추가했다. <br />4. 축제 소개페이지의 레이아웃을 효과적으로 바꾸어 주었다. <br />5. 기존의 갤러리 형태를 살짝 바꾸어 사용자가
                        사진을 확인하는데 수월하도록 해주었고 동시에 정보도 얻을 수 있도록 해주었다.
                    </p>
                </div>
            </div>
            <div class="color_p p50all">
                <p class="cobalt">COLOR</p>
                <div><img src="../../public/img/b_colors.png" alt="" /></div>
                <p class="cobalt">PALLETTE</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.b_oatmeal {
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
    width: 48%;
    transform: translateX(-4.5%);
}
.color_p p {
    font-weight: 900;
}
.color_p > div > img {
    width: 100%;
}
</style>
