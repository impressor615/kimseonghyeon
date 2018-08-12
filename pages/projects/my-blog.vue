<template>
  <article>
    <div class="project">
      <div class="background">
        <div class="title">My Blog</div>
      </div>
      <div class="description">
        <div class="section-wrapper">
          <description title="DESCRIPTION">
            <div v-if="language === 'ko'">
              주로 업무에서 React만으로 프론트앤드 개발을 해왔습니다.
              그래서 저절로 Vue에도 관심이 생기게 되었습니다. 특히나, 최근에
              React로 직접 SSR(Server-Side Rendering)을 구현했었는데,
              지금까지 느꼈었던 불편함과 어려움들이 Nuxt를 사용하면서
              어떤 식으로 해결하고 구성했는 지를 확인하면서 흥미롭다는 생각을 했고,
              직접 사용해보고 싶다는 생각에 Nuxt를 사용해서 다시 제 블로그를 짜보게 되었습니다.
            </div>
            <div v-else>
              I've been usually working using React.
              Event if this is the first time to work using Vue,
              I am always interested in Vue.js too.
              By the way, working on the latest projects,
              I had to build the web application supporting React SSR(Server-side Rendering)
              During the projects periods, I faced a lot of difficulties and problems.
              But, when I came across Nuxtjs and thought that it solves the problems I faced so well.
              That's why I started to re-build my blog using Nuxt.js
            </div>
          </description>
          <description title="TECHNOLOGY">
            <div>
              <div>Javascript</div>
              <div>Vue</div>
              <div>Nuxt</div>
              <div>Scss</div>
            </div>
          </description>
          <description title="YEAR">2018</description>
        </div>
        <div class="btn-group">
          <my-link
            external
            to="https://github.com/impressor615/kimseonghyeon"
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
}

.project .btn-group a {
  flex-basis: 6.8rem;
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