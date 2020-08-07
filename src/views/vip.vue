<template>
  <div class="zong">
    <div id="span1">
      <h2>VIP会员</h2>
    </div>
    <van-tabs>
      <van-tab title="推荐">
        <van-swipe :loop="false" :width="200">
          <van-swipe-item id="van-swipe-item1">
            <img src="img/4.png" />
            <span>捞起大拌菜</span>
            <br />
            <a id="a1">61.2万浏览</a>
          </van-swipe-item>
          <van-swipe-item id="van-swipe-item1">
            <img src="img/4.png" />
            <span>捞起大拌菜</span>
            <br />
            <a id="a1">61.2万浏览</a>
          </van-swipe-item>
          <van-swipe-item id="van-swipe-item1">
            <img src="img/4.png" />
            <span>捞起大拌菜</span>
            <br />
            <a id="a1">61.2万浏览</a>
          </van-swipe-item>
          <van-swipe-item id="van-swipe-item1">
            <img src="img/4.png" />
            <span>捞起大拌菜</span>
            <br />
            <a id="a1">61.2万浏览</a>
          </van-swipe-item>
        </van-swipe>
        <div v-for="(item, index) in tuijian" :key="index">
          <div class="divjp">
            <hongbei :item="item"></hongbei>
           
          </div>
           <div v-if="index-1%2==0"> <img  src="/img/5.png"></div>
        </div>
      </van-tab>
      <van-tab title="烘焙西餐">
        <div v-for="(item, index) in hongbei" :key="index">
          <div class="divjp">
            <hongbei :item="item"></hongbei>
          </div>
        </div>
      </van-tab>
      <van-tab title="免费体验">
        <div v-for="(item, index) in tuijian" :key="index">
          <div class="divjp">
            <hongbei :item="item"></hongbei>
          </div>
        </div>
      </van-tab>
      <van-tab title="小白入门">
        <div v-for="(item, index) in tuijian" :key="index">
          <div class="divjp">
            <hongbei :item="item"></hongbei>
          </div>
        </div>
      </van-tab>
      <van-tab title="快手菜">内容 2</van-tab>
      <van-tab title="家常菜">内容 3</van-tab>
      <van-tab title="面点">内容 1</van-tab>
      <van-tab title="川湘菜">内容 2</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import hongbei from "./hongbei.vue";
export default {
  components: { hongbei },
  data() {
    return {
      tuijian: [
        {
          title: "捞起大拌菜",
          imgsrc: "img/4.png",
          nuber: 61.2,
        },
        {
          title: "捞起大拌菜",
          imgsrc: "img/4.png",
          nuber: 22.6,
        },
        {
          title: "捞起大拌菜",
          imgsrc: "img/4.png",
          nuber: 56.2,
        },
        {
          title: "捞起大拌菜",
          imgsrc: "img/4.png",
          nuber: 10.6,
        },
        {
          title: "捞起大拌菜",
          imgsrc: "img/4.png",
          nuber: 23.9,
        },
        {
          title: "捞起大拌菜",
          imgsrc: "img/4.png",
          nuber: 61.2,
        },
        {
          title: "捞起大拌菜",
          imgsrc: "img/4.png",
          nuber: 56.1,
        },
        {
          title: "捞起大拌菜",
          imgsrc: "img/4.png",
          nuber: 87.3,
        },
        {
          title: "捞起大拌菜",
          imgsrc: "img/4.png",
          nuber: 20.9,
        },
        {
          title: "捞起大拌菜",
          imgsrc: "img/4.png",
          nuber: 15.6,
        },
      ],
      
      
      
      hongbei: [
        {
          title: "青柠鳕鱼",
          imgsrc: "img/11.png",
          nuber: 23.4,
        },
        {
          title: "青柠鳕鱼",
          imgsrc: "img/11.png",
          nuber: 32.8,
        },
        {
          title: "青柠鳕鱼",
          imgsrc: "img/11.png",
          nuber: 52.6,
        },
        {
          title: "青柠鳕鱼",
          imgsrc: "img/11.png",
          nuber: 99.1,
        },
        {
          title: "青柠鳕鱼",
          imgsrc: "img/11.png",
          nuber: 4.69,
        },
        {
          title: "青柠鳕鱼",
          imgsrc: "img/11.png",
          nuber: 5.02,
        },
        {
          title: "青柠鳕鱼",
          imgsrc: "img/11.png",
          nuber: 5.93,
        },
        {
          title: "青柠鳕鱼",
          imgsrc: "img/11.png",
          nuber: 63.3,
        },
        {
          title: "青柠鳕鱼",
          imgsrc: "img/11.png",
          nuber: 96.9,
        },
        {
          title: "青柠鳕鱼",
          imgsrc: "img/11.png",
          nuber: 32.5,
        },
        {
          title: "青柠鳕鱼",
          imgsrc: "img/11.png",
          nuber: 56.8,
        },
        {
          title: "青柠鳕鱼",
          imgsrc: "img/11.png",
          nuber: 23.4,
        },
      ],
    };
  },
};
</script>

<style scope>
.zong {
  margin-bottom: 200px;
}
h2 {
  text-align: center;
  line-height: 50px;
}
#van-swipe-item1 {
  float: left;
  margin-top: 15px;
  margin-left: 5px;
}
.van-swipe__indicators {
  display: none !important;
}
.divjp {
  float: left;
}
</style>