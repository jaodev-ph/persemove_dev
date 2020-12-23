<template>
  <div class="nav">
    <div v-for="(index, link) in links" :key="link.index">
      <p>{{ link.src }}</p>
    </div>
    <div class="nav-wrapper">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <ul class="nav-links">
            <li class="nav-items">
              <a href="">
                <img
                  src="@/assets/img/icons/fb.svg"
                  style="width: 25px; height: 25px"
              /></a>
            </li>
            <li class="nav-items">
              <a href="">
                <img
                  src="@/assets/img/icons/ig.svg"
                  style="width: 25px; height: 25px"
              /></a>
            </li>
            <li class="nav-items">
              <a href="">
                <img
                  src="@/assets/img/icons/yt.svg"
                  style="width: 25px; height: 25px"
              /></a>
            </li>
          </ul>
          <div class="logo">
            <div class="logo-style">
              <a href="#"><img src="@/assets/logo.png" class="pr-1" /></a>
              <h1><legend>AsyncPro</legend></h1>
              <h4>The Official Website</h4>
            </div>
          </div>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            @click="openNav"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start"></div>
        </div>
      </nav>
    </div>
    <div class="tab-wrapper">
      <div class="tab">
        <ul class="tab-item">
          <li>Overview</li>
          <li>Project</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  </div>
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

<style lang="scss">
.tab-wrapper {
  margin: 0 20% 0 20%;
  border: 1px solid black;
  position: relative;
  height: 10vh;
  margin-top: 120px;
  .tab .tab-item {
	display: flex;
	justify-content: center;
    li {
      padding: 10px;
      justify-items: center;
      text-align: center;
      align-items: center;
      cursor: pointer;
    }
    li:before {
      content: "";
      position: relative;
      background: #41b883;
      height: 10px;
      width: 100%;
    }
    li:hover {
      color: #41b883;
    }
  }
}
.nav {
  height: 15rem;
}
.navbar-brand {
  align-items: center;
  .nav-links {
    display: flex;
  }
  .nav-items {
    padding-right: 15px;
  }
}
.elevate {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #77aaff;
  box-shadow: 2px 2px 2px 2px;
}

.logo {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -0%);
  display: inline-block;
  padding: 5px;
  width: 200px;
  height: 200px;
  .logo-style {
    text-align: center;
    img {
      background: white;
      height: 100px;
      padding: 10px;
    }
  }
}

nav {
  align-items: center;
  margin: 0 20% 0 20%;
}
.nav-wrapper {
  border-bottom: 1.5px solid #bebaba;
  border-top: 4px solid #41b883;
}
img {
  transition: transform 0.3s;
}
a img:hover {
  -ms-transform: scale(1.5);
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
}
</style>
