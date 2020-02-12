<template>
  <div class="recommend">
    <div class="recommend-item" :key="index" v-for="(item, index) in recommends">
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
    width: 100%;
    font-size: 14px;
    padding: 15px 0;
    border-bottom: 8px solid #eee;
    text-align: center;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item > a > img{
    margin: 0 5%;
    width: 90%;
  }
</style>