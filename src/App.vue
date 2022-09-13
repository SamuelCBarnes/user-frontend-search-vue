<template>
  <UserSearch />
</template>

<script>
import UserSearch from "./components/UserSearch.vue";

export default {
  name: "App",
  components: {
    UserSearch,
  },
};
</script>

<style>
#app {
  font-family: "Space Mono", monospace;
    background-color: rgb(20, 29,47);
    padding: 5rem 10rem;
    display: inline-flexbox;
    height: 200%;
}
</style>
