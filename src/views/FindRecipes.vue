<template>
  <div>
    <input v-model="inputData" type="text"/>
    <new-button title="найти" @click="search(this.inputData)"></new-button>
  </div>
</template>

<script>
import NewButton from "@/UI/NewButton.vue";
import axios from "axios";


export default {
  name: "FindRecipes",
  components: {NewButton},
  data() {
    return {
      inputData: '',
      recipeData: []
    }

  },
  methods: {
    async search(data) {
      console.log(process.env.API_KEY)
      const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${data}&apiKey=${process.env.VUE_APP_API_KEY}`)
      this.recipeData = res.data.results
      this.inputData = ''
      console.log(res.data.results)
    },
  }
}
</script>

<style scoped>

</style>