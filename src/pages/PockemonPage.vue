<template>

   <h1>¿Quien Es Este Pockemon?</h1>

   <!-- im -->
   <pockemon-image :pockemonId="222" :showPockemon="true" />


   <!-- opciones -->
   <pockemon-options />

</template>

<script>
import PockemonImage from '@/components/PockemonImage.vue'
import PockemonOptions from '@/components/PockemonOptions.vue'
export default {
  components: { PockemonImage, PockemonOptions },

}
</script>
