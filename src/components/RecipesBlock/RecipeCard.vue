<template>
  <div class="recipe-card">
    <div class="recipe-header">
      <new-button class="recipe-header__btn" :title="'Назад'" @click="routeGoBack"></new-button>
      <h3>{{ recipeById.recipeName }}</h3>
    </div>
    <div class="recipe-ingredients_block">
      <span class="recipe-ingredients_block--title">Ingredients:</span>
      <ul class="recipe-ingredients_block--list" >
        <li v-for="(ingredient, i) in recipeById.ingredients" :key="i">
          {{ ingredient }}
        </li>
      </ul>
    </div>
    <new-button class="recipe-card__btn-fav" :title="favoriteButton" @click="favoriteTrigger(recipeById.isFavorite)"></new-button>
  </div>
</template>


<script>
import NewButton from "@/UI/NewButton.vue";

export default {
  name: "recipeCard",
  components: {NewButton},
  methods: {
    favoriteTrigger(state) {
      this.recipeById.isFavorite = !state
    },
    routeGoBack(){
      this.$router.go(-1)
    },
    updatePageTitle() {
      document.title = this.recipeById.recipeName
    }
  },
  computed: {
    recipeById() {
      return this.$store.getters.getRecipeById(Number(this.$route.params.id))
    },
    favoriteButton() {
      return this.recipeById.isFavorite ? 'Убрать из избранного' : 'В избранное'
    }
  },
  mounted() {
    this.updatePageTitle()
  },
}
</script>

<style scoped>
  .recipe-card {
    position: relative;
    border: 1px solid black;
    border-radius: 5px;
    width: 50%;
    min-height: 400px;
    margin-left: 15px;
  }
  .recipe-header {
    display: flex;
    flex-direction: row;
    font-weight: bold;
    margin-left: 5%;
    margin-top: 5%;
  }
  .recipe-header__btn {
    position: absolute;
    bottom: 1px;
    left: 1px;
  }

  .recipe-ingredients_block {
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 20px;
  }
  .recipe-ingredients_block--title {
    font-weight: bold;
  }
  .recipe-ingredients_block--list {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .recipe-card__btn-fav {
    position: absolute;
    bottom: 1px;
    right: 1px;
  }
</style>