<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <slot name="swiperItem"></slot>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
  name: "Swiper",
  mounted() {
    const swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination'
      },
      loop: true,
      speed: 500,
      longSwipesRatio : 0.3,
      autoplay: {
        delay: 3000
      }
    })
  }
}
</script>

<style>                                                   
.swiper-container {
    width: 100vw;
}
</style>