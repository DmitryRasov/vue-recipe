<template>
  <form @submit.prevent>
    <div>
      <input v-model="recipe.recipeName" type="text" placeholder="Название рецепта">
      <new-button :title="'Сохранить'" @click="addNewRecipe(recipe)"></new-button>
    </div>
    <div v-for="(ingredient, i) in recipe.ingredients" :key="recipe.recipeId">
      <input type="text" v-model="recipe.ingredients[i]" placeholder="Ингредиент">
      <new-button :title="'+'" v-if="i === recipe.ingredients.length - 1" @click="addIngredientInput"></new-button>
    </div>
  </form>
</template>

<script>
import NewButton from "@/UI/NewButton.vue";

export default {
  name: "RecipeForm",
  components: {NewButton},
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
      if (this.recipe.ingredients.every(ingredient => ingredient.trim() !== "")) {
        this.recipe.ingredients.push("");
      }
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
      } else {
        alert('dfgsdfgsdfg')
      }
    },
  },
};
</script>
<style scoped>

</style>