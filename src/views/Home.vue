<template>
  <div>
    <h2>Home</h2>
    <h3>Who are you?</h3>
    <p>You are: {{ username }}</p>
    <input v-model="name" placeholder="username" />
    <button @click="setUsername(name)">Set Username</button>
    <hr>

    <ChatList />
  </div>
</template>

<script>
import ChatList from '@/components/ChatList.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'app',
  data: () => ({
    name: ""
  }),
  computed: {
    ...mapState([ "username" ])
  },
  components: {
    ChatList
  },
  methods: {
    ...mapActions([ "setUsername" ])
  }
}
</script>

<style>
</style>
