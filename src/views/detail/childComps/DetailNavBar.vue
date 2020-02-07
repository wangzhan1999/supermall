<template>
  <div>
    <nav-bar>
      <div slot="left" @click="back">
        <img src="~assets/img/back.svg" alt="" class="back">
      </div>
      <div slot="center" class="title">
        <div :key="index" v-for="(item, index) in titles" 
             class="title-item"
             :class="{active: index === currentIndex}"
             @click="titleClick(index)">
             {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: "DetailNavbar",
  components: {
    NavBar
  },
  data() {
    return {
      titles:['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick', index)
    },
    back() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .title{
    display: flex;
    font-size: 13px;
  }
  .active{
    color: var(--color-hiht-text)
  }
  .title-item{
    flex: 1;
  }
  .back{
    width: 35%;
    vertical-align: middle;
  }
</style>