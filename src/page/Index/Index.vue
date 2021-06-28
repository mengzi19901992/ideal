<template>
  <div class="index">
    <!-- 头部banner -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!-- 功能列表 -->
    <RewardList />
  </div>
</template>

<script>
import RewardList from '@/common/components/RewardList.vue';
export default {
  name: "Index",
  components: {
    RewardList
  },
};
</script>

<style scoped>
.index {
  display: flex;
  flex-direction: column;
  margin: 10px;
}
.my-swipe{
    width: 100%;
    border-radius: 10px;
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
