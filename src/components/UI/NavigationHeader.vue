<template>
  <header>
    <router-link to="/home">home</router-link>
    <router-link to="/favoriterecipes">favorites</router-link>
    <router-link to="/allrecipes">all recipes</router-link>
  </header>
</template>

<script>
export default {
  components: {  },
  name: "NavigationHeader"
}
</script>

<style scoped>
  header {
    display: flex;
    flex-direction: row;
    gap: 50px;
    width: 100%;
    height: 60px;
  }
</style>