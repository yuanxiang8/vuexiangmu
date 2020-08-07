<template>
  <div>
    <div class="tou">
      <router-link to="/wode">
        <van-icon name="arrow-left" id="van3" />
      </router-link>
      <span>反馈问题</span>
    </div>
    <div class="zhong">
      <div class="jjj">
        <div class="hui">
          <img src="img/6.png" id="img2" />
          <span>你好，有问题可以随时给我说哦！</span>
        </div>
      </div>
      <p v-for="(tt,index) in tts" :key="index" class="kuan">
        {{tt}}
        <img src="img/6.png" id="img11" />
      </p>
    </div>
    <div class="di">
      <input type="text" placeholder="欢迎您！" id="te1" />
      <input type="button" value="发送" id="bu1" @click="tj" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tts: [],
    };
  },
  methods: {
    tj() {
      this.tts.push(document.getElementById("te1").value);
    },
  },
};
</script>

<style scoped>
#van3 {
  height: 30px;
  margin-left: 10px;
}
.tou span {
  font-size: 22px;
  margin-left: 140px;
}
.zhong {
  height: 600px;
  background-color: #fbf1ee;
  position: relative;
}
.di {
  position: fixed;
  height: 43px;
}
#te1 {
  width: 320px;
  height: 40px;
}
#bu1 {
  height: 44px;
  width: 88px;
  background-color: white;
  border: 1px solid white;
  color: red;
}
.aa {
  background: #14dc0a;
}
#img11 {
  width: 50px;
  position: absolute;
  right: 0;
}
#img2 {
  width: 50px;
}
.zhong p {
  background-color: greenyellow;
}
.hui {
  background-color: wheat;
  width: 300px;
}
.hui span {
  position: relative;
  top: -20px;
  left: 4px;
}
.jjj {
  padding-top: 20px;
}
.kuan{
    height: 100%px;
    height: 50px;
    background-color: greenyellow;
    margin: 10px 0 10px;
    width: 70%;
    position: relative;
    right:-125px;
    line-height: 50px;
}
</style>