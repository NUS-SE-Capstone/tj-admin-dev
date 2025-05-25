<template>
  <div class="contentBox">
    <div class="bg-wt radius marg-tp-20">
      <div class="detailBox">
        <div class="tit" style="margin-top: 0"><span>Question</span></div>
        <!-- 主体内容 -->
        <!-- 选择题 -->
        <div
          class="title"
          v-if="
            detailData.data.type < 4
          "
        >
          <h3 class="step" v-html="detailData.data.name"></h3>
          <p class="option">
            A.
            <!-- 使用v-html渲染返回的富文本 -->
            <span v-html="detailData.data.options[0]"></span>
          </p>
          <p class="option">
            B.<span v-html="detailData.data.options[1]"></span>
          </p>
          <p class="option">
            C.<span v-html="detailData.data.options[2]"></span>
          </p>
          <p class="option">
            D.<span v-html="detailData.data.options[3]"></span>
          </p>
        </div>
        <!-- 判断题 -->
        <div class="title" v-if="detailData.data.type === 4">
          <h3 class="step" v-html="detailData.data.name"></h3>
        </div>
        <div class="tit" style="padding-bottom: 0"><span>Summary</span></div>
        <div class="tableBox">
          <!-- 表格 -->
          <table class="table">
            <tr>
              <th class="tabletitle" style="border-left: 1px solid #f5efee">
                Type
              </th>
              <th>
                <span v-if="detailData.data.type === 1">Select</span>
                <span v-if="detailData.data.type === 2">Multi-select</span>
                <span v-if="detailData.data.type === 3"
                  >Any-select</span
                >
                <span v-if="detailData.data.type === 4">Judge</span>
              </th>
              <th class="tabletitle">Level</th>
              <th>
                <span v-if="detailData.data.difficulty === 1">easy</span>
                <span v-if="detailData.data.difficulty === 2">medium</span>
                <span v-if="detailData.data.difficulty === 3">hard</span>
              </th>
              <th class="tabletitle">Correct Answer</th>
              <!-- Select答案 -->
              <th v-if="detailData.data.type === 1">
                <span v-if="detailData.data.answers[0] === 1">A</span>
                <span v-if="detailData.data.answers[0] === 2">B</span>
                <span v-if="detailData.data.answers[0] === 3">C</span>
                <span v-if="detailData.data.answers[0] === 4">D</span>
              </th>
              <!-- Multi-select答案 -->
              <th v-if="detailData.data.type === 2">
                <span v-if="detailData.data.answers[0] === 1">A</span>
                <span v-if="detailData.data.answers[1] === 1">A</span>
                <span v-if="detailData.data.answers[2] === 1">A</span>
                <span v-if="detailData.data.answers[3] === 1">A</span>
                <span v-if="detailData.data.answers[0] === 2">B</span>
                <span v-if="detailData.data.answers[1] === 2">B</span>
                <span v-if="detailData.data.answers[2] === 2">B</span>
                <span v-if="detailData.data.answers[3] === 2">B</span>
                <span v-if="detailData.data.answers[0] === 3">C</span>
                <span v-if="detailData.data.answers[1] === 3">C</span>
                <span v-if="detailData.data.answers[2] === 3">C</span>
                <span v-if="detailData.data.answers[3] === 3">C</span>
                <span v-if="detailData.data.answers[0] === 4">D</span>
                <span v-if="detailData.data.answers[1] === 4">D</span>
                <span v-if="detailData.data.answers[2] === 4">D</span>
                <span v-if="detailData.data.answers[3] === 4">D</span>
              </th>
              <!-- 不定项选择题 -->
              <th v-if="detailData.data.type === 3">
                <span v-if="detailData.data.answers[0] === 1">A</span>
                <span v-if="detailData.data.answers[1] === 1">A</span>
                <span v-if="detailData.data.answers[2] === 1">A</span>
                <span v-if="detailData.data.answers[3] === 1">A</span>
                <span v-if="detailData.data.answers[0] === 2">B</span>
                <span v-if="detailData.data.answers[1] === 2">B</span>
                <span v-if="detailData.data.answers[2] === 2">B</span>
                <span v-if="detailData.data.answers[3] === 2">B</span>
                <span v-if="detailData.data.answers[0] === 3">C</span>
                <span v-if="detailData.data.answers[1] === 3">C</span>
                <span v-if="detailData.data.answers[2] === 3">C</span>
                <span v-if="detailData.data.answers[3] === 3">C</span>
                <span v-if="detailData.data.answers[0] === 4">D</span>
                <span v-if="detailData.data.answers[1] === 4">D</span>
                <span v-if="detailData.data.answers[2] === 4">D</span>
                <span v-if="detailData.data.answers[3] === 4">D</span>
              </th>
              <!-- 判断题答案 -->
              <th v-if="detailData.data.type === 4">
                <span v-if="detailData.data.answers[0] === 1">True</span>
                <span v-if="detailData.data.answers[0] === 2">False</span>
              </th>
              <th class="tabletitle">Score</th>
              <th>{{ detailData.data.score }}分</th>
            </tr>
            <tr>
              <td class="tabletitle" style="border-left: 1px solid #f5efee">
                ReferTimes
              </td>
              <td>{{ detailData.data.useTimes || 0}}</td>
              <td class="tabletitle">AnswerTimes</td>
              <td>{{ detailData.data.answerTimes || 0}}</td>
              <td class="tabletitle">Correct</td>
              <td>{{ detailData.data.correctTimes===0?0+'%':Math.round( parseFloat(detailData.data.correctTimes * 100 / detailData.data.answerTimes)*100) / 100+'%' }}</td>
              <td class="tabletitle">Updater</td>
              <td>{{ detailData.data.updater }}</td>
            </tr>
            <tr>
              <td class="tabletitle" style="border-left: 1px solid #f5efee">
                Category
              </td>
              <td colspan="3">
                <span v-if="detailData.data.categories">
                  <span v-for="(c,i) in detailData.data.categories" :key="i">
                    {{c}} {{i < detailData.data.categories.length-1 ? "/" : ""}}
                  </span></span
                >
              </td>
              <td class="tabletitle">UpdateTime</td>
              <td colspan="3">{{ formatTimeOrdinary(detailData.data.updateTime) }}</td>
            </tr>
            <tr>
              <td class="tabletitle" style="border-left: 1px solid #f5efee">
                Reason
              </td>
              <td colspan="7">
                <span v-if="detailData.data.analysis === ''">None</span>
                <span v-else v-html="detailData.data.analysis"></span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="BoxBottom">
      <div class="btn">
        <el-button class="button primary" @click="handleGetback"
          >Back</el-button
        >
      </div>
    </div>
  </div>
