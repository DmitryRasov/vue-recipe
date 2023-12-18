import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [
      {
        recipeName: 'Lasagna',
        ingredients: [
            'flour',
            'eggs',
            'minced beef',
            'tomatoes',
            'herbs'
        ],
        totalCalories: 228,
        recipeId: 1,
        isFavorite: true
      },
      {
        recipeName: 'Dumplings',
        ingredients: [
          'flour',
          'eggs',
          'minced beef',
          'onion',
          'broth'
        ],
        totalCalories: 23423,
        recipeId: 2,
        isFavorite: true
      },
      {
        recipeName: 'Pizza',
        ingredients: [
          'flour',
          'eggs',
          'pepperoni',
          'tomato sauce',
          'basil'
        ],
        totalCalories: 234234,
        recipeId: 3,
        isFavorite: false
      },
    ]
  },
  getters: {
    favoriteRecipes: state => {
      return state.recipes.filter(recipe => recipe.isFavorite === true);
    },
    getRecipeById: state => (id) => {
      const recipe = state.recipes.find(recipe => recipe.recipeId === id)
      return recipe ? recipe : state.recipes[0]
    }
  },
  mutations: {
    addRecipe: (state, newRecipe) => {
      state.recipes.push(newRecipe)
    }
  },
  actions: {
  },
  modules: {
  }
})
