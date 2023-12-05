<template>
  <h1>home page</h1>
  <button @click="triggerModal">add recipe</button>
  <modal-window
      v-if="isModal"
      @modalHandler="triggerModal"
  >
    <RecipeForm/>
  </modal-window>
</template>

<script>
import NavigationHeader from '@/components/UI/NavigationHeader.vue'
import ModalWindow from "@/components/UI/ModalWindow.vue";
import RecipeForm from "@/components/RecipesForm/RecipeForm.vue";

export default {
  name: "Home",
  components: {RecipeForm, ModalWindow, NavigationHeader},
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