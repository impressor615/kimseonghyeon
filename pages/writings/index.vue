<template>
  <article>
    <list-layout>
      <div slot="title">WRITINGS</div>
      <div class="no-item">아직 등록된 글이 없습니다.</div>
    </list-layout>
  </article>
</template>

<script>
import ListLayout from '~/components/ListLayout';

export default {
  components: {
    ListLayout,
  },
};
</script>

<style lang="scss" scoped>
.no-item {
  margin: 3rem;

  font-size: 1.1rem;
}
</style>
