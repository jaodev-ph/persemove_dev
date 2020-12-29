<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false  "
        data-target="navbarBasicExample"
        @click="openNav"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item a">Overview</a>
        <div class="navbar-item has-dropdown is-hoverable a">
          <a class="navbar-link">Inquiry</a>

          <div class="navbar-dropdown">
            <a class="navbar-item">Trace and Track</a>
            <a class="navbar-item">Shipping Rate</a>
            <hr class="navbar-divider" />
            <a class="navbar-item">Report an issue</a>
          </div>
        </div>
             <a class="navbar-item a">About</a>
            <a class="navbar-item a">Contact</a>

      </div>
    </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [{ src: 'fb.svg' }, { src: 'ig.svg' }, { src: 'yt.svg' }],
    };
  },
  methods: {
    openNav() {
      const navburger = document.getElementsByClassName('navbar-burger')[0]
        .classList;
      const navmenu = document.getElementsByClassName('navbar-menu')[0]
        .classList;
      const findActive = navmenu.contains('is-active');
      if (findActive) {
        navmenu.remove('is-active');
        navburger.remove('is-active');
      } else {
        navmenu.add('is-active');
        navburger.add('is-active');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  border-bottom: 2px solid rgb(199, 196, 196);
}
.a:hover{
 border-bottom:  3px solid rgb(168, 36, 36);
}
</style>
