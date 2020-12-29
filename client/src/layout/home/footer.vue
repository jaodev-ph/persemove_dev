<template>
<div class="overlay">
  <div class="footer-wrapper">
    <div class="container">
      <h1>Follow us</h1>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style>
body{
  color:white
}
.overlay {
  height: 400px;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.8);
  bottom: 0;
  position: relative;
  margin-top: 1rem;
}
.footer-wrapper{
  z-index: 1;
}
.footer-wrapper::before {
  height: 10px;
  width: 10px;
  background: white;
}
</style>
