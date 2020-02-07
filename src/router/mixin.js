import {debounce} from "common/utils"
import BackTop from "components/content/backtop/BackTop"
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted () {
    // 监听item中图片加载完成
    let newRefresh = debounce(this.$refs.scroll.refresh, 300)
    this.itemImgListener = () => {
      newRefresh()
    }
    this.$bus.$on('itemImgListener', this.itemImgListener)
  }
}

export const backtopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    }
  }
}