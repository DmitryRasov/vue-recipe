<template>
  <header>
    <router-link class="router-header__link" to="/home">Главная</router-link>
    <router-link class="router-header__link" to="/favoriterecipes">Избранное</router-link>
    <router-link class="router-header__link" to="/allrecipes">Все рецепты</router-link>

    <h1>Recipe App</h1>
  </header>
</template>

<script>

export default {
  name: "NavigationHeader"
}
</script>

<style scoped>
  header {
    display: flex;
    padding: 0 15px;
    flex-direction: row;
    align-items: center;
    gap: 50px;
    width: 100%;
    height: 60px;
  }
  header > h1 {
    margin-left: auto;
  }

</style>