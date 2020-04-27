<template>
  <div class="chat-list">
    
    <p v-for="chat in chats" :key="chat.id">{{ chat }}</p>

    <input v-model="username" placeholder="username" />
    <input v-model="newMessageText" @keyup.enter="addMessage" placeholder="Add new message" />
    
    <p v-for="message in messages" :key="message.id">{{message}}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ChatList",
  data: () => ({
    newMessageText: "",
    username: ""
  }),

  methods: {
    addMessage: function() {
      if (this.newMessageText) {
        this.$store.dispatch("addMessage", {
          username: this.username,
          content: this.newMessageText
        })
        this.newMessageText = "";
      }
    },
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

  computed: mapState(["messages", "chats"]),

};
</script>

<style scoped>

</style>
