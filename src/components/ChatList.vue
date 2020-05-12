<template>
  <div class="chat-list">
    <h3>Chat List</h3>
    <div class="card" v-for="chat in chats" :key="chat.id">
      <router-link :to="{ name: 'chat', params: { id:chat.id } }">
        <h3>{{ chat.name }}</h3>
        <h4>Users:</h4>
        <p v-for="user in chat.users" :key="user">{{ user }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ChatList",
  methods: {
    addMessage: function() {
      if (this.newMessageText) {
        this.$store.dispatch("addMessage", {
          username: this.username,
          content: this.newMessageText
        });
        this.newMessageText = "";
      }
    }
    // updateTodoText: function(todo, newText) {
    //   todos.doc(todo.id).update({ text: newText });
    // },
    // removeTodo: function(todo) {
    //   todos.doc(todo.id).delete();
    // },
    // toggleTodos: function() {
    //   currentTodos =
    //     currentTodos === unFinishedTodos ? finishedTodos : unFinishedTodos;
    //   this.$store.dispatch("bindRef", {
    //     name: "todos",
    //     ref: currentTodos
    //   });
    // }
  },

  computed: mapState(["messages", "chats"])
};
</script>

<style scoped>
</style>
