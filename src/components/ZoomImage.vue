<template>
  <div class="wrapper">
    <div class="image">
      <v-zoomer 
        style="width: 500px; height: 700px; border: 2px solid silver;" 
        :zoomingElastic="false" 
        :aspectRatio="0.8"
      >
        <img src="../assets/vendingMachine.jpg" />
      </v-zoomer>
    </div>
  </div>
</template>

<script>
import VueZoomer from 'vue-zoomer';

export default {
  components: {
    VZoomer: VueZoomer.Zoomer,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
}
.image {
  width: 500px;
  height: 0 auto;

  img {
    width: 500px;
    height: 700px;
    object-fit: contain;
    box-sizing: border-box;
  }
}
</style>
