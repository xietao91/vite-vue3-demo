<script setup>

const inputContent = ref("");
let todoList = ref([]);
let allTodoList = ref([]);

onMounted(() => {
  initTodoList();
});

const undoNum = computed(() => {
  return todoList.value.filter((todo) => !todo.done).length;
});

const initTodoList = () => {
  const _todoList = localStorage.getItem("todoList");
  const _allTodoList = localStorage.getItem("allTodoList");
  if (_todoList) {
    todoList.value = JSON.parse(_todoList);
  }

  if (_allTodoList) {
    allTodoList.value = JSON.parse(_allTodoList);
  }
};

const enterHandler = () => {
  if (inputContent.value) {
    const content = inputContent.value.trim();
    const key = `${inputContent.value}${Date.now()}`;
    const todo = {
      content,
      done: false,
      key,
      isEdit: ref(false),
    };
    todoList.value.push(todo);
    allTodoList.value.push(todo);
    inputContent.value = "";
    localStorage.setItem("todoList", JSON.stringify(todoList.value));
    localStorage.setItem("allTodoList", JSON.stringify(allTodoList.value));
  }
};

const editTodo = (index) => {
  console.log(index);
  todoList.value[index].isEdit = true;
};

const editInput = (editInput) => {
  if (editInput) {
    editInput.focus();
  }
};

const finishEdit = (index) => {
  todoList.value[index].isEdit = false;
};

const deleteTodo = (index, key) => {
  const _index = allTodoList.value.findIndex((todo) => todo.key === key);
  allTodoList.value.splice(_index, 1);
  todoList.value.splice(index, 1);
  localStorage.setItem("todoList", JSON.stringify(todoList.value));
  localStorage.setItem("allTodoList", JSON.stringify(allTodoList.value));
};

const showAll = () => {
  todoList.value = allTodoList.value;
};

const showUndo = () => {
  todoList.value = allTodoList.value.filter((todo) => !todo.done);
};

const showFinished = () => {
  todoList.value = allTodoList.value.filter((todo) => todo.done);
};

const clearFinished = () => {
  allTodoList.value = allTodoList.value.filter((todo) => !todo.done);
  todoList.value = allTodoList.value;
  localStorage.setItem("todoList", JSON.stringify(todoList.value));
  localStorage.setItem("allTodoList", JSON.stringify(allTodoList.value));
};

const changeDoneState = (done, key) => {
  allTodoList.value.find((todo) => todo.key === key).done = done;
  localStorage.setItem("todoList", JSON.stringify(todoList.value));
  localStorage.setItem("allTodoList", JSON.stringify(allTodoList.value));
};
</script>

<template>
  <div class="container">
    <h3 class="animate__animated animate__bounceInLeft animate__slow">todoList</h3>
    <a-input
      type="text"
      placeholder="?????????"
      v-model="inputContent"
      @keyup.enter="enterHandler"
    />
    <div class="todo-container">
      <div class="todo" v-for="(todo, index) in todoList" :key="todo.key">
        <span style="display: flex; align-items: center;height: 32px;">
          <a-checkbox
            v-model="todo.done"
            @change="changeDoneState(todo.done, todo.key)"
            style="margin-right: 12px"
          />
          <span v-if="!todo.isEdit" @dblclick="editTodo(index)" class="content"
            >{{ index + 1 }}. {{ todo.content }}</span
          >
          <a-input
            :ref="editInput"
            style="display: inline-block"
            type="text"
            v-else
            v-model="todo.content"
            @blur="finishEdit(index)"
          />
        </span>
        <a-button size="mini" type="primary" @click="deleteTodo(index, todo.key)">??????</a-button>
      </div>
    </div>
    <div class="operate-container">
      <span>??????{{ undoNum }}???</span>
      <span @click="showAll" class="btn">??????</span>
      <span @click="showUndo" class="btn">?????????</span>
      <span @click="showFinished" class="btn">?????????</span>
      <span @click="clearFinished" class="btn">???????????????</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 400px;
  margin: 0 auto;
  > a-input {
    width: 100%;
  }
  .todo-container {
    width: 100%;
    margin-top: 12px;

    .todo {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;

      .content {
        cursor: pointer;
      }
    }
  }

  .operate-container {
    display: flex;
    justify-content: space-between;
    .btn {
      cursor: pointer;
    }
  }
}
</style>
