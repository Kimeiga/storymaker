<template>
  <div class="container">
    <nav class="nav">
      <div class="nav-left">
        <a class="brand" href="#">Storymaker</a>
        <div class="tabs">
          <a>Home</a>
          <a class="active">Github</a>
        </div>
      </div>
      <div class="nav-right">
        <a class="button outline">{{ username }}</a>
      </div>
    </nav>
    <section>
      <router-view />
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "app",
  created: function() {
    this.$store.dispatch("init");
  },
  computed: {
    ...mapState(["username"])
  }
};
</script>

<style>
/* @import url(chota.css) */

:root {
  --color-primary: #da1d50 !important; /* brand color */
  /* --grid-maxWidth: 108rem; max container width 1080px */
}

body {
  /* background: black; */
}
</style>
