<template>
    <div class="swipe-list">
      <van-swipe :autoplay='3000' :stop-propagation='false'>
        <van-swipe-item class="swipeitem" :key="index" v-for="(item, index) in banners">
          <a :href="item.link">
            <img :src="item.image" @load='imageLoad' alt="">
          </a>
        </van-swipe-item>
      </van-swipe>
    </div>
</template>
<script>
export default {
  name: "HomeSwipe",
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
  .swipe-list {
    width: 100%;
  }
  .swipe-list img {
    width: 100%;
  }
  .swipeitem > a{
    width: 100%;
    height: 200px;
    display: block;
  }
</style>