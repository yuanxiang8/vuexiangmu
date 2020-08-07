<template>
  <div>
    <van-search v-model="value" placeholder="请输入搜索关键词" />

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="img/2.png"></van-swipe-item>
        <van-swipe-item><img src="img/2.png"></van-swipe-item>
        <van-swipe-item><img src="img/2.png"></van-swipe-item>
        <van-swipe-item><img src="img/2.png"></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
    data() {
      return {
        value:''
      }
    },
}
</script>

<style>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 15px;
    text-align: center;
    background-color: #39a9ed;
  }
  img{
      width: 100%;
  }
</style>