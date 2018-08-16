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
  <div
    v-else-if="type === 'express'"
    :style="{ backgroundImage: `url(${express})` }"
    class="round"
  />
  <div
    v-else-if="type === 'react'"
    :style="{ backgroundImage: `url(${react})` }"
    class="round"
  />
  <div
    v-else-if="type === 'redux'"
    :style="{ backgroundImage: `url(${redux})` }"
    class="round"
  />
</template>

<script>
import Javascript from '~/assets/images/javascript.png';
import Nuxt from '~/assets/images/nuxt.jpg';
import Express from '~/assets/images/express.png';
import React from '~/assets/images/react.png';
import Redux from '~/assets/images/redux.png';

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

    express() {
      return Express;
    },

    react() {
      return React;
    },

    redux() {
      return Redux;
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
