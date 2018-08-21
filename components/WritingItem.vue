<template>
  <nuxt-link class="item" :to="to">
    <div class="keyword" :class="{ [color]: color }">{{ keyword }}</div>
    <div class="title">{{ title }}</div>
    <div class="date">{{ formattedDate }}</div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    keyword: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'blue',
    },
    date: Date,
  },

  computed: {
    formattedDate() {
      return new Date().toLocaleDateString();
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/stylesheets/_variables.scss';

.item {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  width: 16rem;
  min-height: 14rem;

  background: $primary-color;
  color: black;

  margin: 1rem;
  transition: transform .2s;
}

.item:hover {
  transform: translateY(-10px);
}

.title {
  font-size: 1.2rem;
  font-weight: $font-bold;

  padding-left: 1.8rem;
  padding-right: 1rem;
  margin-bottom: 1.5rem;
}

.keyword {
  font-weight: $font-bold;
  color: rgb(131, 129, 142);

  padding: 0.5rem 1.5rem;
}

.keyword.orange {
  border-left: 5px solid rgb(227, 148, 77);
}

.keyword.blue {
  border-left: 5px solid rgb(104, 105, 225);
}

.date {
  color: rgb(131, 129, 142);
  font-weight: $font-thin;
  font-size: .8rem;

  padding-left: 1.8rem;
  padding-right: 1rem;
}
</style>