<template>
  <div class="deleteDialog">
    <el-dialog v-model="dialogVisible" title="Reset Password" :show-close="false">
      <p>
        Please Confirm to reset
        <span class="fontColor333 ft-wt-600">{{ studentsName }}</span> password ？
      </p>
      <p>
        After reset，Inital Password is 
        <span class="fontColor">123456</span>
      </p>
      <template #footer>
        <span class="dialog-footer">
          <el-button class="button buttonPrimary" @click="handleClose"
            >Cancel</el-button
          >
          <el-button class="button primary" @click="handleSubmit"
            >Reset</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
// 获取父组件值、方法
const props = defineProps({
  // 弹层隐藏显示
  dialogVisible: {
    type: Boolean,
    default: false,
  },
  // 学生名称
  studentsName: {
    type: String,
    default: "",
  },
});
// ------定义变量------
const emit = defineEmits(); //子组件获取父组件事件传值
// ------定义方法------
//关闭弹层
const handleClose = () => {
  emit("handleClose");
};
//提交确定删除
const handleSubmit = () => {
  emit("handleReset");
};
</script>
