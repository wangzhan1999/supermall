<template>
  <div class="baseinfo" v-if="Object.keys(goods).length !== 0">
    <div class="title">{{goods.title}}</div>
    <div class="price">
      <h3 class="newprice">{{goods.newPrice}}</h3>
      <del class="oldprice">{{goods.oldPrice}}</del>
      <sup>活动价</sup>
    </div>
    <div class="columns">
      <div class="left">{{goods.columns[0]}}</div>
      <div class="center">{{goods.columns[1]}}</div>
      <div class="right">{{goods.services[0].name}}</div>
    </div>
    <div class="services" v-if="goods.services !== []">
      <div class="left"><img :src="goods.services[0].icon" alt="">{{goods.services[0].name}}</div>
      <div class="center"><img :src="goods.services[0].icon" alt="">{{goods.services[1].name}}</div>
      <div class="right"><img :src="goods.services[0].icon" alt="">{{goods.services[2].name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type:Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .baseinfo{
    margin: 10px 2vw 0 2vw;
  }
  .title{
    font-size: 15px;
    color: #1b1b1b;
  }
  .price{
    padding: 12px 0px;
  }
  .price > *{
    display: inline-block;
  }
  .price > sup{
    color: #fff;
    background-color: var(--color-hiht-text);
    padding: 3px;
    border-radius: 10px;
    line-height: 12px;
  }
  .newprice{
    color: var(--color-tint);
  }
  .oldprice{
    color: #ccc8c8;
    font-size: 10px;
    padding: 0px 5px;
  }
  .columns{
    display: flex;
    padding-bottom: 6px;
    border-bottom: 1px solid #e1e1e1;
  }
  .columns > *{
    flex: 1;
    font-size: 12px;
    color: #9c9c9c;
  }
  .services{
    display: flex;
    padding: 15px 0;
  }
  .services > div{
    flex: 1;
    font-size: 12px;
  }
  .services img{
    width: 12px;
    vertical-align: text-top;
  }
  .left{
    text-align: left;
  }
  .center{
    text-align: center;
  }
  .right{
    text-align: right;
  }
</style>