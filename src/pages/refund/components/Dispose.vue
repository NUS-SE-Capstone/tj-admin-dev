<!--发放弹层-->
<template>
  

  <div class="succeeBox">
    <el-dialog v-model="dialogVisible" :title="title">
      <div class="icon"><component :is="Result403Icon"></component></div>
      <div class="succeeCon">
        <p class="tit">Finish all refund order examination!</p>
        <p class="tip">
          Back to the refund order list page
        </p>
      </div>
      <div class="btn">
        <el-button class="button primary" @click="handleGetback"
          >OK</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import Result403Icon from "@/assets/Check-Circle-Fill@2x.svg?component";
// 获取父组件值、方法
const props = defineProps({
  // 弹层隐藏显示
  dialogVisible: {
    type: Boolean,
    default: false,
  },
})
// ------定义变量------
const emit = defineEmits() //子组件获取父组件事件传值
const router = useRouter(); //获取全局

//关闭弹层
const handleGetback = (row) => {
  router.push({
    path: "/order/refund",
  });
};
</script>
<style lang="scss" scoped>
.markDispose{
  span{
    width: 30px;
    height: 30px;
    display: inline-block;
    background: url(@/assets/succeedIcon.png) no-repeat;
    background-size: contain;
  }
}
</style>
