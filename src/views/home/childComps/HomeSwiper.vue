<template>
    <swiper>
      <div class="swiper-slide" slot="swiperItem" v-for="item in banners">
       <a :href="item.link"><img :src="item.image" alt="" @load="imageLoad"></a>
      </div>
    </swiper>
</template>
<script>
import Swiper from 'components/content/swiper/Swiper'
export default {
  name: "HomeSwiper",
  data() {
    return {
      isLoad: false
    }
  },
  methods: {
    imageLoad() {
      if(!this.isLoad){
        this.$emit('swiperImgLoad')
        this.isLoad = true;
      }
    }
  },
  props: {
    banners: Array,
    default() {
      return []
    }
  },
  components: {
    Swiper
  }
}
</script>
<style scoped>
  .swiper-slide {
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