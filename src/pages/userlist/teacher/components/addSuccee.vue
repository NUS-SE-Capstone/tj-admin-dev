<template>
  <div class="succeeBox">
    <el-dialog v-model="dialogSucceeVisible" :title="title">
      <div class="icon"><component :is="Result403Icon"></component></div>
      <div class="succeeCon">
        <p class="tit"><span>{{fromData.name}}</span> account create success</p>
        <p class="phone">Phone: {{fromData.cellPhone}}</p>
        <p class="tip">
          Please inform the user to change the password as soon as possible, and complete the personal information.
        </p>
      </div>
      <div class="btn">
        <el-button class="button primary" @click="handleClose"
          >OK</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import Result403Icon from "@/assets/Check-Circle-Fill@2x.svg?component";
// 获取父组件值、方法
const props = defineProps({
  // 表单数据
  fromData: {
    type: Object,
    default: () => ({}),
  },
  // 弹层隐藏显示
  dialogSucceeVisible: {
    type: Boolean,
    default: false,
  },
});
// ------定义变量------
const emit = defineEmits(); //子组件获取父组件事件传值
// ------定义方法------
const handleClose = () => {
  emit("handleSucceeClose");
};
</script>
