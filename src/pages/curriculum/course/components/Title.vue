<!--标题-->
<template>
  <div class="tit">
    <span v-if="active === 0">Basic</span>
    <span v-if="active === 1">Catalog</span>
    <span v-if="active === 2">Video</span>
    <span v-if="active === 3">Question</span>
    <span v-if="active === 4">Teacher</span>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
// 获取父组件值、方法
const props = defineProps({
  // 搜索对象
  active: {
    type: Number,
    default: 0,
  },
});
</script>

<style scoped></style>