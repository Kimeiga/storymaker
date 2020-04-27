<template>
  <div>
    <h2>{{ $route.params }}</h2>
        
    <p v-for="message in messages" :key="message.id">
      {{ message }}
    </p>

  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'chat',
  computed: {
    ...mapState([ "messages" ])
  },
  created: function() {
    this.$store.dispatch('bindToChat', { id: this.$route.params.id })
    console.log('The id is: ' + this.$route.params.id);
  }
  
}
</script>

<style>
</style>
