<template>
  <h1 v-if="!pockemon">Espere Porfavor ...</h1>

  <div v-else>
    <h1>¿Quien Es Este Pockemon?</h1>

    <!-- im -->
    <pockemon-image :pockemonId="pockemon.id" :showPockemon="showPockemon" />

    <!-- opciones -->
    <pockemon-options
      :pockemons="pockemonArr"
      @selection="checkAnswer($event)"
    />

    <template v-if="showAnswer">
      <h2 class="fade-id">{{ message }}</h2>
      <button @click="newGame">Nuevo Juego</button>
    </template>
  </div>
</template>

<script>
import PockemonImage from "@/components/PockemonImage.vue";
import PockemonOptions from "@/components/PockemonOptions.vue";
import getPockemonOptions from "@/helpers/GetPockemonOptions";

export default {
  components: { PockemonImage, PockemonOptions },
  data() {
    return {
      pockemonArr: [],
      pockemon: null,
      showPockemon: false,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    async mixPockemonArray() {
      this.pockemonArr = await getPockemonOptions();
      const rand = Math.floor(Math.random() * 4);
      this.pockemon = this.pockemonArr[rand];
    },
    checkAnswer(pockeid) {
      this.showPockemon = true;
      this.showAnswer = true;
      if (pockeid === this.pockemon.id) {
        this.message = `Felicidades Has Acertado: ${this.pockemon.name}`;
      } else {
        this.message = `Opss :(, El Pockemon Correcto es ${this.pockemon.name}`;
      }
    },
    newGame() {
      this.pockemonArr = [];
      this.pockemon = null;
      this.showPockemon = false;
      this.showAnswer = false;
      this.message = "";
      this.mixPockemonArray();
    },
  },
  mounted() {
    this.mixPockemonArray();
  },
};
</script>
