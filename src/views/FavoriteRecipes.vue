<template>
  <h2 v-if="favoriteRecipes.length < 1">Нет избранных :(</h2>
  <h2 v-else>Избранные рецепты:</h2>
  <recipe-list :recipes="favoriteRecipes"/>
</template>

<script>
import RecipeList from "@/components/RecipesBlock/RecipeList.vue";
export default {
  name: "FavoriteRecipes",
  components: {RecipeList},
  computed: {
    favoriteRecipes() {
      return this.$store.getters['favoriteRecipes']
    }
  }
}
</script>

<style scoped>

</style>