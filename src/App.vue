<template>
  <div id="app">
    <transition name='routerViwe'>
      <keep-alive exclude="Detail">
        <router-view></router-view>
      </keep-alive>
    </transition>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "./assets/css/base.css";
  .routerViwe-enter-active, .routerViwe-leave-active {
    transition: opacity .2s
  }
  .routerViwe-enter, .routerViwe-leave-active {
    opacity: 0
  }
</style>
