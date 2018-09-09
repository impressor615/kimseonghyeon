<template>
  <nuxt-link
    class="blog-item"
    :to="to"
  >
    <div class="title">{{ title }}</div>
    <div class="date">{{ formattedDate }}</div>
    <ul class="keywords-container">
      <li
        class="keyword"
        :key="keyword"
        v-for="keyword in keywords"
      >
        {{ keyword }}
      </li>
    </ul>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    keywords: {
      type: Array,
      default: function() {
        return [];
      },
    },
    to: {
      type: String,
      required: true,
    },
  },

  computed: {
    formattedDate() {
      const writingDate = new Date(this.date);
      const year = writingDate.getFullYear();
      let month = writingDate.getMonth() + 1;
      let date = writingDate.getDate();
      if (month < 10) {
        month = `0${month}`;
      }
      if (date < 10) {
        date = `0${date}`;
      }
      return `${year}-${month}-${date}`;
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/stylesheets/_variables.scss';

.blog-item {
  position: relative;

  width: 100%;
  flex-basis: 100%;

  margin-top: 1rem;
  padding: 1rem;
}

.blog-item::before {
  content: '';
  position: absolute;
  background: rgba(255, 255, 255, .1);
  z-index: -1;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  transform: scaleX(0);
  transform-origin: 0 50%;
  transition: transform .3s ease-out;
}

.blog-item:hover::before {
  transform: scaleX(1);
}

.title {
  font-size: 1.3rem;
  font-weight: $font-bold;

  margin-bottom: 1rem;
}

.date {
  font-size: .9rem;
}

.keywords-container {
  display: flex;
  flex-wrap: wrap;
  width: 50%;

  margin-top: 1rem;
}

.keyword {
  margin: 0 .5rem .5rem 0;
  padding: .3rem .6rem;

  background: gray;
  border-radius: 25px;

  font-size: .8rem;
  font-weight: $font-regular;
  color: black;
}

@media only screen and (max-width: $screen-md) {
  .blog-item {
    padding: 0;
    margin-top: 1.5rem;
  }

  .keywords-container {
    width: auto;
  }
}
</style>