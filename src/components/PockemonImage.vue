<template>
  <div class="pokemon-container">
    <img :src="srcImg" alt="Pockemon" class="hidden-pokemon" srcset="" />

    <img
      v-if="showPockemon"
      :src="srcImg"
      alt="Pockemon"
      class="fade-in"
      srcset=""
    />
  </div>
</template>

<script>
export default {
  props: {
    pockemonId: {
      Number,
      required: true,
    },
    showPockemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  computed: {
    srcImg() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pockemonId}.svg`;
    },
  },
};
</script>

<style scoped>
.pokemon-container {
  height: 200px;
}
img {
  height: 200px;
  position: absolute;
  right: 32%;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>

