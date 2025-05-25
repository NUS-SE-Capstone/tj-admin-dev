<template>
  <div class="deleteDialog">
    <el-dialog
      v-model="dialogStatusVisible"
      :title="title"
      :show-close="false"
    >
      <div v-if="title==='确认上架'">
        <p>Confirm onshelf?</p>
        <p>After course onshelf, it will be displayed on the user end. It needs offshelf first if you want to modify course info.</p>
      </div>
      <p v-else>{{statusText}}</p>

      <div class="statusList" v-if="title==='确认下架'">
         <ul>
           <li><label>name:</label>{{courseData.name}}</li>
           <li><label>subscribers:</label>{{courseData.sold}}</li>
           <li><label>offshelf:</label>{{courseData.purchaseEndTime}}</li>
         </ul>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button class="button buttonPrimary" @click="handleClose"
            >Cancel</el-button
          >
          <el-button class="button primary" @click="handleSubmit"
            >Confirm</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import { ref, reactive, nextTick, watch,onMounted } from "vue";
// 引入接口
import {getCoursesDetail} from "@/api/curriculum"
// 获取父组件值、方法
const props = defineProps({
  // 弹层隐藏显示
  dialogStatusVisible: {
    type: Boolean,
    default: false,
  },
  statusText:{
    type: String,
    default: '',
  },
  title:{
    type: String,
    default: '',
  },
  courseData:{
    type: Object,
    default: () => ({}),
  },
  coursesesId:{
    type: String,
    default: '',
  }
});
// ------定义变量------
const emit = defineEmits(); //子组件获取父组件事件传值
// ------定义方法------
//关闭弹层
const handleClose = () => {
  emit("handleCloseDescend");
};
//提交确定删除
const handleSubmit = () => {
  emit("handleDescend");
};
</script>
