<template>
  <div class="list-container">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="list">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/stylesheets/_variables.scss';

.list-container {
  display: flex;
  flex-direction: column;
  padding: 3rem;
}

.list-container .title {
  font-size: 2.5rem;
  font-weight: bold;
}

.list-container .list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>