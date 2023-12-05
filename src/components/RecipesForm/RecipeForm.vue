<template>
  <form @submit.prevent>
    <div>
      <input v-model="recipe.recipeName" type="text" placeholder="Recipe Name">
      <button @click="addNewRecipe(recipe)">add recipe</button>
    </div>
    <div v-for="(ingredient, i) in recipe.ingredients" :key="recipe.recipeId">
      <input type="text" v-model="recipe.ingredients[i]" placeholder="ingredient">
      <button v-if="i === recipe.ingredients.length - 1" @click="addIngredientInput">+</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "RecipeForm",
  data() {
    return {
      recipe: {
        recipeName: "",
        ingredients: [""],
        totalCalories: 0,
      },
    };
  },
  methods: {
    addIngredientInput() {
      this.recipe.ingredients.push("");
    },
    addNewRecipe(recipe) {
      this.recipe.ingredients = this.recipe.ingredients.filter(ingredient => ingredient.trim() !== "")
      const newRecipe = {
        recipeName: recipe.recipeName,
        ingredients: [...recipe.ingredients],
        totalCalories: recipe.totalCalories,
        recipeId: Date.now(),
        isFavorite: false
      };
      if (this.recipe.recipeName && this.recipe.ingredients.length > 0) {
        this.$store.commit("addRecipe", newRecipe);
      }
    },
  },
};
</script>
<style scoped>

</style>