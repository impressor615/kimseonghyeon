<template>
  <article>
    <div class="project-list">
      <div class="title">PROJECTS</div>
      <div class="list">
        <project-item title="MY BLOG" :desc="myblog">
          <div class="icon-list">
            <round-icon type="javascript" />
            <round-icon type="nuxt" />
          </div>
        </project-item>
      </div>
    </div>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';
import ProjectItem from '~/components/ProjectItem';
import RoundIcon from '~/components/RoundIcon';

export default {
  components: {
    ProjectItem,
    RoundIcon,
  },
  computed: {
    myblog() {
      const korean = 'Vue.js와 Nuxt.js를 사용하여 블로그를 만들었습니다.';
      const english = 'I built my blog using Vue.js and Nuxt.js';
      return this.language === 'ko' ? korean : english;
    },

    ...mapGetters([
      'language',
    ]),
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/stylesheets/_variables.scss';

.project-list {
  display: flex;
  flex-direction: column;
  padding: 3rem;
}

.project-list .title {
  font-size: 2.5rem;
  font-weight: bold;
}

.project-list .list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.project-list .icon-list {
  display: flex;
  justify-content: center;
}

.project-list .icon-list > div {
  margin: .2rem;
}
</style>