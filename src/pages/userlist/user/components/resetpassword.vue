<template>
  <div class="deleteDialog">
    <el-dialog v-model="dialogVisible" title="重置密码" :show-close="false">
      <p>
        请确认，是否重置
        <span class="fontColor333 ft-wt-600">{{ userName }}</span> 的密码？
      </p>
      <p>
        重置后，初始密码为
        <span class="fontColor">123456</span> ，请通知用户尽快修改密码
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
  userName: {
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
