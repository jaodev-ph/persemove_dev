<template>
<div id="app">
      <router-view />
</div>
</template>
<script>
export default {
  name: 'App',
};
</script>
<style lang="scss">
.main{
	margin: 0 30px 0 30px;
}
#app{
	font-family: 'Open Sans-serif';
	font-weight: 500;
	line-height: 1.6;
	font-size: 18px;
}
</style>
