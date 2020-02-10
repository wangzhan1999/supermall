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
  [ADD_COUNTER](state, payload) {
    payload.count++
    localStorage.setItem("MycartList", JSON.stringify(state.cartList));
  },
  [REDUCE_COUNTER](state, payload) {
    payload.count--
    localStorage.setItem("MycartList", JSON.stringify(state.cartList));
  },
  [ADD_TO_CART](state, payload) {
    state.cartList.push(payload)
    localStorage.setItem("MycartList", JSON.stringify(state.cartList));
  },
  [DEL_PRODUCT](state, payload) {
    state.cartList.splice(payload,1)
    localStorage.setItem("MycartList", JSON.stringify(state.cartList));
  },
  [IS_CHECKED](state, iid) {
    state.cartList.filter(item => item.iid === iid).map(item => item.statu = !item.statu)
    localStorage.setItem("MycartList", JSON.stringify(state.cartList));
  },
  [EMPTY_CART](state) {
    state.cartList = [];
    localStorage.removeItem("MycartList");
  },
  [DEL_CARTSHOP](state, checkeditem) {
    state.cartList = checkeditem;
    localStorage.setItem("MycartList", JSON.stringify(state.cartList));
  },
  [LOAD_CART](state, list) {
  state.cartList = list
  }
}