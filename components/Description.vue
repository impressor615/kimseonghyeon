<template>
  <div class="section">
    <div class="title">{{ title }}</div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/stylesheets/_variables.scss';

.section {
  display: flex;
  flex-direction: column;
}

.section .title {
  color: $primary-color;
  font-weight: $font-light;
  font-size: 1.1rem;

  margin-bottom: 1.5rem;
}

.section .content {
  color: $secondary-color;
  font-weight: $font-regular;
  line-height: 1.5;
}
</style>