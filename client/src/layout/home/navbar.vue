<template>
 <div class="nav-wrapper">
  <nav class="navbar" role="navigation" aria-label="main navigation">

  <div class="navbar-brand">
      <div class="nav-links">
          <ul v-for="link in links" :key="link">
              <li class="nav-items">{{link}}</li>
          </ul>
      </div>
    <a class="navbar-item" href="#">
      <img src="@/assets/logo.png" class="pr-1" width="30" height="30">
      <h1>AsyncPro</h1>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
    @click="openNav">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
    </div>
  </div>
</nav>
</div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        'facebook',
        'instagram',
        'youtube',
      ],
    };
  },
  methods: {
    openNav() {
      const navburger = document.getElementsByClassName('navbar-burger')[0].classList;
      const navmenu = document.getElementsByClassName('navbar-menu')[0].classList;
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

<style>
.elevate {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #77aaff;
    box-shadow:  2px 2px 2px 2px;
}
nav {
    align-items: center;
    margin: 0 20% 0 20%;
}
.nav-wrapper {
    border-bottom: 1.5px solid #bebaba;
}
img {
   transition: transform .3s;
}
a img:hover {
    -ms-transform: scale(1.5);
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
}
</style>
