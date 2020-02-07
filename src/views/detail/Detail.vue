<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref='scroll' :probe-type=3 @scroll="contentScroll">
      <detail-swiper :topImgs="topImgs"></detail-swiper>
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
    <detail-bottom-bar></detail-bottom-bar>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
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
      currentIndex: 0
    }
  },
  mixins: [itemListenerMixin, backtopMixin],
  components: {
    DetailNavBar,
    DetailSwiper,
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
       if(this.currentIndex !==i && (positionY > this.themeTopYs[i]) && (positionY < this.themeTopYs[i+1]) ){
         this.currentIndex = i;
         this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
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
</style>