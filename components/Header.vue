<template>
  <section>
    <header>
      <div class="gray">SEONGHYEON KIM</div>
      <button
        class="menu gray"
        :class="{ open }"
        @click="onHeaderClick"
      >
        {{ open ? "CLOSE" : "MENU" }}
        <div class="line-wrapper">
          <span class="line" />
          <span class="line" />
          <span class="line" />
        </div>
        <nav>
          <nuxt-link to="/" :class="{ open: isActive[0] }">
            Home
          </nuxt-link>
          <nuxt-link to="/projects" :class="{ open: isActive[1] }">
            Projects
          </nuxt-link>
          <nuxt-link to="/writings" :class="{ open: isActive[2] }">
            Writings
          </nuxt-link>
        </nav>
      </button>
    </header>
  </section>
</template>

<script>
export default {
  data() {
    const path = this.$route.path;
    return {
      open: false,
      isActive: [
        path === "/",
        path === "/projects",
        path === "/writings",
      ],
    };
  },
  methods: {
    onHeaderClick: function() {
      this.open = !this.open;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/stylesheets/_variables.scss';

header {
  display: flex;
  justify-content: space-between;

  padding: 30px;
}

.menu {
  display: flex;
  align-items: center;
}

.menu .line-wrapper {
  display: flex;
  flex-direction: column;
  
  margin-left: 10px;
}

.menu .line-wrapper .line {
  display: inline-block;
  height: 2.3px;
  width: 20px;

  background-color: $secondary-color;
}

.menu .line-wrapper .line:not(:first-child) {
  margin-top: 5px;
};

.menu.open nav {
  right: 0;
}

.menu.open .line-wrapper .line {
  transition: transform .6s cubic-bezier(.165,.84,.44,1)
}

.menu.open .line-wrapper .line:first-child {
  transform: translateY(4px) rotate(45deg);
}

.menu.open .line-wrapper .line:nth-child(3) {
  transform: translateY(-4px) rotate(-45deg);
}

.menu.open .line-wrapper .line:nth-child(2) {
  display: none;
}

.menu nav {
  position: fixed;
  top: 81px;
  right: -35%;

  transition: right .6s cubic-bezier(.165,.84,.44,1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: calc(100vh - 81px);
  background: black;

  font-size: 45px;
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
  margin-top: 25px;
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
  .menu nav {
    right: -100%;
    width: 100%;
  }
}
</style>