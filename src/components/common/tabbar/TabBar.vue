<template>
  <div>
    <div class="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabBar'
}
</script>
<style>
  .tab-bar{
    display: flex;
    background-color: #fff;
    height: 49px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow:  0 -1px 1px rgba(100,100,100,.1);
    z-index: 99;
  }
  
</style>