<template>
  <article>
    <list-layout>
      <div slot="title">WRITINGS</div>
      <blog-item
        v-for="blog in list"
        :key="blog.title"
        :title="blog.title"
        :date="blog.published_date"
        :keywords="blog.keywords"
        :to="`/writings/${blog.key}`"
      />
      <div v-if="!list.length" class="no-items">{{ noItemText }}</div>
    </list-layout>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';
import ListLayout from '~/components/ListLayout';
import BlogItem from '~/components/BlogItem';
import WRITINGS from '~/constants/writings';

export default {
  components: {
    ListLayout,
    BlogItem,
  },
  data: function() {
    const { list } = WRITINGS;
    return {
      list,
    };
  },
  computed: {
    ...mapGetters([
      'language',
    ]),
    noItemText() {
      return this.language === 'ko' ? '아직 등록된 글이 없습니다.' : 'no writings registered yet!'
    },
  }
};
</script>

<style lang="scss" scoped>
.no-items {
  margin: 2rem;

  font-size: 1.2rem;
}
</style>
