<template>
  <button>
    <slot/>
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "NewButton",
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  button {
    font-family: 'Roboto', sans-serif;
    padding: 7px 17px;
    border: none;
    border-radius: 15px;
    background-color: #ccb2de;
    cursor: pointer;
    transition: .3s;
  }
  button:hover {
    background-color: #E1D5E7;

  }
</style>