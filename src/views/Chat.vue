<template>
  <div>
    <h2>{{ $route.params }}</h2>
        
    <p v-for="message in messages" :key="message.id">
      {{ message }}
    </p>


    <input v-model="newMessageText" @keyup.enter="addMessage" placeholder="Add new message" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'chat',
  data: () => ({
    newMessageText: ""
  }),
  computed: {
    ...mapState([ "messages", "username" ])
  },
  created: function() {
    this.$store.dispatch('bindToChat', { id: this.$route.params.id })
  },
  methods: {
    addMessage: function() {
      if (this.newMessageText) {
        this.$store.dispatch("addMessage", {
          chatId: this.$route.params.id,
          username: this.username,
          content: this.newMessageText
        })
        this.newMessageText = "";
      }
    },
  }
  
}
</script>

<style>
</style>
