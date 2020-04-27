<template>
  <div>
    <h2>Home</h2>
    <ChatList />
  </div>
</template>

<script>
import ChatList from '@/components/ChatList.vue'

export default {
  name: 'app',
  components: {
    ChatList
  }
}
</script>

<style>
</style>
