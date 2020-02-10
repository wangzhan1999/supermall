<template>
<div>
  <tab-bar>
      <tab-bar-item path="/home" activeColor="#ff5777">
        <img slot="item-icon" src="~assets/img/tabbaricon/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbaricon/home-active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#ff5777">
        <img slot="item-icon" src="~assets/img/tabbaricon/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbaricon/category-active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#ff5777">
        <img slot="item-icon" src="~assets/img/tabbaricon/cart.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbaricon/cart-active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#ff5777">
        <img slot="item-icon" src="~assets/img/tabbaricon/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbaricon/profile-active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
  </tab-bar>
</div>
</template>
<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>
<style>
  
</style>