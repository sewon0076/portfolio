<template>
    <div class="p50all wrap">
        <div class="portrait">
            <img src="" alt="" />
        </div>
        <div class="personal">
            <div class="name">
                <h4 class="bold">김세원</h4>
                <p class="en">Frontend Developer</p>
            </div>
            <div>
                <p class="bold">Birth :</p>
                <p>&nbsp 2001.10.12 (만 21세)</p>
            </div>
            <div>
                <p class="bold">Home :</p>
                <p>&nbsp 서울특별시 노원구 상계동</p>
            </div>
            <div>
                <p class="bold">Phone :</p>
                <p>&nbsp 010 - 5754 -8799</p>
            </div>
            <div>
                <p class="bold">E-mail</p>
                <p>&nbsp sewon0076@naver.com</p>
            </div>
        </div>
        <div class="education p50all">
            <div class="title">
                <h4 class="en bold">Educatuon</h4>
                <div class="b_black line"></div>
            </div>
            <div class="content">
                <p class="bold">2018</p>
                <p>검정고시 졸업</p>
                <p class="bold">2019.09</p>
                <p>GeorgeBrown College, Toronto - Graphic design</p>
                <p class="bold">2020.09</p>
                <p>휴학 (Covid-19)</p>
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
.wrap {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.portrait {
    position: relative;
    width: 70%;
    padding-top: 70%;
    background-color: aliceblue;
    border-radius: 50%;
    box-sizing: border-box;
    overflow: hidden;
}
.portrait > img {
    position: absolute;
    width: 100%;

    top: 0;
    left: 0;
}
.personal {
    width: 100%;
    margin-top: 50px;
}
.personal > div {
    display: flex;
    gap: 15px;
    align-items: baseline;
}
.education {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
}
.name {
    padding-bottom: 25px;
}
.title {
    width: 100%;
    display: flex;
    gap: 15px;
    justify-content: space-between;
    align-items: baseline;
    padding-top: 50px;
    margin-bottom: 25px;
}
.title .line {
    width: 100%;
    height: 2px;
}
.content .bold {
    padding: 20px 0 10px;
    box-sizing: border-box;
}
</style>
