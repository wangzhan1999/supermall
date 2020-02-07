<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  name: 'TabBatItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path).catch(err => {})
    }
  }
}
</script>
<style>
  .tab-bar-item{
    flex: 1;
    text-align: center;
  }
  .tab-bar-item img{
    vertical-align: middle;
    margin-top: 5px;
    width: 24px;
  }
  .tab-bar-item div{
    font-size: 14px;
  }
</style>