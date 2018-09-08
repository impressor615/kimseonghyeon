<template>
  <article>
    <div class="writing-container" v-html="mdHtml" />
  </article>
</template>

<script>
import marked from 'marked';
import WRTINGS from '~/constants/writings';

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
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/stylesheets/_variables.scss';

.writing-container {
  padding: 3rem;
}

@media only screen and (max-width: $screen-md) {
  .writing-container {
    padding: 1.5rem;
  }
}
</style>