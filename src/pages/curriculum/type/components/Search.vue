<!--分类搜索-->
<template>
  <div class="bg-wt radius marg-tp-20">
    <div class="pad-30 searchForm">
      <el-form ref="ruleForm" :inline="true" :model="searchData">
        <el-row :gutter="30">
          <el-col :span="6">
            <el-form-item label="Category Status" prop="status">
              <div class="el-input">
                <el-select
                  v-model="searchData.status"
                  clearable
                  placeholder="please select"
                  style="width: 100%"
                >
                  <el-option
                    v-for="item in statusData"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Category Name" prop="name">
              <el-input
                placeholder="please input"
                v-model="searchData.name"
                clearable
                class="el-input"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <div class="btn">
              <el-button class="button primary" @click="handleSearch"
                >Search</el-button
              >
              <el-button class="button buttonSub" @click="handleReset(ruleForm)"
                >Reset</el-button
              >
            </div>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue"
// 公用数据
import { statusData } from "@/utils/commonData"
// 获取父组件值、方法
const props = defineProps({
  // 搜索对象
  searchData: {
    type: Object,
    default: () => ({}),
  },
})
// ------定义变量------
const emit = defineEmits() //子组件获取父组件事件传值
const ruleForm = ref() //定义搜索表单的ref
// ------定义方法------
// 搜索
const handleSearch = () => {
  emit("handleSearch")
}
// 重置搜索表单
const handleReset = (ruleForm) => {
  ruleForm.resetFields()
  emit("handleReset") //重置后table 闭合二级和三级
};
</script>