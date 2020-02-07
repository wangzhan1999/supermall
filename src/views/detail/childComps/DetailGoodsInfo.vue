<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goodsinof">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img :src="item" 
           v-for="(item, index) in detailInfo.detailImage[0].list"
           :key="index"
           @load="imgLoad"
           alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return{
      counter: 0,
      imagesLength:0
    }
  },
  methods: {
    imgLoad() {
      if (++this.counter === this.imagesLength) this.$emit('imgLoad')
    }
  },
  watch: {
    detailInfo() {
      this.imagesLength = this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>

<style scoped>
  .goodsinof{
    padding: 10px 0;
    border-top: 5px solid #f2f5f8;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-list img{
    width: 96vw;
    margin-left: 2vw;
  }
  .info-desc{
    position: relative;
  }
  .start{
    position: absolute;
    left: 5vw;
    width: 30vw;
    height: 1px;
    background-color:#1b1b1b;
    transform: rotateX(180deg); 
  }
  .start::before{
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    background-color: #000;
    
  }
  .end{
    position: absolute;
    right: 5vw;
    width: 30vw;
    height: 1px;
    background-color:#1b1b1b;
    transform: rotateY(180deg);
  }
  .end::before{
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    background-color: #000;
  }
  .desc{
    padding: 10px 7vw;
    font-size: 14px;
    line-height: 20px
  }
  .info-key{
    margin-left: 7vw;
    font-size: 15px;
    color: #1b1b1b;
    padding: 8px 0;
  }
</style>