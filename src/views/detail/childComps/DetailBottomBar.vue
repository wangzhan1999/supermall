<template>
  <div class="bottombar">
    <div>
      <img src="~assets/img/detail/service.svg" alt=""/>
      <p>客服</p>
      </div>
    <div>
      <img src="~assets/img/detail/shop.svg" alt=""/>
      <p>店铺</p>
    </div>
    <div>
      <img src="~assets/img/collect.svg" alt=""/>
      <p>收藏</p>
    </div>
    <div class="car" @click="addtoCart">加入购物车</div>
    <div class="buy">购买</div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addtoCart() {
      this.$emit('addCart')
      this.$emit('titisshow')
    }
  }
}
</script>

<style scoped>
  .bottombar{
    background-color: #fff;
    height: 49px;
    font-size: var(--font-size);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    z-index: 100;
    box-shadow: 0px -1px 3px rgba(219, 204, 204, .1);
  }
  .bottombar > div{
    flex: 1;
    text-align: center;
  }
  .bottombar > div > img{
    margin-top: 3px;
    width: 40px;
    height: 40px;
  }
  .buy,.car{
    height: 49px;
    line-height: 49px;
  }
  .car{
    background-color: rgb(253, 255, 131);
  }
  .buy{
    background-color: var(--color-hiht-text);
    color: white;
  }
</style>