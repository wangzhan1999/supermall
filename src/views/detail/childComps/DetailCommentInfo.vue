<template>
  <div class="commentinfo" v-if="Object.keys(commentInfo).length == 0">
    <div class="infohaed">用户评价<span>更多<img src="~assets/img/back.svg" alt=""></span></div>
    <p class="ntitle">此商品暂无评论数据哦~∧_∧~</p>
  </div>
  <div class="commentinfo" v-else>
    <div class="infohaed">用户评价<span>更多<img src="~assets/img/back.svg" alt=""></span></div>
    <div class="userinfo">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div>{{commentInfo.content}}</div>
    <div class="date"><span>{{ commentInfo.created | showDate }}</span>{{commentInfo.style}}</div>
    <div class="infoimg"  v-if="commentInfo.images === null">
      <img :src="item" alt="" v-for="(item, index) in commentInfo.images" :key="index">
    </div>
  </div>
</template>

<script>
import {formatDate} from "@/common/utils"
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: Object,
    default() {
      return {}
    }
  },
  filters: {
    showDate: function(value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  }
}
</script>

<style scoped>
  .commentinfo{
    border-top: 5px solid #f2f5f8;
    border-bottom: 5px solid #f2f5f8;
    padding: 15px 5vw;
  }
  .infohaed{
    line-height: 50px;
    position: relative;
    border-bottom: 1px solid #f2f5f8;
  }
  .infohaed > span{
    position: absolute;
    right: 0;
    font-size: 14px;
  }
  .infohaed > span > img{
    width: 15px;
    transform: rotateY(180deg);
    vertical-align: text-top;
  }
  .userinfo{
    padding: 10px 0;
    display: flex; 
  }
  .userinfo > img{
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
    display: inline-block;
  }
  .userinfo > span{
    padding-left: 5vw;
    display: inline-block;
    width: 70vw;
    line-height: 15vw;
  }
  .date{
    font-size: var(--font-size);
    padding: 10px 0;
    color: #ccc;
  }
  .date > span{
    padding-right: 4vw;
  }
  .infoimg{
    height: 100px;
    overflow: hidden;
  }
  .infoimg > img{
    margin-right: 1vw;
    height: 30vw;
  }
  .ntitle{
    padding-top: 20px;
    text-align: center;
    font-size: var(--font-size);
  }
</style>