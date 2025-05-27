import Layout from "@/pages/layouts/index.vue"
import ClassIcon from "@/assets/icon_class.svg"
import HDIcon from "@/assets/icon_hd.svg"
import orderIcon from "@/assets/icon_order.svg"
import UserIcon from "@/assets/icon_user.svg"
import YXIcon from "@/assets/icon_yx.svg"
import OurseIcon from "@/assets/icon_course.svg"
export default [

  {
    path: "/curriculum",
    component: Layout,
    redirect: "/curriculum/index",
    name: "curriculum",
    meta: { title: "Course", icon: '&#xe60f;' },
    children: [
      {
        path: "index",
        name: "curriculum",
        component: () => import("@/pages/curriculum/course/index.vue"),
        meta: { title: "Course Manage" },
      },
      {
        path: "add/:id",
        name: "curriculumAdd",
        component: () => import("@/pages/curriculum/course/add.vue"),
        meta: { title: "Add", hidden: true, fmeta: {path: '/curriculum/index', title: 'Course'} },
      },
      {
        path: "details/:id",
        name: "curriculumDetail",
        component: () => import("@/pages/curriculum/course/details.vue"),
        meta: { title: "CourseDetails", hidden: true, fmeta: {path: '/curriculum/index', title: 'Course'} },
      },
      {
        path: "type",
        name: "type",
        component: () => import("@/pages/curriculum/type/index.vue"),
        meta: { title: "Category" },
      },
      {
        path: "media",
        name: "media",
        component: () => import("@/pages/curriculum/media/index.vue"),
        meta: { title: "Media Manage" },
      }
    ],
  },
  {
    path: "/title",
    component: Layout,
    redirect: "/title/index",
    name: "title",
    meta: { title: "Question", icon: '&#xe60b;' },
    children: [
      {
        path: "index",
        name: "title",
        component: () => import("@/pages/title/index.vue"),
        meta: { title: "Question Manage" },
      },
      {
        path: "add/:id",
        name: "titleAdd",
        component: () => import("@/pages/title/add.vue"),
        meta: { title: "Add", hidden: true ,fmeta: {path: '/title/index', title: 'QuestionManage'} },
      },
      {
        path: "details/:id",
        name: "titleDetails",
        component: () => import("@/pages/title/details.vue"),
        meta: { title: "Edit", hidden: true ,fmeta: {path: '/title/index', title: 'QuestionManage'} },
      },
      {
        path: "detail/:id",
        name: "titleDetail",
        component: () => import("@/pages/title/detail.vue"),
        meta: { title: "Detail", hidden: true ,fmeta: {path: '/title/index', title: 'QuestionManage'} },
      }
    ],
  },
  // {
  //   path: "/marketing",
  //   component: Layout,
  //   redirect: "/marketing/index",
  //   name: "marketing",
  //   meta: { title: "营销中心", icon: '&#xe60d;' },
  //   children: [
  //     {
  //       path: "index",
  //       name: "marketing",
  //       component: () => import("@/pages/marketing/index.vue"),
  //       meta: { title: "优惠券管理" },
  //     },
  //     {
  //       path: "add/:id",
  //       name: "add",
  //       component: () => import("@/pages/marketing/add.vue"),
  //       meta: { title: "添加编辑", hidden: true ,fmeta: {path: '/marketing/index', title: '优惠券管理'} },
  //     },
  //     {
  //       path: "details/:id",
  //       name: "details",
  //       component: () => import("@/pages/marketing/details.vue"),
  //       meta: { title: "详情", hidden: true ,fmeta: {path: '/marketing/index', title: '优惠券管理'} },
  //     },
  //   ],
  // },
  {
    path: "/interactive",
    component: Layout,
    redirect: "/interactive/index",
    name: "interactive",
    meta: { title: "Interaction", icon: '&#xe60e;' },
    children: [
      {
        path: "index",
        name: "interactive",
        component: () => import("@/pages/interactive/index.vue"),
        meta: { title: "QA Manage" },
      },
      {
        path: "details/:id",
        name: "answersDetails",
        component: () => import("@/pages/interactive/details.vue"),
        meta: { title: "QA Detail", hidden: true ,fmeta: {path: '/interactive/index', title: 'QA Manage'} },
      },
      {
        path: "replies",
        name: "repliesDetails",
        component: () => import("@/pages/interactive/commentDetails.vue"),
        meta: { title: "Reply Detail", hidden: true ,fmeta: {path: '/interactive/index', title: 'QA Manage'} },
      },
      {
        path: "note",
        name: "note",
        component: () => import("@/pages/note/index.vue"),
        meta: { title: "Note Manage" },
      },
      {
        path: "noteDetails/:id",
        name: "noteDetails",
        component: () => import("@/pages/note/details.vue"),
        meta: { title: "Note Detail", hidden: true ,fmeta: {path: '/note/index', title: 'Note Manage'} },
      },
    ],
  },
  {
    path: "/user",
    component: Layout,
    redirect: "/user/index",
    name: "user",
    meta: { title: "User", icon: '&#xe610;' },
    children: [
      {
        path: "index",
        name: "student",
        component: () => import("@/pages/userlist/student/index.vue"),
        meta: { title: "Student Manage" },
      },
      // {
      //   path: "teacher",
      //   name: "teacher",
      //   component: () => import("@/pages/userlist/teacher/index.vue"),
      //   meta: { title: "Teacher Manage" },
      // },
      // {
      //   path: "users",
      //   name: "users",
      //   component: () => import("@/pages/userlist/user/index.vue"),
      //   meta: { title: "Admin Manage" },
      // },
    ],
  },
  // {
  //   path: "/order",
  //   component: Layout,
  //   redirect: "/order/index",
  //   name: "order",
  //   meta: { title: "订单管理", icon: '&#xe611;' },
  //   children: [
  //     {
  //       path: "index",
  //       name: "order",
  //       component: () => import("@/pages/order/index.vue"),
  //       meta: { title: "订单管理" },
  //     },
  //     {
  //       path: "refund",
  //       name: "refund",
  //       component: () => import("@/pages/refund/index.vue"),
  //       meta: { title: "退款管理" },
  //     },
  //     {
  //       path: "details/:id",
  //       name: "orderDetails",
  //       component: () => import("@/pages/order/details.vue"),
  //       meta: { title: "订单详情", hidden: true ,fmeta: {path: '/order/index', title: '订单管理'} },
  //     },
  //     {
  //       path: "refundDetails/:id",
  //       name: "refundDetails",
  //       component: () => import("@/pages/refund/details.vue"),
  //       meta: { title: "退款详情", hidden: true ,fmeta: {path: '/order/refund', title: '退款管理'} },
  //     },
  //   ],
  // },
  {
    path: "/my",
    component: Layout,
    redirect: "/my/index",
    name: "my",
    meta: { title: "My", icon: '&#xe611;', hidden: true  },
    children: [
      {
        path: "index",
        name: "my",
        component: () => import("@/pages/my/index.vue"),
        meta: { title: "Personal Info", hidden: true  },
      }
    ],
  },
  {
    path: "/result",
    name: "result",
    component: Layout,
    redirect: "/result/success",
    meta: { title: "Result", icon: orderIcon, hidden: true },
    children: [
      // {
      //   path: 'success',
      //   name: 'ResultSuccess',
      //   component: () => import('@/pages/result/success/index.vue'),
      //   meta: { title: '成功页' },
      // },
      // {
      //   path: 'fail',
      //   name: 'ResultFail',
      //   component: () => import('@/pages/result/fail/index.vue'),
      //   meta: { title: '失败页' },
      // },
      // {
      //   path: 'network-error',
      //   name: 'ResultNetworkError',
      //   component: () => import('@/pages/result/network-error/index.vue'),
      //   meta: { title: '网络异常' },
      // },
      // {
      //   path: '403',
      //   name: 'Result403',
      //   component: () => import('@/pages/result/403/index.vue'),
      //   meta: { title: '无权限' },
      // },
      {
        path: "404",
        name: "Result404",
        component: () => import("@/pages/result/404/index.vue"),
        meta: { title: "PageMissing" },
      },
      // {
      //   path: '500',
      //   name: 'Result500',
      //   component: () => import('@/pages/result/500/index.vue'),
      //   meta: { title: '服务器出错页' },
      // },
      // {
      //   path: 'browser-incompatible',
      //   name: 'ResultBrowserIncompatible',
      //   component: () => import('@/pages/result/browser-incompatible/index.vue'),
      //   meta: { title: '浏览器不兼容页' },
      // },
      // {
      //   path: 'maintenance',
      //   name: 'ResultMaintenance',
      //   component: () => import('@/pages/result/maintenance/index.vue'),
      //   meta: { title: '系统维护页' },
      // },
    ],
  },
]
