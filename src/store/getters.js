export default {
  // 获取购物车列表长度
  cartLength(state) {
    return state.cartList.length
  },
  // 获取购物车数组内所有对象
  cartList(state) {
    return state.cartList
  }
}