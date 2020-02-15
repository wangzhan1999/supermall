<template>
  <div id="card">
    <scroll class="content" ref="scroll">
      <div class="container">
        <div :key="index" v-for="(item, index) in seekMaitKeyList">
          <a :href="item.link">
            <img :src="item.image" alt="">
            <p>{{item.title}}</p>
          </a>
        </div>
      </div>
      <!-- <div class="goodslistcontainer">
        <tab-control :titles="['流行', '新款', '精选']" 
                     @tabClick="tabClick"
                     ref="tabControl"
                     ></tab-control>
        <goods-list :goods="goodsList"></goods-list>
      </div> -->
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
// import GoodsList from 'components/content/goods/GoodsList'
// import TabControl from 'components/content/tabControl/TabControl'

export default {
  name: "Card",
  data () {
    return {
      currentType: 'pop'
    }
  },
  props: {
    seekMaitKeyList: Array,
    default() {
      return []
    }
  },
  components: {
    Scroll
    // GoodsList,
    // TabControl
  },
  methods: {
    // tabClick(index) {
    //   switch (index) {
    //     case 0:
    //       this.currentType ='pop'
    //       break
    //     case 1:
    //       this.currentType = 'new'
    //       break
    //     case 2:
    //       this.currentType = 'sell'
    //       break
    //   }
    //   this.$refs.tabControl.currentIndex = index;
    // },
  },
  updated () {
    this.$refs.scroll.refresh();
  },
  activated () {
    this.$refs.scroll.refresh();
  }
}
</script>

<style scoped>
  #card{
    width: 75vw;
    position: absolute;
    left: 25vw;
    top: 44px;
  }
  .content{
    height: calc(100vh - 93px);
    overflow:hidden;
    width: 100%;
  }
  .container{
    width: 75vw;
    display: flex;
    flex-wrap: wrap;
  }
  .container > div{
    width: calc(100% / 3);
    padding: 12px 5%;
  }
  .container > div img{
    width: 100%;
  }
  .container > div p{
    text-align: center;
  }
</style>