<template>
  <swiper>
    <div class="swiper-slide" slot="swiperItem" v-for="item in topImgs">
      <img :src="item" alt="">
    </div>
  </swiper>
</template>

<script>
import Swiper from 'components/content/swiper/Swiper'

export default {
  name: "DetailSwiper",
  components: {
    Swiper
  },
  props: {
    topImgs: Array,
    default() {
      return []
    }
  }
}
</script>

<style scoped>
  .swiper-slide {
    height: 300px;
    width: 100%;
  }
  .swiper-slide img{
    width: 100%;
  }
  .swiper-pagination-bullet{
    background-color: rgb(255, 255, 255);
  }
  .swiper-pagination-bullet-active{
    background: rgb(255, 219, 225);
  }
</style>