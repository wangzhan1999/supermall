<template>
<div>
  <scroll class="content" ref="scroll">
    <ul class="cartlist">
      <li :key="index" v-for="(item, index) in cartList">
        <div class="checkdiv">
          <input type='checkbox' :checked="item.statu" :id="index" @change="itemchange"/>
          <label :for="index" @click='isChecked(item.iid)'></label>
        </div>
        <div class="shopimg"><img :src="item.image" alt=""></div>
        <div class="shopname">{{item.title}}</div>
        <div class="num"><button @click='addclick(item.iid)'>+</button> {{item.count}} <button @click='reduceclick(item.iid)'>-</button></div>
        <div class="desc">{{item.desc}}</div>
        <div class="price"><span>单价:</span>￥{{item.price}}</div>
      </li>
    </ul>
  </scroll>
  <!-- 不再犹豫。 -->
  <div v-show="ispopup" class="popup">
    <div class="popupHead">温馨提醒</div>
    <div class="popupBody">您确定要提交订单吗?</div>
    <div class="popupBottom">
      <div class="popupClose" @click="ispopup = false">取消</div>
      <div class="popupAffirm" @click="sub">确定</div>
    </div>
  </div>
  <transition name="tit">
    <div class="tit" v-show="titisshow">
      {{tittext}}
      <img src="~assets/img/ok.svg" alt="" v-show="imgisshow">
    </div>
  </transition>
  <!--  -->
  <div class="cartbuttonB">
    <div class="allchecked">
      <input type="checkbox" id="allcheck" :checked="allischecked" v-model="allischecked" @change="allchecked">
      <label for="allcheck">全选</label>
    </div>
    <div class="totalPrice">合计:<span>￥{{Number(totalPrice).toFixed(2)}}</span></div>
    <div class="subOrder" @click='popup'>提交订单({{checkedNum}})</div>
  </div>
</div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

import { mapGetters, mapMutations } from "vuex";
export default {
  name: "CartList",
  data () {
    return {
      allischecked: false,
      ispopup: false,
      titisshow: false,
      tittext: '提交成功',
      imgisshow: true
    }
  },
  components: {
    Scroll
  },
  methods: {
    addclick(iid) {
      this.$emit('addclick', iid)
    },
    reduceclick(iid) {
      this.$emit('reduceclick', iid)
    },
    isChecked(iid) {
      this.$emit('checkedclick', iid)
    },
    // 动态改变全选按钮的状态
    allchecked() {
      this.cartList.filter(item => item.statu = this.allischecked)
    },
    // item状态改变监听，动态改变全选按钮状态
    itemchange() {
      let newArr = this.cartList.filter(item => item.statu === true);
      this.allischecked = newArr.length > 0 && newArr.length === this.cartList.length;
    },
    // 控制确认框是否出现,并动态展示tit框内容
    popup() {
      let contral = this.cartList.find(item => item.statu)
      if (contral) {
        this.ispopup = true
      } else {
        this.titisshow = true
        this.tittext = '您还未选中商品哦~'
        this.imgisshow = false
        setTimeout(() => {
          this.titisshow = false
        }, 1500);
      }
    },
    // 确认订单按钮状态判断
    sub() {
      this.$store.dispatch('subOrder')
      this.allischecked = false
      this.ispopup = false
      this.titisshow = true
      this.tittext = '订单提交成功'
      this.imgisshow = true
      setTimeout(() => {
        this.titisshow = false
      }, 1500);
    },
  },
  computed: {
    // 把getter内部数据搬到这里
    ...mapGetters(["cartList", "cartLength"]),
    // 总价格
    totalPrice() {
      return this.cartList
        .filter(item => item.statu === true)
        .reduce((previtem, item) =>  previtem + item.price * item.count, 0);
    },
    // 选中的商品数量
    checkedNum() {
       return this.cartList
        .filter(item => item.statu === true).length
    }
  },
  created() {
    // 每次刷新页面获取本地存储购物车数据
    let list = JSON.parse(localStorage.getItem("MycartList")) || [];
    if (list) {
      this.$store.dispatch('loadCart', list)
    }
  },
  activated () {
    // 这里是每次进来都会刷新全选按钮状态的代码·····
      this.$refs.scroll.refresh();
      const no = this.cartList.filter(item => item.statu === false)
      const yes = this.cartList.filter(item => item.statu === true)
      if(yes.length === this.cartList.length && yes.length > 0){
        this.allischecked = true;
      }else if(no.length > 0){
        this.allischecked = false;
      }else if(no.length < 1 && yes.length < 1){
        this.allischecked = false;
      }
  }
}
</script>

