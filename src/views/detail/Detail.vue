<template>
  <div id="detail">
    <transition name='tit'>
      <div class="tit" v-show="titIsShow">加入购物车成功<img src="~assets/img/ok.svg" alt=""></div>
    </transition>
    <detail-nav-bar @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref='scroll' :probe-type=3 @scroll="contentScroll">
      <detail-swipe :banners="topImgs" @swipeImgLoad="swipeImgLoad"></detail-swipe>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shops="shops"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad"></detail-goods-info>
      <detail-param-info ref='params' :detailParamsInfo="detailParamsInfo" />
      <detail-comment-info ref="comments"  :commentInfo="commentInfo"></detail-comment-info>
      <div class="goodsitem">
        <p>好物推荐</p>
        <goods-list :goods="recommends" ref='recommends'></goods-list>
        <div class="bottomtit">------没有更多了哦------</div>
      </div>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <detail-bottom-bar @addCart="addtoCart"></detail-bottom-bar>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import DetailSwipe from './childComps/DetailSwipe'
import DetailNavBar from './childComps/DetailNavBar'
import DetailBaseInfo from "./childComps/DetailBaseInfo"
import DetailShopInfo from "./childComps/DetailShopInfo"
import DetailGoodsInfo from "./childComps/DetailGoodsInfo"
import DetailParamInfo from "./childComps/DetailParamInfo"
import DetailCommentInfo from "./childComps/DetailCommentInfo"
import DetailBottomBar from "./childComps/DetailBottomBar"

import {getDetail, Goods, Shop, Params, getRecommend} from 'network/detail'
import {debounce} from 'common/utils'
import {itemListenerMixin, backtopMixin} from '@/router/mixin';
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImgs: [],
      goods: {},
      shops: {},
      detailInfo: {},
      detailParamsInfo: {},
      commentInfo: {},
      themeTopYs: [],
      getThemeTopYs: null,
      recommends: [],
      currentIndex: 0,
      titIsShow: false
    }
  },
  mixins: [itemListenerMixin, backtopMixin],
  components: {
    DetailNavBar,
    DetailSwipe,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar
    },
  created() {
    this.iid = this.$route.params.iid
    // 详情的数据
    getDetail(this.iid).then(res => {
      const data = res.result;
      this.topImgs = data.itemInfo.topImages;
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
      this.shops = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.detailParamsInfo = new Params(data.itemParams.info, data.itemParams.rule);
      this.commentInfo = data.rate.list[0];
      }).catch({})
      // detailgoods的数据
      getRecommend().then(res => {
        this.recommends =  res.data.list
      })
      this.getThemeTopYs = debounce(() => {
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop-50)
        this.themeTopYs.push(this.$refs.comments.$el.offsetTop-44)
        this.themeTopYs.push(this.$refs.recommends.$el.offsetTop-90)
      })
  },
  computed: {
  },
  mounted () {
    // 监听item中图片加载完成
    // let refresh = debounce(this.$refs.scroll.refresh, 300)
    // this.$bus.$on('detailItemImageLoad', () => {
    //   refresh()
    // })
  },
  destroyed () {
    this.$bus.$off('itemImgListener', this.itemImgListener)
  },
  methods: {
    imgLoad(){
      this.$refs.scroll.refresh()
      this.getThemeTopYs()
    },
    titleClick(index){
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index] , 300)
    },
    contentScroll(position){
      // 判断是否显示回顶部按钮
      this.isShowBackTop = (-position.y) > 800
      let positionY = -position.y
      let length = this.themeTopYs.length
      this.themeTopYs.push(Infinity)
      for(let i = 0; i < length ;i++){
       if(this.currentIndex !==i && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]){
         this.currentIndex = i;
         this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    addtoCart() {
      this.titIsShow = true;
      setTimeout(() => this.titIsShow = false, 2500);
      //获取购物车商品需要展示的信息
      const product = {}
      product.image = this.topImgs[0];
      product.title = this.goods.title;
      product.desc = '颜色:---，尺码:---';
      product.price = this.goods.lowNowPrice;
      product.iid = this.iid;
      product.statu = false;
      this.$store.dispatch('addCart', product);
    },
    swipeImgLoad(){
      this.$refs.scroll.refresh();
    }
  }
}
</script>

<style scoped>
  #detail{
    height: 100vh;
  }
  .content{
    height: calc(100% - 93px);  
    overflow: hidden;
  }
  .goodsitem > p{
    margin-left: 3vw;
    line-height: 40px;
  }
  .bottomtit{
    padding: 10px 0;
    text-align: center;
    color: #ccc;
    font-size: 13px;
  }
  .tit{
    height: 100px;
    width: 40vw;
    background-color: rgba(255, 255, 255,.8);
    position: fixed;
    z-index: 99;
    top: calc(50% - 100px);;
    left: calc(50vw - 20vw);
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
    line-height: 100px;
  }
  .tit-enter-active, .tit-leave-active {
    transition: opacity .5s
  }
  .tit-enter, .tit-leave-active {
    opacity: 0
  }
  .tit > img{
    width: 19px;
    vertical-align: text-bottom;
  }
</style>