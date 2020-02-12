<template>
  <div id="category">
    <nav-bar class="navbar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <side-bar :sideBarList="sideBarList" @seekMaitKey="seekMaitKey"></side-bar>
    <card :seekMaitKeyList="seekMaitKeyList" ref="card"></card>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import SideBar from './childComps/SideBar'
import Card from './childComps/Card'

import {getCategory, getSubcategory} from 'network/category'
export default {
  name: 'Category',
  components: {
    NavBar,
    Scroll,
    SideBar,
    Card
  },
  data() {
    return {
      sideBarList: [],
      seekMaitKeyList: []
    }
  },
  created () {
    this.getCategory();

  },
  methods: {
    getCategory() {
      getCategory().then(response => {
        this.sideBarList = response.data.category.list
      })
      // 默认Card的数据
      getSubcategory(3627).then(response => {
        this.seekMaitKeyList = response.data.list
      })
    },
    seekMaitKey(itemSeekMaitKey) {
        getSubcategory(itemSeekMaitKey).then(response => {
          this.seekMaitKeyList = response.data.list
        })
      }
    },
  }
</script>
<style scoped>
  #category{
    position: relative;
    height: 100vh;
    padding-top: 44px;
  }
  .navbar{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--color-tint);
    color: white;
  }
</style>