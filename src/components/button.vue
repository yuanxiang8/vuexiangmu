<template>
    <van-tabbar v-model="active" active-color="red">
        <van-tabbar-item icon="home-o"><router-link to="/shou"  tag="span">首页</router-link></van-tabbar-item>
        <van-tabbar-item icon="vip-card-o"><router-link to="/vip"  tag="span">VIP会员</router-link></van-tabbar-item>
        <van-tabbar-item icon="apps-o"><router-link to="/fenlei"  tag="span">分类</router-link></van-tabbar-item>
        <van-tabbar-item icon="manager-o"><router-link to="/wode"  tag="span">我的</router-link></van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style scoped>

</style>