<style scoped>
  .cartlist{
    width: 100vw;
    overflow: hidden;
  }
  .content{
    height: calc(100vh - 142px);  
    overflow: hidden;
  }
  .cartlist > li{
    position: relative;
    padding: 10px 0;
    margin-left: 3vw;
    border-bottom: 1px solid rgba(134, 123, 122, 0.2);
  }
  .shopimg{
    width: 20vw;
  }
  .shopimg > img{
    width: 100%;
  }
  .shopname{
    position: absolute;
    top: 20px;
    left: 25vw;
    width: 60vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
  }
  .num{
    position: absolute;
    bottom: 10px;
    right: 15vw;
  }
  .num > button{
    border: none;
    background: white;
    width: 20px;
    height: 20px;
    border:1px solid #e1e1e1;
    outline: 0;
  }
  .desc{
    position: absolute;
    top: 50px;
    left: 30vw;
  }
  .price{
    font-size: 18px;
    color: orange;
    position: absolute;
    bottom: 10px;
    left: 25vw;
  }
  .price > span{
    font-size: 15px;
    color: #666;
  }
  .checkdiv{
    height: calc(100% - 20px);
    width: 10vw;
    position: absolute;
    right: 0;
  }
  .checkdiv > input[type=checkbox]{
    position: absolute;
    top: calc(50% - 7px);
    left: 6px;
    opacity: 0;
  }
  .checkdiv > label{
    position: absolute;
    top: calc(50% - 12px);
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid #e1e1e1;
    background-image: url('~assets/img/checkbottom.svg');
    background-position-x: center;
    background-position-y: 30px;
    background-repeat: no-repeat;
    background-size: 32px;
    -webkit-transition: background-position-y 0.1s linear;
    -o-transition: background-position-y 0.1s linear;
    transition: background-position-y 0.1s linear;
    }
  input[type=checkbox]:checked + label{
    background-position-y: center;
    border:none;
  }
  .cartbuttonB{
    background-color: white; 
    border-top: 1px solid rgba(0, 0, 0, .1);
    position: fixed;
    height: 49px;
    bottom: 49px;
    line-height: 49px;
    width: 100vw;
    text-align: center;
  }
  .cartbuttonB > div{
    display: inline-block;
    height: 100%;
  }
  .allchecked{
    position: relative;
    width: 30%;
  }
  .totalPrice{
    width: 40%;
  }
  .totalPrice > span {
    color: var(--color-tint);
  }
  .subOrder{
    color: white;
    background-color: var(--color-tint);
    width: 30%;
  }
  #allcheck[type=checkbox]{
    position: absolute;
    left: calc(4vw + 5px);
    top: calc(50% - 7px);
    opacity: 0;
  }
  #allcheck[type=checkbox] + label::before{
    content: '';
    display: block;
    position: absolute;
    top: calc(50% - 12px);
    left: 4vw;
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid #e1e1e1;
    background-image: url('~assets/img/checkbottom.svg');
    background-position-x: center;
    background-position-y: 30px;
    background-repeat: no-repeat;
    background-size: 32px;
    -webkit-transition: background-position-y 0.1s linear;
    -o-transition: background-position-y 0.1s linear;
    transition: background-position-y 0.1s linear;
  }
  #allcheck[type=checkbox]:checked + label::before{
    background-position-y: center;
    border:none;
  }
  .popup{
    width: 50vw;
    height: 150px;
    position: fixed;
    top: calc(50% - 150px);
    left: calc(50% - 25vw);
    border: 1px solid #E7E7E7;
    border-radius: 10px;
    background-color: #fff;
  }
  .popup > div{
    width: 100%;
    text-align: center;
  }
  .popupHead{
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #E7E7E7;
  }
  .popupBody{
    height: 80px;
    padding: 20px 0;
    border-bottom: 1px solid #E7E7E7;
  }
  .popupBottom{
    height: 40px;
    line-height: 40px;
    display: flex;
  }
  .popupBottom > div{
    flex: 1;
  }
  .popupClose{
    border-right: 1px solid #E7E7E7;
    background-color: #D4D4D4;
    border-radius:  0 0 0 10px;
    color: #fff;
  }
  .popupAffirm{
    background-color: var(--color-hiht-text);
    border-radius:  0 0 10px 0;
    color: #fff;
  }
  .tit{
    width: 50vw;
    height: 80px;
    position: fixed;
    top: calc(50% - 80px);
    left: 25vw;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    line-height: 80px;
  }
  .tit>img{
    vertical-align: middle;
    width: 24px;
  }
  .tit-enter-active, .tit-leave-active {
    transition: opacity .5s
  }
  .tit-enter, .tit-leave-active {
    opacity: 0
  }
</style>