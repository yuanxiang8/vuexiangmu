<template>
  <div>
    <van-search v-model="value" placeholder="请输入搜索关键词"/>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="img/2.png"></van-swipe-item>
        <van-swipe-item><img src="img/2.png"></van-swipe-item>
        <van-swipe-item><img src="img/2.png"></van-swipe-item>
        <van-swipe-item><img src="img/2.png"></van-swipe-item>
    </van-swipe>

    <div class="jing">
      <span>精选分类</span>
      <div class="xuan">
        <ul>
          <li>蛋糕</li>
          <li>面包</li>
          <li>饼干</li>
          <li>披萨</li>
          <li>吐司</li>
          <li>蛋挞</li>
          <li>曲奇</li>
          <li>翻糖</li>
          <li>慕斯</li>
          <li>泡芙</li>
          <li>芝士</li>
          <li>更多</li>
      </ul>
      </div>
    </div>

    <div class="re">
      <span>热门烘焙</span>
      <div class="men">
        <ul>
          <li><img src="img/3.png"></li>
          <li><img src="img/3.png"></li>
          <li><img src="img/3.png"></li>
          <li><img src="img/3.png"></li>
          <li><img src="img/3.png"></li>
        </ul>
      </div>
    </div>
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

<style scoped>
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
  .jing{
    width: 99%;
    height: 240px;
    float: left;
    margin-top: 10px;
  }
  .jing span{
    color: #9c9c9c;
    float: left;
    margin-left: 5px;
  }
  .xuan{
    width: 100%;
    height: 210px;
    float: left;
    margin-top: 10px;
    margin-left: 3px;
  }
  .xuan ul li{
    border: 1px solid #dfdfdf;
    display: inline-block;
    padding: 20px 34px;
  }
  .re{
    width: 99%;
    height: 1250px;
    float: left;
    margin-top: 10px;
  }
  .re span{
    color: #9c9c9c;
    float: left;
    margin-left: 5px;
  }
  .men ul li{
    margin-top: 12px;
    display: inline-block;
    padding: 3px 34px;
  }
</style>