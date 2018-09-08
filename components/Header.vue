<template>
  <section class="header">
    <header>
      <nuxt-link
        v-if="!isBackShowing"
        @click.native="onHomeClick"
        class="gray"
        to="/"
      >
        SEONGHYEON KIM
      </nuxt-link>
      <button
        v-else
        @click="onBackClick"
        class="gray back-btn"
      >
        &lt;&nbsp;BACK
      </button>
      <button
        class="menu gray"
        :class="{ open }"
        @click="onToggleHeader"
      >
        {{ open ? "CLOSE" : "MENU" }}
        <div class="line-wrapper">
          <span class="line" />
          <span class="line" />
          <span class="line" />
        </div>
      </button>
      <nav class="font-bold" :class="{ open }">
        <nuxt-link
          to="/"
          :class="{ open: isActive[0] }"
          @click.native="onNavItemClick(0)"
        >
          Home
        </nuxt-link>
        <nuxt-link
          to="/projects"
          :class="{ open: isActive[1] }"
          @click.native="onNavItemClick(1)"
        >
          Projects
        </nuxt-link>
        <nuxt-link
          to="/writings"
          :class="{ open: isActive[2] }"
          @click.native="onNavItemClick(2)"
        >
          Writings
        </nuxt-link>
        <div class="lang">
          <button
            :class="{ active: language === 'ko' }"
            @click="onLangClick('ko')"
          >
            KO.
          </button>
          <button
            :class="{ active: language === 'en' }"
            @click="onLangClick('en')"
          >
            EN.
          </button>
        </div>
      </nav>
    </header>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    const path = this.$route.path;
    return {
      open: false,
      isBackShowing: /projects\/.+/.test(path),
      isActive: [
        path === "/",
        /projects/.test(path),
        /writings/.test(path),
      ],
    };
  },

  mounted() {
    this.$router.beforeEach((to, from, next) => {
      const isProject = /projects\/.+/.test(to.path);
      if (isProject) {
        this.isBackShowing = true;
      } 
      if (!isProject && this.isBackShowing) {
        this.isBackShowing = false;
      }
      next();
    });
  },

  methods: {
    onHomeClick: function() {
      const isActive = [true, false];
      this.isActive = isActive;
    },
    onBackClick: function() {
      this.$router.push('/projects');
    },
    onToggleHeader: function() {
      this.open = !this.open;
    },
    onLangClick: function(lang) {
      this.$store.commit('SET_LANG', lang);
      this.onToggleHeader();
    },
    onNavItemClick: function(navIndex) {
      const isActive = [false, false];
      isActive[navIndex] = true;
      this.isActive = isActive;
      this.onToggleHeader();
    }
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

.header {
  position: fixed;
  width: 100%;
  z-index: $header-zindex;

  background: $background-color;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: $header-height;
  padding: 0 1.5rem;
}

header .back-btn {
  font-size: 1.15rem;
}

.menu {
  display: flex;
  align-items: center;
}

.menu .line-wrapper {
  display: flex;
  flex-direction: column;
  
  margin-left: .6rem;
}

.menu .line-wrapper .line {
  display: inline-block;
  height: 2px;
  width: 20px;

  background-color: $secondary-color;
}

.menu .line-wrapper .line:not(:first-child) {
  margin-top: 5px;
};

.menu.open .line-wrapper .line:not(:first-child) {
  margin-top: 0;
}

.menu.open .line-wrapper .line {
  transition: transform .6s cubic-bezier(.165,.84,.44,1)
}

.menu.open .line-wrapper .line:first-child {
  transform: translateY(3px) rotate(45deg);
}

.menu.open .line-wrapper .line:nth-child(3) {
  transform: translateY(1px) rotate(-45deg);
}

.menu.open .line-wrapper .line:nth-child(2) {
  display: none;
}

nav {
  position: fixed;
  top: $header-height;
  right: -35%;

  transition: right .6s cubic-bezier(.165,.84,.44,1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: calc(100vh - #{$header-height});
  background: black;

  font-size: 2rem;
}

nav.open {
  right: 0;
}

nav a {
  position: relative;
}

nav a:hover::after {
  animation-name: slidein;
  animation-duration: .4s;
}

nav a.open:hover::after {
  animation: none;
}

nav a:hover::after,
nav a.open::after {
  content: ' ';
  left: -10%;

  width: 120%;
  height: 20px;

  background: rgba(45, 45, 45, 0.9);
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  z-index: -1;
}

nav a:not(:first-child) {
  margin-top: 1.5rem;
}

.lang {
  position: absolute;
  top: 5%;
  right: 5%;

  font-size: 1rem;
}

.lang button {
  color: $secondary-color;
}

.lang button.active {
  color: $primary-color;
  font-weight: $font-bold;
}

@keyframes slidein {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@media only screen and (max-width: $screen-md) {
  nav {
    right: -100%;
    width: 100%;
  }
}
</style>