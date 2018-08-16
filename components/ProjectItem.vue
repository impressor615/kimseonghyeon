<template>
  <nuxt-link class="item" :to="to">
    <div class="title">{{ title }}</div>
    <div class="short-desc">{{ desc }}</div>
    <div class="icon-list">
      <slot></slot>
    </div>
    <div class="btn">
      View Project
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    }
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/stylesheets/_variables.scss';

.item {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  width: 12rem;
  min-height: 15rem;

  background: $primary-color;
  color: black;

  margin: 1rem;
  padding: 1rem;
}

.title {
  font-size: 1.2rem;
  font-weight: $font-regular;
  text-align: center;

  margin-bottom: 1.5rem;
}

.short-desc {
  font-size: .9rem;
  font-weight: $font-light;
  text-align: center;
  line-height: 1.8;

  margin: 0 1rem 1rem;
}

.icon-list {
  text-align: center;

  margin-bottom: 1rem;
}

.btn {
  font-size: .9rem;
  font-weight: $font-regular;
  text-align: center;

  border: 2px solid $background-thicker-color;
  padding: .5rem;
}

.item:hover .btn {
  background: black;

  color: white;
}
</style>