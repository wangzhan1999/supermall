<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommends:{
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style scoped>
  .recommend{
    display: flex;
    width: 100vw;
    font-size: 14px;
    padding: 15px 0 30px 0;
    border-bottom: 8px solid #eee;
    text-align: center;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 68px;
    height: 68px;
  }
</style>