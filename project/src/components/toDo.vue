<template>
  <div class="todo_wrap">
    <ul class="lists">
      <li
        v-for="(listItem, index) in todoLists"
        :key="listItem"
        @click="complete(listItem, index)"
      >
        <p class="li_date">{{ listItem.dates }}</p>
        <h3 class="kr green">{{ listItem.title }}</h3>
        <p class="kr li_item navy">{{ listItem.item }}</p>
        <div class="btn" @click="deleteTodo(listItem, index)">-</div>
      </li>
    </ul>
    <div class="write_content">
      <input
        class="placeholder"
        type="text"
        v-model="todoTitle"
        placeholder="Heading"
      />
      <textarea
        cols="30"
        rows="10"
        class="placeholder kr"
        v-model="todoItem"
        placeholder="Content"
      >
      </textarea>
      <div class="date_wrap">
        <label for="">DATE :</label>
        <input type="date" v-model="todoDate" />
      </div>
      <div class="btn" @click="addTodo">+</div>
    </div>
  </div>
</template>
<script>
// import { reactive } from "vue";
export default {
  data() {
    return {
      todoDate: "",
      todoItem: "",
      todoTitle: "",
      todoLists: [],
      showbtn: false,
    };
  },
  // data를 쓰고 있으면 this.뭐라고 적어야함
  methods: {
    addTodo: function () {
      console.log(this.todoItem);
      if (this.todoItem !== "") {
        var obj = {
          dates: this.todoDate,
          item: this.todoItem,
          title: this.todoTitle,
          complete: false,
        };
        //localStorage.setItem 로컬 저장소에 저장한다는 뜻, 콘솔로 찍으면 같음
        console.log(obj);
        localStorage.setItem(this.todoItem, JSON.stringify(obj));
        this.todoLists.push(obj);
        this.todoDate = "";
        this.todoItem = "";
        this.todoTitle = "";
      }
    },
    deleteTodo: function (listItem, index) {
      localStorage.removeItem(listItem.item); //removeItem은 setItem과 같은 함수구문
      this.todoLists.splice(index, 1);
    },
    complete: function (listItem, index) {
      listItem.complete = !listItem.complete;
      //listItem.complete는 false니까 함수가 실행되면 true를 내보내라
      localStorage.removeItem(listItem.item);
      localStorage.setItem(listItem.complete, JSON.stringify(listItem));
    },
    show_btn: function () {
      this.showbtn = !this.showbtn;
    },
  },
  //로컬에 저장해서 보여지게 하기위한 구문
  created: function () {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoLists.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },
};
</script>
<style scoped>
.todo_wrap {
  width: 100%;
  height: 100%;
  display: flex;
  gap: 30px;
}
.lists {
  width: 60%;
  height: 100%;
  overflow: hidden;
}
.lists > li {
  position: relative;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  margin-bottom: 30px;
  height: calc(25% - 22.5px);
  background-color: #fefefe;
  border-radius: 15px;
}
.lists > li:nth-child(4) {
  margin: 0;
}
h3 {
  font-weight: 900;
  font-size: 27px;
}
.li_date {
  font-size: 12px;
  font-weight: 700;
  color: #888888;
}
.li_item {
  position: absolute;
  left: 15px;
  bottom: 15px;
  font-weight: 900;
}
.write_content {
  position: relative;
  width: 40%;
  height: 100%;
  border-radius: 15px;
  background-color: #fefefe;
  padding: 30px;
  box-sizing: border-box;
}
input {
  border: none;
  background-color: transparent;
  line-height: 1.5;
  width: 100%;
  padding-bottom: 30px;
  box-sizing: border-box;
}
input:focus {
  outline: none;
}
.write_content > input:nth-child(1) {
  font-size: 27px;
  font-weight: 700;
  color: #888888;
}
.write_content > textarea {
  width: 100%;
  height: 70%;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 700;
  color: #888888;
}
textarea:focus {
  outline: none;
}
.date_wrap {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}
.date_wrap label {
  font-size: 20px;
  font-weight: 700;
  color: #888888;
}
.date_wrap input {
  width: 60%;
  padding: 0;
}
.btn {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #c0ea6a;
  bottom: 30px;
  right: 30px;
  font-family: 900;
  color: #fefefe;
  font-size: 30px;
}
</style>
