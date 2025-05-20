<!--章排序-->
<template>
  <el-dialog
    v-model="dialogSortVisible"
    title="Section Sort"
    :before-close="handleClose"
  >
    <div>
      <el-form ref="ruleFormRef" label-width="150px" class="demo-ruleForm">
        <el-form-item label="Move current to No." class="marg-b-0">
          <el-input-number
            v-model="num"
            @change="handleChange"
            :min="minNum"
            :max="itemData.length"
            label="Desc"
          ></el-input-number>
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button class="button buttonPrimary" @click="handleClose"
          >Cancel</el-button
        >
        <el-button class="button primary" @click="handleSubmit">Submit</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import { ref, reactive, nextTick } from "vue";
import { ElMessage } from "element-plus";

// 获取父组件值、方法
const props = defineProps({
  // 弹层隐藏显示
  dialogSortVisible: {
    type: Boolean,
    default: false,
  },
  //当前排序值
  sortValue: {
    type: Number,
    default: 0,
  },
  // 最新值
  minNum: {
    type: Number,
    default: 0,
  },
  // 当前章的总条数
  itemData:{
    type: Object,
    default: () => [],
  }
});
// ------定义变量------
const emit = defineEmits(); //子组件获取父组件事件传值
let num = ref(1); //排序值
// ------定义方法------
// 搜索
const handleSubmit = async () => {
  if (props.sortValue === num.value) {
    ElMessage({

      message: "序号错误，请重新输入!",
      type: "error",
    });
  }else{
    emit('getSortValue',num.value)
  }
  handleClose()
};
// 关闭弹层
const handleClose = () => {
  num.value=1
  emit("handleClose");
};
</script>
