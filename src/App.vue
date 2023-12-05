<template>
  <navigation-header/>
  <router-view/>
</template>

<script>
import navigationHeader from "@/UI/NavigationHeader.vue";
export default {
  name: 'App',
  components: {navigationHeader},
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
}


</script>

<style>

</style>
