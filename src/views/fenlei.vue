<template>
  <div>
    <van-tabs type="card">
      <van-tab title="分类">
        <van-search v-model="value" placeholder="请输入搜索关键词" />

        <van-tree-select
          :items="items"
          :active-id.sync="activeId"
          :main-active-index.sync="activeIndex"
        />
      </van-tab>
      <van-tab title="食材">
        <van-search v-model="value" placeholder="请输入搜索关键词" />

        <van-tree-select
          :items="itemss"
          :active-id.sync="activeId"
          :main-active-index.sync="activeIndex"
        />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      activeId: 10,
      activeIndex: 0,
      items: [
        {
          text: "热门",
          children: [
            { text: "蛋糕" },
            { text: "湘菜" },
            { text: "中餐" },
            { text: "披萨" },
            { text: "吐司" },
            { text: "沙拉" },
            { text: "曲奇" },
            { text: "慕斯" },
            { text: "凉菜" },
            { text: "粤菜" },
            { text: "西餐" },
            { text: "慕斯" },
            { text: "凉菜" },
            { text: "粤菜" },
            { text: "西餐" },
          ],
        },
        {
          text: "菜式",
          children: [
            { text: "家常菜" },
            { text: "素菜" },
            { text: "私房菜" },
            { text: "荤菜" },
            { text: "海鲜" },
            { text: "下酒菜" },
            { text: "卤菜" },
            { text: "冰品" },
            { text: "开胃菜" },
            { text: "腌制" },
            { text: "汤" },
            { text: "海鲜" },
            { text: "下酒菜" },
            { text: "卤菜" },
          ],
        },
        {
          text: "菜系",
          children: [
            { text: "湘菜" },
            { text: "川菜" },
            { text: "粤菜" },
            { text: "东北菜" },
            { text: "浙菜" },
            { text: "徽菜" },
            { text: "闽菜" },
            { text: "京菜" },
            { text: "苏菜" },
            { text: "鲁菜" },
            { text: "本帮菜" },
            { text: "云南菜" },
            { text: "台湾美食" },
            { text: "香港美食" },
          ],
        },
        {
          text: "特色",
          children: [{ text: "香锅" }, { text: "酸菜" }, { text: "泡菜" }],
        },
        {
          text: "烘焙",
          children: [
            { text: "戚风蛋糕" },
            { text: "奶油蛋糕" },
            { text: "泡芙" },
            { text: "派" },
            { text: "曲奇" },
          ],
        },
        {
          text: "主食",
          children: [
            { text: "包子" },
            { text: "焖饭" },
            { text: "煲仔饭" },
            { text: "凉面" },
            { text: "汉堡" },
          ],
        },
      ],
      itemss: [
        {
          text: "肉类",
          children: [
            { text: "猪肉" },
            { text: "牛肉" },
            { text: "羊肉" },
            { text: "鸡肉" },
            { text: "鱼肉" },
            { text: "鸭肉" },
            { text: "兔肉" },
            { text: "鸽肉" },
            { text: "鹅肉" },
            { text: "鹿肉" },
            { text: "驴肉" },
            { text: "和牛" },
            { text: "牛腩" },
            { text: "排骨" },
            { text: "鸡爪" },
          ],
        },
        {
          text: "蛋/奶",
          children: [
            { text: "鸡蛋" },
            { text: "鸭蛋" },
            { text: "鹌鹑蛋" },
            { text: "鹅蛋" },
            { text: "鸽子蛋" },
            { text: "松花蛋" },
            { text: "咸鸭蛋" },
            { text: "奶酪" },
            { text: "黄油" },
            { text: "奶油" },
            { text: "淡奶油" },
            { text: "羊乳酪" },
          ],
        },
        {
          text: "蔬菜",
          children: [
            { text: "娃娃菜" },
            { text: "香菜" },
            { text: "萝卜" },
            { text: "油菜" },
            { text: "茼蒿" },
            { text: "荠菜" },
            { text: "蕨菜" },
            { text: "生菜" },
            { text: "紫甘蓝" },
            { text: "豆角" },
            { text: "包菜" },
            { text: "藜蒿" },
            { text: "芹菜" },
            { text: "空心菜" },
          ],
        },
        {
          text: "调味品",
          children: [{ text: "油" }, { text: "盐" }, { text: "味精" }],
        },
        {
          text: "果品类",
          children: [
            { text: "西瓜" },
            { text: "葡萄" },
            { text: "芒果" },
            { text: "桑葚" },
            { text: "黄桃" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.van-tree-select {
  height: 600px !important;
}
</style>