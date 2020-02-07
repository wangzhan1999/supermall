<template>
  <div class="back-top">
    <img src="~assets/img/back-top.svg" alt="">
  </div>
</template>
<script>
export default {
  name: "BackTop"
}
</script>
<style scoped>
  .back-top{
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 60px;
    right: 3vw;
    background-color: #fff;
    border-radius: 50%;
  }
  .back-top > img{
    margin: 20% 20%;
    width: 60%;
  }
</style>