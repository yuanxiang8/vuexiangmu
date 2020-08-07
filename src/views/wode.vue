<template>
  <div id="zong">
    <div class="tou">
      <img src="img/6.png">
      <span>立即登录</span>
      <a>登录后可收藏喜欢的菜谱</a>
      <van-icon name="arrow" id="van1"/>
    </div>

    <div class="zhong">
      <router-link to="/shengji"><img src="img/7.png"></router-link>
    </div>

    <div class="wo">
      <ul>
        <li>我的收藏 <van-icon name="arrow" id="van2"/></li>
        <li>浏览记录 <van-icon name="arrow" id="van2"/></li>
        <li>去App Store给烘焙小屋评分 <van-icon name="arrow" id="van3"/></li>
        <li><router-link tag="span" to="/fankui">反馈问题 <van-icon name="arrow" id="van2"/></router-link></li>
      </ul>
    </div>
    
    <div class="di">
      <a>v3.5.6</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods:{
    tiao(){
      alert(1)
    }
  }
}
</script>

<style scoped>
  #zong{
    border: 1px solid white;
    height: 600px;
  }
  .tou{
    border: 1px solid white;
    height: 150px;
  }
  .tou img{
    width: 90px;
    float: left;
    margin-left: 20px;
    margin-top: 30px;
  }
  .tou span{
    font-weight: bold;
    font-size: 20px;
    float: left;
    margin-left: 10px;
    margin-top: 50px;
  }
  .tou a{
    position: relative;
    left: -80px;
    top: 80px;
    font-size: 13px;
    color: #999999;
  }
  #van1{
    position: relative;
    top: 70px;
    left: 35px;
  }
  .zhong{
    border: 1px solid white;
    height: 60px;
  }
  .zhong img{
    width: 380px;
    float: left;
    margin-left: 15px;
  }
  .wo{
    height: 260px;
  }
  .wo ul li{
    display: block;
    line-height: 60px;
    margin-left: 15px
  }
  #van2{
    position: relative;
    top: 3px;
    left: 298px;
  }
  #van3{
    position: relative;
    top: 3px;
    left: 162px;
  }
  .di a{
    color: #999999;
    position: relative;
    left: 180px;
  }
</style>