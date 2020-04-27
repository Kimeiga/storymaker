<template>
  <div id="app">
    <h1>Storymaker</h1>
    <ChatList />
  </div>
</template>

<script>
import ChatList from './components/ChatList.vue'

export default {
  name: 'app',
  components: {
    ChatList
  },
  created: function() {
    this.$store.dispatch("init");
  }
}
</script>

<style>
</style>
