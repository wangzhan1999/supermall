<template>
  <div id="profile">
    <nav-bar class="navbar">
      <div slot="center">我的</div>
    </nav-bar>
    <scroll class="content">
      <div class="myinfo">
        <img src="~assets/img/myhead.jpg" alt="">
        <p class="myname">用户名:Here's the name</p>
        <div><img src="~assets/img/back.svg" alt=""></div>
      </div>
      <ul class="about">
        <li>
          <span>4</span>
          收藏夹</li>
        <li>
          <span>70</span>
          关注店铺</li>
        <li>
          <span>120</span>
          足迹</li>
        <li>
          <span>2</span>
          红包卡券</li>
      </ul>
      <div class="status">
        <div class="statustop">
          我的订单
          <span>查看全部订单<img src="~assets/img/back.svg" alt=""></span>
        </div>
        <ul class="productstatus">
          <li>
            <img src="~assets/img/profileicon/qianbao.svg" alt="">
            待付款</li>
          <li>
            <img src="~assets/img/profileicon/daifahuo.svg" alt="">
            待发货</li>
          <li>
            <img src="~assets/img/profileicon/daishouhuo.svg" alt="">
            待收货</li>
          <li>
            <img src="~assets/img/profileicon/pingjia.svg" alt="">
            评价</li>
          <li>
            <img src="~assets/img/profileicon/shouhou.svg" alt="">
            退款/售后</li>
        </ul>
      </div>
      <ul class="end">
        <li>
          <img src="~assets/img/profileicon/muban.png" alt="">
          <img src="~assets/img/back.svg" alt="">
        </li>
        <li>
          <img src="~assets/img/profileicon/muban.png" alt="">
          <img src="~assets/img/back.svg" alt="">
        </li>
        <li>
          <img src="~assets/img/profileicon/muban.png" alt="">
          <img src="~assets/img/back.svg" alt="">
        </li>
        <li>
          <img src="~assets/img/profileicon/muban.png" alt="">
          <img src="~assets/img/back.svg" alt="">
        </li>
        <li>
          <img src="~assets/img/profileicon/muban.png" alt="">
          <img src="~assets/img/back.svg" alt="">
        </li>
        <li>
          <img src="~assets/img/profileicon/muban.png" alt="">
          <img src="~assets/img/back.svg" alt="">
        </li>
        <li>
          <img src="~assets/img/profileicon/muban.png" alt="">
          <img src="~assets/img/back.svg" alt="">
        </li>
        <li>
          <img src="~assets/img/profileicon/muban.png" alt="">
          <img src="~assets/img/back.svg" alt="">
        </li>
      </ul>
    </scroll>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
export default {
  name: 'Profile',
  components: {
    Scroll,
    NavBar
  }
}
</script>
<style scoped>
  #profile{
    height: 100vh;
  }
  .navbar{
    background-color: var(--color-tint);
    color: white;
  }
  .myinfo{
    padding-top: 10px;
    position: relative;
  }
  .myinfo > img{
    width: 25vw;
    border:1px solid #ccc;
    border-radius: 50%;
  }
  .content{
    height: calc(100% - 93px);
    margin: 0 3vw;
    overflow: hidden;
  }
  .myinfo > div > img{
    width: 6vw;
    transform: rotate(180deg);
  }
  .myinfo > div{
    position: absolute;
    right: 0;
    bottom: 5vw;
  }
  .myname{
    position: absolute;
    right: 10vw;
    bottom: 6vw;
  }
  .about{
    width: 100%;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    padding: 12px 0;
    margin-top: 5px;
  }
  .about > li{
    text-align: center;
    display: inline-block;
    width: 25%;
    font-size: 15px;
  }
  .about > li > span{
    color: var(--color-tint);
    padding: 5px 0;
    display: block;
  }
  .status{
    margin-top: 8px;
    border: 1px solid #e1e1e1;
  }
  .statustop{
    font-size: 14px;
    position: relative;
    padding: 10px 3vw;
    border-bottom: 1px solid #e1e1e1;
  }
  .statustop > span{
    position: absolute;
    right: 3vw;
    font-size: 12px;
    color: #e1e1e1;
    line-height: 16px;
  }
  .statustop > span > img{
    vertical-align: middle;
    width: 3vw;
    transform: rotate(180deg);
  }
  .productstatus{
    width: 100%;
    display: flex;
    padding: 18px 0;
  }
  .productstatus > li{
    text-align: center;
    flex: 1;
    font-size: 14px;
  }
  .productstatus > li > img{
    margin: 0 30%;
    width: 40%;
  }
  .end{
    border-radius: 5px;
    width: 100%;
    margin: 10px 0;
    border: 1px solid #e1e1e1;
  }
  .end > li{
    width: 100%;
    height: 40px;
    position: relative;
    border-bottom: 1px solid #e1e1e1; 
  }
  .end > li > img:first-of-type{
    margin-left: 5vw;
  }
  .end > li:last-of-type{
    border-bottom: none;
  }
  .end > li > img:last-of-type{
    position: absolute;
    right: 0;
    top: 6px;
    width: 7vw;
    transform: rotate(180deg);
  }
</style>