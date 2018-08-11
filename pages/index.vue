<template>
  <article class="home">
    <div v-if="language === 'ko'" class="font-bold">
      <span class="secondary">
        프론트앤드 개발자로 일하고 있는 김성현입니다.<br />
      </span>
      관심있는 것을 배우고 만드는 것을 좋아합니다.
    </div>
    <div v-else class="font-bold">
      <span class="secondary">
        Hello, I'm Seonghyeon Kim.<br />
        I Am Working As Frontend Developer.<br />
      </span>
      I Love To Learn And To Create Things.
    </div>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'language',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: flex-end;

  padding: 3rem;

  line-height: 1.5;
  font-size: 2rem;
}
</style>