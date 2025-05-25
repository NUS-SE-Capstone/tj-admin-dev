<!--笔记管理列表-->
<template>
  <div>
    <!-- 表格 -->
    <el-table :data="baseData" border stripe v-loading="loading">
      <el-table-column type="index" align="center" width="100" label="No." />
      <el-table-column
        label="Course"
        prop=""
        min-width="350"
        class-name="textLeft"
      >
        <template #default="scope">
          {{ scope.row.courseName }}
        </template>
      </el-table-column>

      <el-table-column
        prop=""
        label="Section"
        width="350"
        class-name="textLeft"
      >
        <template #default="scope">
          {{ scope.row.chapterName }}-{{ scope.row.sectionName }}
        </template>
      </el-table-column>
      <el-table-column label="Content" prop="" width="350" class-name="textLeft">
        <template #default="scope">
          <div class="ellipsisHidden">
            <el-popover
              placement="top-start"
              title=""
              width="300px"
              trigger="hover"
              :content="scope.row.content"
              v-if="scope.row.content.length > 50"
            >
              <template #reference>{{ scope.row.content }}</template>
            </el-popover>
            <p v-else>{{ scope.row.content }}</p>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="authorName" label="Author" width="180">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="Time"
        min-width="220"
        :formatter="formatTime"
      >
      </el-table-column>
      <el-table-column
        prop="usedTimes"
        label="Refer"
        sortable
        min-width="150"
      >
      </el-table-column>
      <el-table-column label="Like" sortable min-width="150">
        <template #default="scope">
          {{ scope.row.answerAmount ? scope.row.answerAmount : "0" }}
        </template>
      </el-table-column>
      <el-table-column prop="" label="Status" min-width="100">
        <template #default="scope">
          {{ !scope.row.hidden ? "Shown" : "Hidden" }}
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="Action"
        align="center"
        min-width="115"
        class-name="noteOperate"
      >
        <template #default="scope">
          <div class="operate">
            <span class="textDefault" @click="handleCheck(scope.row)"
              >View</span
            >
            <span
              :class="scope.row.hidden ? 'textDefault' : 'textWarning'"
              @click="handleSetStatus(scope.row)"
              >{{ !scope.row.hidden ? "Hide" : "Show" }}</span
            >
          </div>
        </template>
      </el-table-column>
      <!-- 空页面 -->
      <template #empty>
        <div class="emptyPageInter">
          <EmptyPage :isSearch="isSearch" :baseData="baseData"></EmptyPage>
        </div>
      </template>
      <!-- end -->
    </el-table>
    <!-- end -->
    <!-- 分页 -->
    <el-pagination
      v-if="total > 10"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="Number(total)"
      class="paginationBox"
    >
    </el-pagination>
    <!-- end -->
    <!-- 显示隐藏 -->
    <ShowHidden
      :dialogVisible="dialogVisible"
      :statusText="statusText"
      @handleStatus="handleHide"
      @handleClose="handleClose"
    ></ShowHidden>
    <!-- end -->
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { removeHTMLTag } from "@/utils/index";
import { formatTime } from "@/utils/index";
// 公用数据
import { statusData } from "@/utils/commonData";
// 接口api
import { setNotesShow, setNotesFolded } from "@/api/question";
// 导入组件
// 显示隐藏弹出层
import ShowHidden from "@/components/Show/index.vue";
// 空页面
import EmptyPage from "@/components/EmptyPage/index.vue";
// 获取父组件值、方法
const props = defineProps({
  // 搜索对象
  baseData: {
    type: Array,
    default: () => [],
  },
  // 总条数
  total: {
    type: Number,
    default: 0,
  },
  // 每页的数量
  pageSize: {
    type: Number,
    default: 0,
  },
  // loading
  loading: {
    type: Boolean,
    default: false,
  },
  // 是否触发了搜索按钮
  isSearch: {
    type: Boolean,
    default: false,
  },
});
// ------定义变量------
//初始化路由
const router = useRouter();
const emit = defineEmits(); //子组件获取父组件事件传值
const statusText = ref("此操作将隐藏该条笔记，是否继续隐藏？"); //删除提示

let answerId = ref(""); //笔记id
let dialogVisible = ref(false); //控制删除弹层
let detailData = reactive({}); //详情数据
let msg = ref(""); //提示信息
// ------定义方法------
// 显示
const handleShow = async () => {
  await setNotesShow(answerId.value)
    .then((res) => {
      if (res.code === 200) {
        ElMessage({

          message: msg.value,
          type: "success",
          showClose: false,
        });
        emit("getList");
      }
    })
    .catch((err) => {});
};
// 隐藏
const handleHide = async () => {
  await setNotesFolded(answerId.value)
    .then((res) => {
      if (res.code === 200) {
        ElMessage({

          message: msg.value,
          type: "success",
          showClose: false,
        });
        handleClose();
        emit("getList");
      }
    })
    .catch((err) => {});
};

// 设置每页条数
const handleSizeChange = (val) => {
  emit("handleSizeChange", val);
};
// 当前页
const handleCurrentChange = (val) => {
  emit("handleCurrentChange", val);
};
// 显示隐藏
const handleSetStatus = (row) => {
  answerId.value = row.id;
  if (row.hidden) {
    msg.value = "Note is shown";
    handleShow();
  } else {
    dialogVisible.value = true;
    msg.value = "Note is hidden";
  }
};
// 关闭删除弹层
const handleClose = () => {
  dialogVisible.value = false;
};
// 查看
const handleCheck = (row) => {
  router.push({
    path: "/interactive/noteDetails/" + row.id,
  });
};
</script>
<style lang="scss">
.noteOperate{
  .cell{
    padding: 0 !important;
  }
}
</style>