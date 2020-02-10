<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control 
        :titles="['流行','新款','精选']" 
        @tabClick="tabClick"
        ref="tabControl1"
        v-show="isTabFixed">
      </tab-control>
    <scroll class="content" 
            ref="scroll" 
            :probeType="3" 
            :pullUpLoad=true
            @scroll="contentscroll"
            @pullingUp="loadMore">
      <home-swipe :banners="banners" @swipeImgLoad="swipeImgLoad"></home-swipe>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <feature-view></feature-view>
      <tab-control 
        :titles="['流行','新款','精选']" 
        @tabClick="tabClick"
        ref="tabControl2">
      </tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'

import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'

import HomeRecommendView from './childComps/HomeRecommendView'
import FeatureView from './childComps/FeatureView'
import HomeSwipe from './childComps/HomeSwipe'

import {getHomeMultidata, getHomeGoods} from 'network/home'
import {debounce} from 'common/utils'
import {itemListenerMixin, backtopMixin} from '@/router/mixin';

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwipe,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      tabOffsetTop: 0,
      isTabFixed: false
    }
  },
  mixins: [itemListenerMixin, backtopMixin],
  created() {
    // 1. 请求多个数据
    this.getHomeMultidata()
    // 2. 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('sell')
    this.getHomeGoods('new')
  },
  mounted () {
    // 监听item中图片加载完成
    // let refresh = debounce(this.$refs.scroll.refresh, 300)
    // this.$bus.$on('homeitemImageLoad', () => {
    //   refresh()
    // })
  },
  deactivated () {
    this.$bus.$off('itemImgListener', this.itemImgListener)
  },
  methods: {
    /**
     * 事件监听相关
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType ='pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    contentscroll(position) {
      // 判断BackTop按钮是否显示
      this.isShowBackTop = (-position.y) > 800
      // 判断tabcontrol是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.refresh();
    },
    swipeImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      // console.log(this.$refs.tabControl2.$el.offsetTop);
    },
    /**
     * 网络请求相关
     */
    getHomeMultidata() {
      getHomeMultidata().then(response => {  
        this.banners = response.data.banner.list
        this.recommends = response.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(response => {
        //  ...对象展开运算符
        this.goods[type].list.push(...response.data.list) 
        this.goods[type].page += 1
        this.$refs.scroll && this.$refs.scroll.finishPullUp()
      })
    }
    // 
  }
}
</script>
<style scoped>
  #home{
    height: 100vh;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
    height: 44px;
  }
  .content{
    height: calc(100% - 49px);  
    overflow: hidden;
  }
</style>