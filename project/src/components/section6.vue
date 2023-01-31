<template>
    <div class="section6">
        <div class="sec_wrap b_black p50all">
            <h2 class="beige">CLONE-CODING / TOY-PROJECT</h2>
            <div class="content_wrap">
                <div>
                    <a href="http://sewonprojects.dothome.co.kr/random_food/index.html">
                        <div><p class="bold beige">VIEW PROJECT</p></div>
                    </a>
                </div>
                <div>
                    <a href="/list">
                        <div><p class="bold beige">VIEW PROJECT</p></div>
                    </a>
                </div>
                <div>
                    <a href="http://sewonprojects.dothome.co.kr/random_food/index.html">
                        <div><p class="bold beige">VIEW PROJECT</p></div>
                    </a>
                </div>
                <div>
                    <a href="http://sewonprojects.dothome.co.kr/random_food/index.html">
                        <div><p class="bold beige">VIEW PROJECT</p></div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script></script>
<style scoped>
.sec_wrap {
    display: block;
    height: 50vh;
}
.content_wrap {
    display: flex;
    width: 100%;
    gap: 50px;
    padding-top: 50px;
    box-sizing: border-box;
}
.content_wrap > div {
    flex: 1;
    height: calc(50vh - 200px);
    box-sizing: border-box;
    background-color: aqua;
}
.content_wrap > div > a {
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-size: 85%;
    background-position: center center;
    background-repeat: no-repeat;
}
.content_wrap > div:nth-child(1) > a {
    background-image: url(../../public/img/random.gif);
    background-color: #f4644c;
}
.content_wrap > div:nth-child(2) > a {
    background-image: url(../../public/img/todo.gif);
    background-color: #ccccfe;
}
.content_wrap > div > a > div {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.content_wrap > div > a:hover > div {
    height: 0;
}
@media (max-width: 834px) {
    .sec_wrap {
        display: block;
        height: 100vh;
    }
    .content_wrap {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        gap: 40px;
        padding: 40px 0;
        box-sizing: border-box;
    }
    .content_wrap > div {
        flex: none;
        width: calc(50% - 20px);
        height: calc(50% - 20px);
        box-sizing: border-box;
        background-color: aqua;
    }
}
</style>
