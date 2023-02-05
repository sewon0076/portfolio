<template>
    <div class="BfocView">
        <div class="cir_btns">
            <div class="b_apple f_cir">VIEW<br />WEBSITE</div>
            <a href="/bfoc">
                <div class="pink_l circle">BFOC</div>
            </a>
            <a href="/seomoon">
                <div class="pink_l circle">SEOMOON</div>
            </a>
            <a href="/">
                <div class="pink_l circle">GO<br />MAIN</div>
            </a>
            <a href="https://seomoon-siot.herokuapp.com/">
                <div class="pink_l circle">VIEW<br />WEBSITE</div>
            </a>
        </div>
        <section1 />
        <section2 />
        <section3 />
        <section4 />
    </div>
</template>

<script>
// @ is an alias to /src
import section1 from "@/components/m3_section1.vue";
import section2 from "@/components/m3_section2.vue";
import section3 from "@/components/m3_section3.vue";
import section4 from "@/components/m3_section4.vue";

export default {
    data() {
        return {
            clientH: "",
        };
    },
    name: "BfocView",
    components: {
        section1,
        section2,
        section3,
        section4,
    },
};
</script>
<style scoped>
@import url(../../public/css/reset.css);
@import url(../../public/css/common.css);
@import url(../../public/css/m_common.css);
.cir_btns {
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 90px;
    height: fit-content;
    display: flex;
    flex-direction: column;
}
.cir_btns > a {
    width: 90px;
    height: 0;
    overflow: hidden;
    transition: 0.4s;
}
.cir_btns:hover {
    gap: 20px;
}
.cir_btns:hover > .f_cir {
    height: 0;
}
.cir_btns:hover > a {
    height: 90px;
    transition: 0.4s;
}

.cir_btns:hover > a > .circle:hover {
    color: #f3f2ee;
    border: none;
    background-color: #ee4b3c;
}
.f_cir {
    width: 90px;
    height: 90px;
    font-size: 14px;
    font-weight: bold;
    color: #f3f2ee;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;
}
.circle {
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-weight: bold;
    color: #ee4b3c;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}
.pink_l {
    border: 2px solid #ee4b3c;
    box-sizing: border-box;
    background-color: #f3f2ee;
}
</style>


