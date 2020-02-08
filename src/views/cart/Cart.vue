<template>
  <div id="cart">
    <nav-bar class="cart-nav"><div slot="center">购物车({{cartLength}})</div></nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list :cartList="cartList" @addclick='addcount' @reduceclick='reducecount'></cart-list>
    </scroll>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import CartList from "./childComps/CartList"

import {mapGetters} from 'vuex'

export default {
  name: 'Cart',
  components: {
    NavBar,
    Scroll,
    CartList
  },
  computed: {
    ...mapGetters([
      'cartLength',
      'cartList',
    ])
  },
  methods: {
    addcount(iid) {
      const product = this.cartList.find(item => item.iid === iid)
      this.$store.dispatch('addCount', product)
    },
    reducecount(iid) {
      const product = this.cartList.find(item => item.iid === iid)
      this.$store.dispatch('reduceCount', product)
    }
  },
  activated () {
    this.$refs.scroll.scroll.refresh()
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
  .content{
    height: calc(100% - 49px);  
    overflow: hidden;
  }
</style>