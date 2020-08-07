<template>
  <div>
    <van-swipe :loop="false" :width="200">
      <van-swipe-item id="van-swipe-item1">
        <img :src="item.imgsrc" />
        <span>{{item.title}}</span>
        <br />
        <a id="a1">{{item.nuber}}万浏览</a>
      </van-swipe-item>

    </van-swipe>
    <br />
  </div>
</template>

<script>
export default {
    props:["item"]
};
</script>

<style>

</style>