export default {
  // 获取购物车列表长度
  cartLength: state => state.cartList.length,
  // 获取购物车数组内所有对象
  cartList: state => state.cartList
}