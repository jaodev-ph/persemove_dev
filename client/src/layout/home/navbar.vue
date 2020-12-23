<template>
  <div class="logo-wrapper">
      <div class="logo-bg">
        <div class="logo"></div>
    </div>
  </div>
</template>

<style lang= "scss" scoped>
.logo-wrapper {
  height: 20vh;
  background: rgba(242, 113, 33, 0.4);
}
.logo-bg {
	background: linear-gradient(
		45deg,
		#f09433 0%,
		#e6683c 25%,
		#dc2743 50%,
		#cc2366 75%,
		#bc1888 100%
	);
	position: relative;
	top:50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 50px;
	height: 50px;
	border-radius: 15px;
	box-shadow: 0 0 13px rgba(29, 28, 28, 0.4);
}
.logo-bg .logo {
	position: absolute;
	box-sizing: border-box;
	width: 20px;
	height: 20px;
	border: 5px solid #fff;
	border-radius: 50px;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
}
.logo-bg .logo::before {
	position: absolute;
	content: "";
	height: 40px;
	width: 40px;
	background: transparent;
	border: 3px solid #fff;
	border-radius: 15px;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
}
</style>
