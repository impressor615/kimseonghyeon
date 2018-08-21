<template>
  <article>
    <div class="writings-list">
      <div class="title">WRITINGS</div>
      <div class="list">
        <writing-item
          to="/writings/test-writing"
          keyword="Editing"
          title="4 Tricks to Speed Up"
        ></writing-item>
      </div>
    </div>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';
import WritingItem from '~/components/WritingItem';

export default {
  components: {
    WritingItem,
  },

  computed: {
    ...mapGetters([
      'language',
    ]),
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/stylesheets/_variables.scss';

.writings-list {
  display: flex;
  flex-direction: column;
  padding: 3rem;
}

.writings-list .title {
  font-size: 2.5rem;
  font-weight: bold;
}

.writings-list .list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>