import {
  ADD_COUNTER,
  ADD_TO_CART,
  REDUCE_COUNTER,
  DEL_PRODUCT,
  IS_CHECKED,
  EMPTY_CART,
  DEL_CARTSHOP,
  LOAD_CART
} from './mutations-types'

export default {
  // 添加数量
  addCount(context, payload){
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
    if(oldProduct && oldProduct.count < 50) context.commit(ADD_COUNTER, oldProduct)
  },
  // 减少数量
  reduceCount(context, payload){
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
    if(oldProduct && oldProduct.count > 0) context.commit(REDUCE_COUNTER, oldProduct)
  },
  // 添加商品到购物车
  addCart(context, payload) {
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
    if(oldProduct){
      // oldProduct.count += 1
      context.commit(ADD_COUNTER, oldProduct)
    } else {
      payload.count = 1
      context.commit(ADD_TO_CART, payload)
    }
  },
  delProduct(context, payload) {
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
    if(oldProduct && oldProduct.count === 0){
      context.commit(DEL_PRODUCT, payload)
    }
  },
  // 改变购物车商品状态
  ischecked(context, iid) {
    context.commit(IS_CHECKED, iid)
  },
  // 清空购物车
  subOrder(context) {
    let checkeditem = context.state.cartList.filter(item => item.statu === false)
    if (checkeditem.length === 0) {
      context.commit(EMPTY_CART)
    } else {
      context.commit(DEL_CARTSHOP, checkeditem)
    }
  },
  loadCart(context, list){
    context.commit(LOAD_CART, list)
  }
}