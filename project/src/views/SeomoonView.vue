<template>
    <div class="SeomoonView">
        <a href="https://seomoon-siot.herokuapp.com/" class="view">
            <div class="b_pink">
            VIEW<br />WEBSITE
        </div>
        </a>
        <section1 />
        <section2 />
        <section3 />
        <section4 />
    </div>
</template>
<script>
// @ is an alias to /src
import section1 from "@/components/m1_section1.vue";
import section2 from "@/components/m1_section2.vue";
import section3 from "@/components/m1_section3.vue";
import section4 from "@/components/m1_section4.vue";

export default {
    data() {
        return {
            clientH: "",
        };
    },
    name: "SeomoonView",
    components: {
        section1,
        section2,
        section3,
        section4,
    },
};
</script>
<style scoped>
@import url(../../public/css/m_common.css);
.view{
    position: fixed;
    display: block;
    top:calc(100vh - 150px);
    right:50px;
    width:100px;
    height:100px;
}
.view>div{
    width:100%;
    height:100%;
    border-radius: 50%;
    color:#fff;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
