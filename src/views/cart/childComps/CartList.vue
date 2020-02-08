<template>
  <div>
    <ul class="cartlist">
      <li :key="index" v-for="(item, index) in cartList">
        <div class="shopimg"><img :src="item.image" alt=""></div>
        <div class="shopname">{{item.title}}</div>
        <div class="num"><button @click='addclick(item.iid)'>+</button> {{item.count}} <button @click='reduceclick(item.iid)'>-</button></div>
        <div class="desc">{{item.desc}}</div>
        <div class="price"><span>单价:</span>￥{{item.price}}</div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "CartList",
  props: {
    cartList: Array,
    default() {
      return []
    }
  },
  methods: {
    addclick(iid) {
      this.$emit('addclick',iid)
    },
    reduceclick(iid) {
      this.$emit('reduceclick',iid)
    }
  }
}
</script>

<style scoped>
  .cartlist{
    width: 100vw;
  }
  .cartlist > li{
    position: relative;
    padding: 10px 0;
    margin-left: 3vw;
    border-bottom: 1px solid rgba(134, 123, 122, 0.2);
  }
  .shopimg{
    width: 20vw;
  }
  .shopimg > img{
    width: 100%;
  }
  .shopname{
    position: absolute;
    top: 20px;
    left: 25vw;
    width: 60vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
  }
  .num{
    position: absolute;
    bottom: 10px;
    right: 15vw;
  }
  .num > button{
    border: none;
    background: white;
    width: 20px;
    height: 20px;
    border:1px solid #e1e1e1;
    outline: 0;
  }
  .desc{
    position: absolute;
    top: 50px;
    left: 30vw;
  }
  .price{
    font-size: 18px;
    color: orange;
    position: absolute;
    bottom: 10px;
    left: 25vw;
  }
  .price > span{
    font-size: 15px;
    color: #666;
  }
</style>