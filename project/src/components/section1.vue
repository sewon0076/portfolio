<template>
    <div class="section1">
        <div class="sec_wrap">
            <div class="p50all b_beige left">
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
                <div class="circle_wrap">
                    <div class="circle">
                        <div class="b_beige b1">
                            <h3 v-on:click="goSection" data-target="intro">INTRODUCTION</h3>
                        </div>
                    </div>
                    <div class="circle">
                        <div class="b_red"><h3 v-on:click="goSection" data-target="projects">PROJECTS</h3></div>
                    </div>
                    <div class="circle">
                        <div class="b_blue"><h3 v-on:click="goSection" data-target="experiences">EXPEREIENCES</h3></div>
                    </div>
                    <div class="circle">
                        <div class="b_beige b2"><h3 v-on:click="goSection" data-target="contact">CONTACT</h3></div>
                    </div>
                </div>
            </div>
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
.circle_wrap {
    padding: 50px 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: c;
    flex-wrap: wrap;
    gap: 25px;
}
.circle {
    width: calc(50% - 35px);
    height: auto;
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
.circle h3 {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    top: 0;
    left: 0;
    line-height: 100%;
}
.left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.b_blue {
    background-image: url(../../public/img/poly_rec_beige.png);
}
.circle > .b_beige.b1 {
    background-image: url(../../public/img/twist_diamond.png);
    background-size: 82%;
}
.b_beige.b2 {
    background-image: url(../../public/img/poly9_yellow.png);
}
.b_red {
    background-image: url(../../public/img/poly_line_beige.png);
}
@media (max-width: 834px) {
    .sec_wrap > .b_black {
        width: 100%;
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .circle_wrap {
        width: 70%;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
    }
    .circle {
        width: calc(50% - 7.5px);
    }
}
@media (max-width: 500px) {
    .circle_wrap {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
    }
    .circle {
        width: calc(50% - 7.5px);
    }
}
</style>
