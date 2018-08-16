<template>
  <article>
    <div class="project">
      <div class="background">
        <div class="title">React SSR Boilerplate</div>
      </div>
      <div class="description">
        <div class="section-wrapper">
          <description title="DESCRIPTION">
            <div v-if="language === 'ko'">
              Frontend 개발을 할 때에 React를
              활용하여 SPA를 주로 만들었습니다.
              그런데, 몇 번 작업해보다 보니 SPA로
              구성 시에 발생하는 단점들(예를 들어, SEO의 한계 등)을 발견하면서 해당
              문제를 해결 하고 싶었습니다. Server-Side Rendering을 알게
              되었고, 학습 삼아 Boilerplate를 만들어
              보았습니다.
            </div>
            <div v-else>
              When working on Frontend development, I've been usually using React
              and develop SPA(Single Page Application). By the way, I realized that
              there are some limitation which can't be sovled if building application as SPA.
              As a solution for this problem, I got to know SSR(Server-Side Rendering).
              I wanted to learn how to build React SSR application. So, I built this project.
            </div>
          </description>
          <description title="TECHNOLOGY">
            <div>
              <div>Javascript</div>
              <div>Express</div>
              <div>React</div>
              <div>Redux</div>
            </div>
          </description>
          <description title="YEAR">2018</description>
        </div>
        <div class="btn-group">
          <my-link
            external
            to="https://github.com/impressor615/react-ssr"
          >
            View Repository
          </my-link>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';
import Description from '~/components/Description';
import MyLink from '~/components/MyLink';

export default {
  components: {
    Description,
    MyLink,
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

.project {
  display: flex;
  flex-direction: column;

  height: 100%;
}

.project .background {
  position: relative;

  background-color: rgb(6, 23, 49);
  color: $primary-color;

  min-height: 12rem;
  flex-basis: 12rem;
}

.project .background .title {
  position: absolute;
  left: 5%;
  bottom: 0;
  transform: translateY(50%);

  font-size: 3.5rem;
}

.project .description {
  flex-grow: 1;
  min-height: 20rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 4rem 5rem;
}

.project .section-wrapper {
  min-height: 16rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin: -1.5rem;
}

.project .section-wrapper > div {
  margin: 1.5rem;
}

.project .section-wrapper > div:first-child {
  width: 25rem;
}

.project .section-wrapper > div:not(:first-child) {
  flex: 1 1 auto;
}

.project .btn-group {
  display: flex;

  min-height: 3.5rem;
}

.project .btn-group a {
  flex-basis: 8rem;
  margin-right: 2rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: $screen-md) {
  .project .background {
    min-height: 10rem;
    flex-basis: 10rem;
  }

  .project .description {
    padding: 5rem 1.2rem;
  }

  .project .section-wrapper > div:first-child {
    width: 100%;
  }

  .project .section-wrapper {
    margin: -1rem;
    padding-bottom: 2rem;
  }

  .project .section-wrapper > div {
    margin: 1rem;
  }

  .project .btn-group {
    flex-direction: column;
  }

  .project .btn-group a {
    margin-right: 0;
    flex-basis: 100%;

    margin-bottom: .5rem;
  }
}
</style>