<template>
    <div class="section1">
        <div class="sec_wrap">
            <div class="p50all b_beige left">
                <div class="arrow_wrap desktop">
                    <p>Click Categories<br />where you wonder</p>
                    <div class="arrow"><img src="../../public/img/arrow_sec1.png" alt="" /></div>
                </div>
                <div class="top">
                    <h1>SEWON<span class="blue">'S</span></h1>
                    <h1>PORTFOLIO</h1>
                </div>
                <div class="bottom">
                    <p class="kr">김세원_SEWON KIM</p>
                    <p class="kr">TEL : 010 5754 8799</p>
                    <p class="kr">E-MAIL : sewon0076@naver.com</p>
                </div>
            </div>
            <div class="p50all b_black">
                <div>
                    <div class="arrow_wrap mobile">
                        <p class="beige">Click Categories<br />where you wonder</p>
                        <div class="arrow"><img src="../../public/img/arrow_sec1_mobile.png" alt="" /></div>
                    </div>
                    <div class="cir_wrap" v-on:click="goSection" data-target="intro">
                        <div class="b_beige circle b1">
                            <h3 class="bold">INTRODUCTION</h3>
                        </div>
                        <h4 class="mobile bold beige">INTRODUCTION</h4>
                    </div>
                    <div class="cir_wrap" v-on:click="goSection" data-target="projects">
                        <div class="b_red circle">
                            <h3 class="bold">PROJECTS</h3>
                        </div>
                        <h4 class="mobile bold beige">PROJECTS</h4>
                    </div>
                    <div class="cir_wrap" v-on:click="goSection" data-target="experiences">
                        <div class="b_blue circle">
                            <h3 class="bold">HOBBY</h3>
                        </div>
                        <h4 class="mobile bold beige">HOBBY</h4>
                    </div>
                    <div class="cir_wrap" v-on:click="goSection" data-target="contact">
                        <div class="b_beige circle b2">
                            <h3 class="bold">CONTACT</h3>
                        </div>
                        <h4 class="mobile bold beige">CONTACT</h4>
                    </div>
                </div>
            </div>
            <!-- <div class="p50all b_black">
                <div class="circle_wrap">
                    <div class="circle">
                        <div class="b_beige b1">
                            <div class="cir_wrap" v-on:click="goSection" data-target="intro"></div>
                            <h3>INTRODUCTION</h3>
                        </div>
                    </div>
                    <div class="circle">
                        <div class="b_red">
                            <div class="cir_wrap" v-on:click="goSection" data-target="projects"></div>
                            <h3>PROJECTS</h3>
                        </div>
                    </div>
                    <div class="circle">
                        <div class="b_blue">
                            <div class="cir_wrap" v-on:click="goSection" data-target="experiences"></div>
                            <h3>EXPEREIENCES</h3>
                        </div>
                    </div>
                    <div class="circle">
                        <div class="b_beige b2">
                            <div class="cir_wrap" v-on:click="goSection" data-target="contact"></div>
                            <h3>CONTACT</h3>
                        </div>
                    </div>
                </div>
                <div class="mobile">
                    <h3>projects</h3>
                    <h3>projects</h3>
                    <h3>projects</h3>
                    <h3>projects</h3>
                </div>
            </div> -->
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        goSection(e) {
            // if (!e.target.matches(".circle")) return;
            // e.preventDefault();

            const section = document.querySelector(`#` + e.target.dataset.target);
            console.log(e.target.dataset.target);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        },
        // goIntro() {
        //     const intro = document.querySelector("#intro");
        //     if (intro) {
        //         intro.scrollIntoView({
        //             behavior: "smooth",
        //         });
        //     }
        // },
        // goProjects() {
        //     const projects = document.querySelector("#projects");
        //     if (projects) {
        //         projects.scrollIntoView({
        //             behavior: "smooth",
        //         });
        //     }
        // },
        // goExperiences() {
        //     const experiences = document.querySelector("#experiences");
        //     if (experiences) {
        //         experiences.scrollIntoView({
        //             behavior: "smooth",
        //         });
        //     }
        // },
        // goContact() {
        //     const contact = document.querySelector("#contact");
        //     if (contact) {
        //         contact.scrollIntoView({
        //             behavior: "smooth",
        //         });
        //     }
        // },
    },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap");
.arrow_wrap.mobile {
    display: none;
}
.left {
    position: relative;
}
.arrow_wrap {
    position: absolute;
    top: 200px;
    /* right: 40px; */
    display: flex;
    animation-name: arrow;
    animation-duration: 0.8s;
    animation-duration: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}
