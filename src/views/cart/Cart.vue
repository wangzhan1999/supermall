<template>
  <div id="cart">
    <nav-bar class="cart-nav"><div slot="center">购物车({{cartLength}})</div></nav-bar>
      <cart-list @addclick='addcount'
                 @reduceclick='reducecount'
                 @checkedclick='ischecked'>
      </cart-list>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'

import CartList from "./childComps/CartList"

import {mapGetters} from 'vuex'

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList
  },
  computed: {
    ...mapGetters([
      'cartLength',
      'cartList',
    ])
  },
  methods: {
    // 这些方法可以放在子组件，自己弄麻烦了,添加商品数量
    addcount(iid) {
      const product = this.cartList.find(item => item.iid === iid)
      this.$store.dispatch('addCount', product)
    },
    // 减少数量判断--1再减就是删除商品
    reducecount(iid) {
      const product = this.cartList.find(item => item.iid === iid)
      if(product.count  <= 1) {
        this.$store.dispatch('reduceCount', product)
        this.$store.dispatch('delProduct', product)
      }else if(product.count > 0){
        this.$store.dispatch('reduceCount', product)
      }
    },
    // 改变状态函数
    ischecked(iid) {
      this.$store.dispatch('ischecked', iid)
    }
  }
}
</script>
<style scoped>
  #cart{
    height: 100vh;
    padding-top: 44px;
  }
  .cart-nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--color-tint);
    color: #fff;
  }
  
</style>