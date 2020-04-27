<template>
  <div class="hello">
    <input v-model="username" placeholder="username" />
    <input v-model="newMessageText" @keyup.enter="addMessage" placeholder="Add new message" />

    <p v-for="message in messages" :key="message.id">{{message}}</p>



    <p>
      For a guide and recipes on how to configure / customize this project,
      <br />check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
        >babel</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
        >eslint</a>
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a>
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a>
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
        >vue-devtools</a>
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HelloWorld",
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
        // messages.add({
        //   username: this.username,
        //   content: this.newMessageText,
        //   created: firebase.firestore.FieldValue.serverTimestamp()
        // });
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

  computed: mapState(["messages"]),

  created: function() {
    this.$store.dispatch("init");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
