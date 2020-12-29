<template>
  <div>
    <meta name="viewport" content="width=device-width" />
    <nav-bar />
    <br />
    <home-main />
    <home-footer />
  </div>
</template>

<script>
import NavBar from '../layout/home/navbar.vue';

export default {
  components: {
    NavBar,
    HomeMain: () => import('../layout/home/main.vue'),
    HomeFooter: () => import('../layout/home/footer.vue'),
  },
};
</script>
<style>
</style>
