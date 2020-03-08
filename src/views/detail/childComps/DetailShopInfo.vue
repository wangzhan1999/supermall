<template>
  <div class="shopinfo">
    <div class="logo">
      <div>
        <img :src="shops.logo" alt="">
      </div>
      <p>{{shops.name}}</p>
    </div>
    <div class="sells">
      <div class="left">
        <div><h3>{{cSells}}</h3><p>总销量</p></div>
        <div><h3>{{shops.goodsCount}}</h3><p>全部宝贝</p></div>
      </div>
      <div class="right">
        <div v-for="(item, i) in shops.score" :key="i">
          <div>{{item.name}}
            <span class="score" :class="{isbetterok:item.isBetter,isbetterno:!item.isBetter}">{{item.score}}
              <span class="isbetter">{{item.isBetter ? '高' : '低'}}</span></span></div>
        </div>
      </div>
    </div>
    <div class="goin">进入店铺</div>
  </div>
</template>
<script>
export default {
  name: "DetailShopInfo",
  props: {
    shops: {
      type: Object,
      default() {
        return {}
      }
    } 
  },
  computed: {
    cSells() {
      const scells = this.shops.sells/10000
      return scells.toFixed(1)+"万";
    }
  }
}
</script>

<style scoped>
  .shopinfo{
    border-top: 5px solid #f2f5f8;
    padding-top: 10px;
    padding-bottom: 20px;
  }
  .logo{
    padding: 10px 0;
  }
  .logo > div{
    display: inline-block;
    width: 25vw;
  }
  .logo > p{
    display: inline-block
  }
  .logo img{
    border-radius: 50%;
    border:2px solid #f2f5f8;
    width: 80%;
    margin-left: 10%; 
    vertical-align: middle;
  }
  .sells{
    padding-top: 10px;
    display: flex;
  }
  .sells > div{
    flex: 1
  }
  .left{
    height: 50px;
    display: flex;
    text-align: center;
    border-right: 1px solid #999;
  }
  .left > div{
    flex: 1
  }
  .left > div > h3{
    line-height: 30px;
    color:var(--color-hiht-text);
  }
  .left > div > p{
    font-size: 14px;
  }
  .right{
    margin-top: -15px;
    padding: 0 6vw;
    font-size: 14px;
  }
  .right > div{
    padding: 5px 0 ;
  }
  .right > div > div{
    position: relative;
  }
  .score{
    padding: 0 6px;
  }
  .isbetter{
    position: absolute;
    right: 0;
  }
  .isbetterok{
    color: green;
  }
  .isbetterok > span{
    color: #fff;
    background-color: green; 
  }
  .isbetterno{
    color: red;
  }
  .isbetterno > span{
    color: #fff;
    background-color: red; 
  }
  .goin{
    color: #1b1b1b;
    margin-top: 15px;
    margin-left: 25vw;
    text-align: center;
    border-radius: 8px;
    padding: 5px 0;
    width: 50vw;
    background-color: #e1e1e1;
  }
</style>