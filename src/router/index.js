import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import Home from "@/views/Home.vue";
import AllRecipes from "@/views/AllRecipes.vue";
import FavoriteRecipes from "@/views/FavoriteRecipes.vue";
import RecipeForm from "@/components/RecipesForm/RecipeForm.vue";
import RecipeCard from "@/components/RecipesBlock/RecipeCard.vue";
import NullPage from "@/views/NullPage.vue";
import FindRecipes from "@/views/FindRecipes.vue";

const routes = [
  { path: '/home',  component: Home, meta: {title: 'Главная'} },
  { path: '/allrecipes', component: AllRecipes, meta: {title: 'Все рецепты'} },
  { path: '/favoriterecipes', component: FavoriteRecipes, meta: {title: 'Избранное'} },
  { path: '/newrecipe', component: RecipeForm, meta: {title: 'Добавить рецепт'} },
  { path: '/findrecipes', component: FindRecipes, meta: {title: 'Найти рецепт'} },
  { path: '/recipe/:id', component: RecipeCard},
  { path: '/:catchAll(.*)', component: NullPage, meta: {title: '404'} }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Книга рецептов';
  next();
});

export default router
