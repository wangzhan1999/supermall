import {
  ADD_COUNTER,
  ADD_TO_CART,
  REDUCE_COUNTER
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
  }
}