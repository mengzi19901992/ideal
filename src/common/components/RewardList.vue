<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-cell class="cell-wrap" v-for="item in list" :key="item" is-link>
      <van-card
        num="20"
        price="200"
        desc="描述信息"
        title="奖励标题奖励标题"
        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      />
    </van-cell>
  </van-list>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
    };
  },

  components: {},

  computed: {},

  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 20) {
          this.finished = true;
        }
      }, 1000);
    },
  },
};
</script>
<style scoped>
.cell-wrap {
  display: flex;
  align-items: center;
}
.van-card{
    background-color: #fff;
}
</style>