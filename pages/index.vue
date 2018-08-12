<template>
  <article class="home">
    <div v-if="language === 'ko'" class="font-bold">
      관심있는 것을 배우고 만드는 것을 좋아합니다.<br />
      <span class="secondary">
        테니스를 좋아 합니다. 음악을 좋아합니다.<br />
      </span>
      프론트앤드 개발자로 일하고 있는 김성현입니다.<br />
      <span class="secondary">
        솔직하게 소통하는 것을 좋아합니다.<br />
      </span>
      함께 잘 일하는 방법과 문화에 관심이 많습니다.<br />
    </div>
    <div v-else class="font-bold">
      I love to learn and to create things.<br />
      <span class="secondary">
        I love to play tennis. I love to play and listen to music.<br />
      </span>
      Hello, I'm Seonghyeon Kim working as Frontend developer.<br />
      <span class="secondary">
        I love to have open and honest communication.<br />
      </span>
      I am interested in how to work together properly and cultures.<br />
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
@import '~/assets/stylesheets/_variables.scss';

.home {
  display: flex;
  align-items: flex-end;

  padding: 3rem;

  line-height: 1.5;
  font-size: 2rem;
}

@media only screen and (max-width: $screen-md) {
  .home {
    align-items: flex-start;

    padding: 2rem 3rem;
  }
}
</style>