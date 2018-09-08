<template>
  <article>
    <list-layout>
      <div slot="title">PROJECTS</div>
      <project-item
        title="MY BLOG"
        to="/projects/my-blog"
        :desc="myblog"
      >
        <div class="icon-list">
          <round-icon type="javascript" />
          <round-icon type="nuxt" />
        </div>
      </project-item>
      <project-item
        title="REACT SSR"
        to="/projects/react-ssr-boilerplate"
        :desc="reactSSR"
      >
        <div class="icon-list">
          <round-icon type="express" />
          <round-icon type="react" />
          <round-icon type="redux" />
        </div>
      </project-item>
    </list-layout>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';
import ProjectItem from '~/components/ProjectItem';
import RoundIcon from '~/components/RoundIcon';
import ListLayout from '~/components/ListLayout';

export default {
  components: {
    ProjectItem,
    RoundIcon,
    ListLayout,
  },
  computed: {
    myblog() {
      const korean = 'Vue.js와 Nuxt.js를 사용하여 블로그를 만들었습니다.';
      const english = 'I built my blog using Vue.js and Nuxt.js';
      return this.language === 'ko' ? korean : english;
    },
    reactSSR() {
      const korean = 'React.js와 Expres.js를 사용하여 Boilerplate를 만들었습니다.';
      const english = 'I built React SSR Boilerplate using React and Express';
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

.icon-list {
  display: flex;
  justify-content: center;
}

.icon-list > div {
  margin: .2rem;
}
</style>