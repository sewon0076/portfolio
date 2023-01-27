<template>
    <div class="bg">
        <div class="wrap">
            <h2>TO DO LIST</h2>
            <div>
                <div>
                    <calendar />
                </div>
                <div>
                    <toDo />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import toDo from "@/components/toDo.vue";
import calendar from "@/components/calendar.vue";
export default {
    components: {
        toDo,
        calendar,
    },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&family=Nanum+Gothic:wght@400;700;800&display=swap");

.green {
    color: #b5ee40;
}
* {
    font-family: "Montserrat", sans-serif;
}
.kr {
    font-family: "Nanum Gothic", sans-serif;
}
.navy {
    color: #323232;
}
.bg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #ccccfe;
}
.bg > .wrap {
    max-width: 1440px;
    width: 100%;
    height: 80vh;
    background-color: #6660fe;
    padding: 30px;
    box-sizing: border-box;
}
.bg > .wrap > h2 {
    font-size: 32px;
    font-weight: 700;
    color: #fefefe;
    padding-bottom: 15px;
    box-sizing: border-box;
}
.bg > .wrap > div {
    width: 100%;
    display: flex;
    gap: 30px;
    height: calc(100% - 50px);
}
.bg > .wrap > div > div {
    height: 100%;
}
.bg > .wrap > div > div:nth-child(1) {
    width: 40%;
}
.bg > .wrap > div > div:nth-child(2) {
    width: 60%;
}
</style>
