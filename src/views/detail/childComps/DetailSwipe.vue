<template>
    <div class="swipe-list">
      <van-swipe :autoplay='5000' duration='800'>
        <van-swipe-item class="swipeitem" :key="index" v-for="(item, index) in banners">
          <img :src="item" @load='imageLoad' alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
</template>
<script>
export default {
  name: "DetailSwipe",
  props: {
    banners: Array,
    default() {
      return []
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  methods: {
    imageLoad() {
      if(!this.isLoad){
        this.$emit('swipeImgLoad')
        this.isLoad = true;
      }
    }
  }
}
</script>

<style scoped>
  .swipe-list /deep/ .van-swipe__indicator {
    width: 10px;
    height: 10px;
    opacity: 0.8;
    background-color: white;
  }
  .swipe-list /deep/ .van-swipe__indicator--active {
    background-color: var(--color-hiht-text);
  }
  /* 取消vant的相对定位 */
  .swipe-list /deep/ .van-swipe {
    position: unset;
  }
  .swipe-list {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 270px;
  }
  .swipe-list img {
    margin-top: -50px; 
    width: 100%;
  }
</style>