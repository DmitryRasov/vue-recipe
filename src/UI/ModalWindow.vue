<template>
  <div @click="triggerModal" class="modal__background">
    <div @click.stop class="modal-block">
      <slot></slot>
      <new-button :title="'Закрыть'" @click="triggerModal" class="modal__button"></new-button>
    </div>
  </div>
</template>

<script>
import NewButton from "@/UI/NewButton.vue";

export default {
  name: "ModalWindow",
  components: {NewButton},
  data() {
    return {

    }
  },
  methods: {
    triggerModal() {
      this.$emit('modalHandler')
    }
  }
}
</script>

<style scoped>
 .modal__background {
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: rgba(255, 255, 255, 0.51);
   backdrop-filter: blur(5px);
 }
 .modal-block {
   position: relative;
   min-height: 350px;
   width: 300px;
   max-width: 300px;
   border: 1px solid black;
   border-radius: 5px;
   background-color: cadetblue;
 }
 .modal__button {
   position: absolute;
   bottom: 5px;
   right: 5px;
 }
</style>