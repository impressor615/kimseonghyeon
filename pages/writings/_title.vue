<template>
  <article>
    <div class="writing-container">
      <div class="title">{{ title }}</div>
      <div class="date">{{ formattedDate }}</div>
      <ul class="keywords">
        <li v-for="keyword in keywords" :key="keyword">
          {{ keyword }}
        </li>
      </ul>
      <div v-html="mdHtml" class="content"></div>
    </div>
  </article>
</template>

<script>
import marked from 'marked';
import WRTINGS from '~/constants/writings';
import { formattedDate } from '~/utils/dateUtils';

export default {
  middleware: ['checkParams'],

  async asyncData({ params, app }) {
    const { title } = params;
    const content = WRTINGS.list.find((writing) => writing.key === title);
    try {
      const writing = await app.$axios.$get(`/writings/${title}.md`);
      return { writing, ...content };
    } catch (e) {
      return { ...content };
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
      ],
    };
  },

  computed: {
    mdHtml() {
      return this.writing ? marked(this.writing) : '';
    },
    formattedDate() {
      return formattedDate(this.published_date);
    }
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/stylesheets/_variables.scss';

.writing-container {
  padding: 3rem;
}

.title {
  font-size: 2rem;
  font-weight: $font-bold;

  margin-bottom: 1.5rem;
}

.date {
  font-weight: $font-thin;

  margin-bottom: 1rem;
}

.keywords {
  display: flex;
  flex-wrap: wrap;
  width: 50%;

  margin-top: 1rem;
}

.keywords li {
  margin: 0 .5rem .5rem 0;
  padding: .3rem .6rem;

  background: gray;
  border-radius: 25px;

  font-size: .8rem;
  font-weight: $font-regular;
  color: black;
}

.content {
  margin-top: 2rem;
}

@media only screen and (max-width: $screen-md) {
  .writing-container {
    padding: 1.5rem;
  }
}
</style>