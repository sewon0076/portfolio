<template>
    <div>
        <div class="sec_wrap">
            <div class="p50all b_yellow">
                <ul>
                    <li
                        class="b_beige"
                        v-for="(tab, index) in tabs"
                        :key="index"
                        @click="currents(index)"
                        v-bind:class="{ active: current === index }"
                    >
                        <h4 class="kr">{{ tab.question }}</h4>
                    </li>
                </ul>
            </div>
            <div class="p50all b_beige">
                <h4>ANSWER</h4>
                <span class="b_black"></span>
                <div class="answer_wrap" v-for="(tab, index) in tabs" :key="index" v-show="current == index">
                    <p class="kr">
                        {{ tab.answer }}
                    </p>
                    <p class="kr">
                        {{ tab.answer1 }}
                    </p>
                    <p class="kr">
                        {{ tab.answer2 }}
                    </p>
                    <p class="kr">
                        {{ tab.answer3 }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from "vue";
export default {
    setup() {
        let current = ref(0);
        //인덱스랑 번호를 맞추기 위해 변화할수있는 ref안에 0부터 시작하게끔
        const tabs = [
            {
                question: "어떤 개발자가 되고 싶습니까?",
                answer: "소통하는 개발자가 되고 싶습니다.",
                answer1: "소통이 없으면 사용자의 경험(User Experience)를 알 수 없고,",
                answer2: "소통이 없으면 사용자의 편의(User Interface)를 고려 할 수 없다고 생각합니다.",
                answer3:
                    "무엇보다 모두가 함께 협업해서 하나의 프로젝트를 만들어내는 과정에서, 서로간의 소통을 통해 보다 나은 결과물을 보여주는 그런 개발자가 되고 싶습니다.",
            },
            {
                question: "성격의 장단점은 무엇입니까?",
                answer: "저는 외로움을 많이 타는 성격입니다.",
                answer1: "그래서 저는 사회성이 좋습니다.",
                answer2:
                    "18살부터 타지생활을 시작하면서, 외로움을 견디고 적응하기 위해 했던 노력들이 하나 둘 싸여 모나지 않게 사람들과 어울리는 저를 만들어 주었습니다.",
                answer3: "그리고 이렇게 단점을 극복하고자하는 저의 마음가짐이 저의 가장 큰 장점입니다.",
            },
            { question: "취미는 무엇입니까?", answer: "333333333333333" },
            { question: "당신은 사람은 어떤 사람입니까?", answer: "444444444444" },
        ];
        function currents(index) {
            //클릭하면 current의 값은 현재 클릭한 index의 값으로 바뀐다
            //그리고 그 current(answer에 해당하는 부분)dml 값이 클릭하는 곳의 인덱스와 같으면 (true이면) active라는 클래스가 붙는다
            current.value = index;
            console.log(current);
        }
        return {
            tabs,
            current,
            currents,
        };
    },
};
</script>
<style scoped>
.b_yellow > ul > .b_beige {
    width: 100%;
    height: 100px;
    padding: 25px;
    box-sizing: border-box;
    margin-top: 50px;
    opacity: 0.5;
    transition: 0.5s;
}

.b_yellow > ul > .b_beige.active {
    opacity: 1;
    padding-left: 50px;
    transition: 0.5s;
}
.b_yellow > ul > .b_beige:nth-child(1) {
    margin: 0;
}
.b_beige > h4 {
    line-height: 50px;
}
span.b_black {
    display: block;
    margin-top: 50px;
    width: 100%;
    height: 2px;
}
.answer_wrap {
    padding: 50px 0;
    box-sizing: border-box;
}
</style>
