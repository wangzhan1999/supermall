<template>
  <div class="goodsitem" @click="itemClick">
    <img v-lazy="showImg" alt="" @load="imageLoad">
    <div class="info">
      <p>{{product.title}}</p>
      <span class="price">￥{{product.price}}</span>
      <span class="collect">{{product.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsListItem",
  props: {
    product: {
      type: Object,
      defaults() {
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
      if(this.$route.path.indexOf('/home')) {
        this.$bus.$emit('homeItemImageLoad')
      } else if (this.$route.path.indexOf('/detail')) {
        this.$bus.$emit('detailItemLoad')
      }
      
    },
    itemClick() {
      //  else if(this.product.item_id){
      //   this.$router.push(`/detail/${this.product.item_id}`).catch(err => {})
      // }接口中没有这些商品的详细数据???????
      if (this.product.iid) {
        this.$router.push(`/detail/${this.product.iid}`).catch(err => {});
      } else {
        this.$router.go(0);
      }
    }
  },
  computed: {
    showImg() {
      return this.product.image || this.product.show.img
    }
  }
}
</script>
<style scoped>
  .goodsitem{
    margin: 2px 1vw;
    width: 48vw;
    border-radius: 3px; 
  }
  .goodsitem > img{
    width: 100%;
    border-radius: 5px;
  }
  .info{
    text-align: center;
    height: 40px;
  }
  .info > p{
    font-size: 13px;
    width:100vm;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
  }
  .price{
    font-size: 14px;
    color: var(--color-hiht-text);
  }
  .collect{
    font-size: 14px;
    margin-left: 20px;
    position: relative;
  }
  .info .collect::before{
    position: absolute;
    left: -14px;
    top: 0;
    content: '';
    width: 14px;
    height: 14px;
    background: url("~assets/img/collect.svg") 0 0/14px 14px;
  }
</style>