<template>
  <div class="recipe-preview">
    <h5>{{ recipe.recipeName }}</h5>
    <router-link :to="'/recipe/' + recipe.recipeId" :recipe="recipe">View recipe</router-link>
  </div>
</template>

<script>
export default {
  name: "RecipePreview",
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>
  .recipe-preview {
    width: 200px;
    height: 80px;
    border: 1px solid black;
    border-radius: 5px;
  }
</style>