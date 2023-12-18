<template>
  <div class="recipe-preview">
    <router-link class="recipe-preview__link" :to="'/recipe/' + recipe.recipeId" :recipe="recipe">{{ recipe.recipeName }}</router-link>
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 80px;
    border: 1px solid black;
    border-radius: 5px;
  }
</style>