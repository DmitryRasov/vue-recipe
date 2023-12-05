<template>
  <h1>home page</h1>
  <new-button :title="'Добавить рецепт'" @click="triggerModal"></new-button>
  <modal-window
      v-if="isModal"
      @modalHandler="triggerModal"
  >
    <RecipeForm/>
  </modal-window>
</template>

<script>
import NavigationHeader from '@/UI/NavigationHeader.vue'
import ModalWindow from "@/UI/ModalWindow.vue";
import RecipeForm from "@/components/RecipesForm/RecipeForm.vue";
import NewButton from "@/UI/NewButton.vue";

export default {
  name: "Home",
  components: {NewButton, RecipeForm, ModalWindow, NavigationHeader},
  data() {
    return {
      isModal: false,
    }
  },
  methods: {
    triggerModal() {
      this.isModal = !this.isModal
    }
  }
}
</script>

<style scoped>

</style>