<template>
  <div class="recipe-wrapper">
    <div v-for="recipe in recipes" :key='recipe.recipeId'>
      <recipe-preview :recipe="recipe"></recipe-preview>
    </div>
  </div>

</template>

<script>
import recipeCard from "@/components/RecipesBlock/RecipeCard.vue";
import RecipePreview from "@/components/RecipesBlock/RecipePreview.vue";

export default {
  name: "RecipeList",
  components: {RecipePreview, recipeCard },
  props: {
    recipes: {
      type: Object,
      required: true
    }
  },
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
    padding: 0 15px;
  }
</style>