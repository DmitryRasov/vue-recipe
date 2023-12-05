<template>
  <h2 v-if="favoriteRecipes.length < 1">No favorite :(</h2>
  <div class="recipe-wrapper">
    <div v-for="recipe in favoriteRecipes" :key='recipe.recipeId'>
      <recipe-preview :recipe="recipe" />
    </div>
  </div>
</template>

<script>
import RecipeCard from "@/components/RecipesBlock/RecipeCard.vue";
import RecipePreview from "@/components/RecipesBlock/RecipePreview.vue";

export default {
  name: "FavoriteRecipes",
  components: {RecipePreview, RecipeCard},
  computed: {
    favoriteRecipes() {
      return this.$store.getters['favoriteRecipes']
    }
  }
}
</script>

<style scoped>
  .recipe-wrapper {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }
</style>