@keyframes arrow {
    from {
        right: 40px;
    }
    to {
        right: 28px;
    }
}
.arrow_wrap p {
    font-family: "Nanum Pen Script", cursive;
    line-height: 0.9;
    transform: translateY(-20%);
    margin-right: 15px;
    /* font-size: 22px; */
}
.arrow {
    width: 150px;
}
.arrow > img {
    width: 100%;
}
.sec_wrap > .b_black {
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.sec_wrap > .b_black > div {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 25px;
}
h4.mobile {
    display: none;
}
.cir_wrap {
    width: calc(50% - 12.5px);
}
.circle {
    position: relative;
    width: 100%;
    padding-top: 100%;
    border-radius: 50%;
    background-size: 82%;
    background-position: center center;
    background-repeat: no-repeat;
    transition: 0.5s ease-in-out;
}
.circle:hover {
    transform: rotate(360deg);
    transition: 1.5s ease-in-out;
}
.circle h3 {
    position: absolute;
    width: fit-content;
    height: fit-content;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
}

/* .circle_wrap {
    width: 100%;
    padding: 50px 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 25px;
}
.circle {
    width: calc(50% - 35px);
    height: auto;
}
.mobile{
    display: none;
}
.circle > div {
    position: relative;
    width: 100%;
    padding-top: 100%;
    box-sizing: border-box;
    border-radius: 50%;
    background-size: 82%;
    background-position: center center;
    background-repeat: no-repeat;
}
.circle > div:hover {
    transform: rotate(360deg);
    transition: 3s;
}
.cir_wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    top: 0;
}
.circle h3 {
    position: absolute;
    width: fit-content;
    height: fit-content;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    line-height: 100%;
    font-size: 28px;
} */
.left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.b_blue {
    background-image: url(../../public/img/poly_rec_beige.png);
}
.circle.b_beige.b1 {
    background-image: url(../../public/img/twist_diamond.png);
    background-size: 82%;
}
.circle.b_beige.b2 {
    background-image: url(../../public/img/poly9_yellow.png);
}
.b_red {
    background-image: url(../../public/img/poly_line_beige.png);
}
@media (max-width: 1440px) {
    .sec_wrap > .b_black > div {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    .cir_wrap {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .circle {
        position: relative;
        width: 200px;
        padding-top: 200px;
        border-radius: 50%;
    }
    .circle h3 {
        display: none;
    }
    h4.mobile {
        display: block;
    }
}
@media (max-width: 1020px) {
    .cir_wrap {
        justify-content: center;
    }
    .circle h3 {
        display: block;
        font-size: 20px;
    }
    h4.mobile {
        display: none;
    }
}
@media (max-width: 834px) {
    .desktop {
        display: none;
    }
    .sec_wrap > .b_black {
        position: relative;
        width: 100%;
        height: 50vh;
        align-items: center;
        padding-bottom: 25px;
        box-sizing: border-box;
    }
    .sec_wrap > .b_black > div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 0;
    }
    .cir_wrap {
        width: 100%;
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 50px;
        padding: 10px 0;
        box-sizing: border-box;
        transition: 0.5s ease-in-out;
    }
    .cir_wrap:hover {
        padding-left: 20px;
        background-color: #3a3b40;
    }

    .circle {
        position: relative;
        width: 9vh;
        padding-top: 9vh;
        border-radius: 50%;
    }
    .circle:hover {
        transform: rotate(0);
        transition: none;
    }
    .circle h3 {
        display: none;
    }
    h4.mobile {
        display: block;
    }
    /* .desktop {
        display: none;
    }
    .sec_wrap > .b_black {
        position: relative;
        width: 100%;
        height: 50vh;
        align-items: center;
        padding-bottom: 0;
        box-sizing: border-box;
    }
    .arrow_wrap.mobile {
        display: none;
        flex-direction: column;
        top: 50%;
        width: 150px;
        align-items: center;
        transform: translateY(-80%) rotate(30deg);
    }
    .arrow_wrap p {
        transform: translate3d(70%, -30%, 0);
        margin-right: 0;
    }

    .arrow {
        width: 50px;
    }
    @keyframes arrow {
        from {
            right: -32%;
        }
        to {
            right: -36%;
        }
    }
    .sec_wrap > .b_black > div {
        position: absolute;
        left: 25px;
        width: 80%;
        height: fit-content;
        gap: 20px;
    }
    .cir_wrap {
        width: calc(50% - 10px);
    }
    .circle {
        position: relative;
        width: 100%;
        padding-top: 100%;
        border-radius: 50%;
    }
    .circle h3 {
        display: block;
        font-size: 18px;
    } */
}
@media (max-width: 500px) {
}
</style>
