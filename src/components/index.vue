<template>
  <div>
    <van-icon name="arrow-left" id="ar"/>
    <div class="deng">登录</div>
    <div class="tet">
      +86&nbsp;&nbsp;&nbsp;<input type="text" @input="most()" v-model="text1" placeholder="请输入手机号码" maxlength="11" class="te"><br/>

      <input type="button" value="下一步"  :class="hyy==false? 'bu' : 'bu1'">
      <div class="qi" @click="mott()"><span>其他登录方式</span><img src="img/1.png" id="img1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Login",
  data() {
      return {
          text1:"",
          hyy:false
      }
  },
  methods:{
     most(){
       if(this.text1.length==11){
         this.hyy=true
       }else{
         this.hyy=false   
        }
     },
     mott(){
      
       this.$router.push({
              path:'/mima'
          })
     }
  }
}
</script>

<style>
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
    border: 1px solid #bbbbbb;
    background-color: #bbbbbb;
    color: white;
  } 
  .bu1{
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
    color: #979797;
  }
  #img1{
    width: 25px;
    position: relative;
    top: 5px;
    left: 10px;
  }
</style>