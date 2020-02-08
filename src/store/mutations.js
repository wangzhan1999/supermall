import {
  ADD_COUNTER,
  ADD_TO_CART,
  REDUCE_COUNTER
} from './mutations-types'

export default {
  [ADD_COUNTER](state, payload){
    payload.count++
  },
  [REDUCE_COUNTER](state, payload){
    payload.count--
  },
  [ADD_TO_CART](state, payload){
    state.cartList.push(payload)
  }
}