</template>
  <script setup>
import { ref, reactive, onMounted, watch } from "vue"
import { useRouter, useRoute } from "vue-router"
import { formatTimeOrdinary } from "@/utils/index";
// 导入组件
// 接口api
import { getDetails } from "@/api/title.js"//题目接口
// ------定义变量------
//初始化路由
const router = useRouter() //获取全局
const route = useRoute() //获取局部
// 定义一个数组用于储存接口返回的数据
const detailData = reactive({
  data: {
    options: [],
    cates: [
      {
        firstCateName: "",
        secondCateName: "",
        thirdCateName: "",
      },
    ],
    answers: [],
  },
})
const detailId = ref(null)//当前题目详情id

// ------生命周期------
onMounted(() => {
  // 获取当前的id
  detailId.value = route.params.id
})
// 监听获取到id触发获取题目详情信息
watch(detailId, () => {
  gettitleDetail()
})
// 获取题目详情信息
const gettitleDetail = async () => {
  await getDetails(detailId.value)
    .then((res) => {
      if (res.code === 200) {
        detailData.data = res.data
        detailData.data.answers = res.data.answer.split(",").map(s => parseInt(s));
      }
    })
    .catch((err) => { })
}
// 返回
const handleGetback = () => {
  router.push({ path: "/title" })
};
  </script>
  <style lang="scss" scoped>
.detailBox {
  padding-left: 30px;
  padding-top: 30px;
  .tit {
    margin-bottom: 10px;
    margin-top: 30px;
  }
  .title {
    margin-left: 33.5px;
    display: block;
  }
}
.btn {
  padding-top: 0;
}
.BoxBottom {
  height: 101px;
  border-top: 1px solid #f5efee;
  margin-bottom: 20px;
  background: #ffffff;
  border-radius: 0 0 12px 12px;
  padding: 30px 0;
  .btn {
    // 让按钮居中
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .button {
    width: 114px;
    height: 40px;
  }
}
.step {
  font-weight: 600;
  font-size: 16px;
  color: #332929;
  margin-bottom: 20px;
}
.option {
  display: flex;
  margin-bottom: 10px;
}
.tableBox {
  display: flex;
  justify-content: center;
  .table {
    min-width: 960px;
    height: 240px;
    width: 100%;
    font-weight: 400;
    font-size: 14px;
    color: #332929;
    padding-left: 42.5px;
    padding-right: 37.5px;
    .tabletitle {
      width: 100px;
      height: 50px;
      background: #fdfcfa;
    }
    tr {
      height: 50px;
      // 第三第四行高度为70px
      th {
        font-weight: normal;
        border-bottom: 1px solid #f5efee;
        border-top: 1px solid #f5efee;
        border-right: 1px solid #f5efee;
        margin: -1px;
      }
      &:nth-child(3) {
        height: 70px;
      }
      &:nth-child(4) {
        height: 70px;
      }
      td {
        text-align: center;
        vertical-align: middle;
        border-bottom: 1px solid #f5efee;
        border-right: 1px solid #f5efee;
      }
    }
  }
}
.bg-wt {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
  
  