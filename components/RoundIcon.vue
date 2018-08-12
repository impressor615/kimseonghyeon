<template>
  <div
    v-if="type === 'javascript'"
    :style="{ backgroundImage: `url(${javascript})` }"
    class="round"
  />
  <div
    v-else-if="type === 'nuxt'"
    :style="{ backgroundImage: `url(${nuxt})` }"
    class="round"
  />
</template>

<script>
import Javascript from '~/assets/images/javascript.png';
import Nuxt from '~/assets/images/nuxt.jpg';

export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },

  computed: {
    javascript() {
      return Javascript;
    },

    nuxt() {
      return Nuxt;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/stylesheets/_variables.scss';

.round {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 25px;
  border: 1px solid $secondary-color;

  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
