<template>
  <h2 v-if="storeState.recipes.length < 1">Нет рецептов :(</h2>
  <h2 v-else>Все рецепты:</h2>
  <recipe-list :recipes="storeState.recipes"/>
</template>

<script>
import recipeList from "@/components/RecipesBlock/RecipeList.vue";
export default {
  name: "AllRecipes",
  components: {recipeList},
  computed: {
    storeState() {
      return this.$store.state
    }
  }
}
</script>

<style scoped>

</style>