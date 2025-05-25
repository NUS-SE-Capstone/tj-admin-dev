<!--笔记课程信息-->
<template>
  <div class="orderInfo">
    <!-- 标题 -->
    <div class="tit"><span>Note</span></div>
    <!-- end -->
    <div class="noteItem">
      <table class="tableBox">
        <tr>
          <td>ID</td>
          <td colspan="2">{{fromData.id}}</td>
          <td>Category</td>
          <td colspan="2">{{fromData.categoryNames}}</td>
        </tr>
        <tr>
          <td>Section</td>
          <td colspan="5">{{fromData.chapterName}}/{{fromData.chapterName}}</td>
        </tr>
        <tr>
          <td>Time</td>
          <td width="20%">{{formatSeconds(fromData.noteMoment)}}</td>
          <td>Refer</td>
          <td>{{fromData.usedTimes?fromData.usedTimes:0}}</td>
          <td width="60%">Visible</td>
          <td width="20%">{{!fromData.hidden?'shown':'hidden'}}</td>
        </tr>
      </table>
      <!-- <ul>
        <li>
          <div class="tit">ID编号</div>
          <div>ID编号</div>
          <div class="tit">课程分类</div>
          <div>ID编号</div>
        </li>
        <li>
          <div class="tit">所属章节</div>
          <div>ID编号</div>
        </li>
        <li>
          <div class="tit">所选时间</div>
          <div>ID编号</div>
          <div class="tit">点赞数量</div>
          <div>ID编号</div>
          <div class="tit">被引用次数</div>
          <div>ID编号</div>
          <div class="tit">是否展示</div>
          <div>ID编号</div>
        </li>
      </ul> -->
    </div>
    <div>
    <!-- 标题 -->
    <div class="tit"><span>Note</span></div>
    <!-- end -->
    <!-- 笔记内容 -->
    <div class="noteItem">
      <table class="tableBox">
        <tr>
          <td>Author</td>
          <td>{{fromData.authorName}}</td>
          <td>Phone</td>
          <td>{{fromData.authorPhone}}</td>
          <td>Time</td>
          <td>{{formatTimeOrdinary(fromData.createTime)}}</td>
        </tr>
        <tr>
          <td>Referby</td>
          <td colspan="5">{{fromData.gathers?fromData.gathers.toString():null}}</td>
        </tr>
        <tr>
          <td>Content</td>
          <td colspan="5">{{fromData.content}}</td>
        </tr>
      </table>
      <!-- <ul>
        <li>
          <div class="tit">笔记作者</div>
          <div>ID编号</div>
          <div class="tit">作者手机号</div>
          <div>ID编号</div>
          <div class="tit">笔记发布时间</div>
          <div>ID编号</div>
        </li>
        <li>
          <div class="tit">引用人信息</div>
          <div>ID编号</div>
        </li>
        <li>
          <div class="tit">笔记内容</div>
          <div>ID编号</div>
        </li>
        
      </ul> -->
    </div>
    <!-- end -->
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import { ElMessage } from "element-plus";
import { useRouter, useRoute } from "vue-router";
import {formatSeconds,formatTimeOrdinary} from "@/utils/index"
// ------定义变量------
// 获取父组件值、方法
const props = defineProps({
  // 订单信息
  fromData: {
    type: Object,
    default: () => ({}),
  },
});
//初始化路由
const router = useRouter(); //获取全局
const route = useRoute(); //获取局部
const emit = defineEmits(); //子组件获取父组件事件传值
// ------生命周期------
onMounted(() => {});

// ------定义方法------

// 向父组件暴露方法
defineExpose({});
</script>
<style src="./../index.scss" lang="scss" scoped></style>

