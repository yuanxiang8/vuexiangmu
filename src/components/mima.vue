<template>
    <div>
    <van-icon name="arrow-left" id="ar"/>
    <div class="deng">输入密码</div>
    <div class="tet">
      <input type="password" placeholder="输入密码" class="te" ><br/>

      <input type="button" value="登录" class="bu">
      <div class="qi"><span>验证码登录</span></div>
    </div>
  </div>
</template>

<script>
export default {
data() {
    return {
        
    }
},
}
</script>

<style scoped>
    #ar{
    font-size: 30px;
    position: relative;
    left: -160px;
    top: -30px;
  }
  .deng{
    font-size: 30px;
    font-weight: bold;
    position: relative;
    top: 60px;
    left: 40px;
  }
  .tet{
    float: left;
    margin-top: 120px;
    margin-left: 40px;
    width: 80%;
  }
  .te{
    width: 80%;
    height: 40px;
    border-top: none;
    border-left: none;
    border-right: none;
  }
  .bu{
    float: left;
    margin-top: 60px;
    margin-left: 20px;
    width: 90%;
    height: 40px;
    border-radius: 25px;
    border: 1px solid #fc5a54;
    background-color: #fc5a54;
    color: white;
  }
  .qi{
    position: relative;
    top: 50px;
    color: #f27324;
    font-size: 18px;
  }
  #img1{
    width: 25px;
    position: relative;
    top: 5px;
    left: 10px;
  }     
</style>