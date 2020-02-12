<template>
  <div id="sideBar">
    <scroll class="content">
      <ul>
        <li :key="index"
            v-for="(item, index) in sideBarList"
            @click='liClick(index, item.maitKey)'
            :class="{active:index === currentindex}">{{item.title}}</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll' 

export default {
  name: "SideBar",
  components: {
    Scroll
  },
  props: {
    sideBarList: Array,
    default() {
      return []
    }
  },
  data() {
    return {
      currentindex: 0,
    }
  },
  methods: {
    liClick(index, maitKey) {
      this.currentindex = index
      this.$emit('seekMaitKey', maitKey)
    },
  }
}
</script>

<style scoped>
  #sideBar{
    position: absolute;
    width: 25vw;
  }
  .content{
    height: calc(100vh - 93px);
    width: 25vw;
    overflow: hidden;
    background-color: #e1e1e1;
  }
  .content  > ul > li{
    text-align: center;
    padding: 16px 0;
  }
  .content > ul > li.active{
    border-left: 3px solid var(--color-tint);
    background-color: #fff;
  }
</style>