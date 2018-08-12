<template>
  <a
    v-if="external"
    :href="to"
    :class="{ inverted }"
    class="link"
    target="_blank"
  >
    <slot></slot>
  </a>
  <nuxt-link
    v-else
    :to="to"
    :class="{ inverted }"
    class="link"
  >
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    external: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      required: true,
    },
    inverted: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/stylesheets/_variables.scss';

.link {
  padding: 1.2rem 2rem;
  background: $primary-color;
  border: 1px solid white;

  color: black;
  font-size: .9rem;
  font-weight: $font-bold;
}

.link:hover {
  color: white;
  background: $background-thicker-color;
}

.link.inverted {
  color: white;
  background: $background-thicker-color;
}

.link.inverted:hover {
  background: $primary-color;
  color: black;
}
</style>