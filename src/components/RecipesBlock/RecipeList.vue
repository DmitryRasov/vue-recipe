<template>
<!--  <div class="recipe-wrapper">-->
<!--    <div v-for="recipe in storeState.recipes" :key='recipe.recipeId'>-->
<!--      <recipe-card :recipe="recipe" />-->
<!--    </div>-->
<!--  </div>-->

  <div class="recipe-wrapper">
    <div v-for="recipe in storeState.recipes" :key='recipe.recipeId'>
<!--      <recipe-card :recipe="recipe" />-->
    <recipe-preview :recipe="recipe"></recipe-preview>
    </div>
  </div>

</template>

<script>
import recipeCard from "@/components/RecipesBlock/RecipeCard.vue";
import {store} from "@/store";
import RecipePreview from "@/components/RecipesBlock/RecipePreview.vue";

export default {
  name: "RecipeList",
  components: {RecipePreview, recipeCard },
  computed: {
    storeState() {
      return this.$store.state
    }
  },
}
</script>

<style scoped>
  .recipe-wrapper {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }
</style>