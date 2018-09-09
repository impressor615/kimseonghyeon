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
      <div v-if="!list.length" class="no-items">
        아직 등록 된 글이 없습니다.
      </div>
    </list-layout>
  </article>
</template>

<script>
import ListLayout from '~/components/ListLayout';
import BlogItem from '~/components/BlogItem';
import WRITINGS from '~/constants/writings';

export default {
  components: {
    ListLayout,
  },
  data: function() {
    const { list } = WRITINGS;
    return {
      list,
    };
  },
};
</script>

<style lang="scss" scoped>
.no-items {
  margin: 2rem;

  font-size: 1.2rem;
}
</style>
