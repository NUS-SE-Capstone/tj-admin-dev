// 教师状态数据
export const statusData = [
  {
    value: 1,
    label: "Enabled",
  },
  {
    value: 0,
    label: "Disabled",
  },
]
// 难易程度数据
export const difficultyData = [
  {
    value: 1,
    label: "easy",
  },
  {
    value: 2,
    label: "medium",
  },
  {
    value: 3,
    label: "hard",
  },
]
// 題目類型
export const titleTypeData = [
  {
    value: 1,
    label: "select",
  },
  {
    value: 2,
    label: "multi-select",
  },
  {
    value: 3,
    label: "any-select",
  },
  {
    value: 4,
    label: "judge",
  }
]
// 答案类型
export const titleAnswerData = [
  {
    value: 1,
    label: "true",
  },
  {
    value: 0,
    label: "false",
  }
]
// 售卖模式
export const sellingModelData = [
  {
    value: 0,
    label: "free",
  },
  // todo: pay service will be added in the future
  // {
  //   value: 1,
  //   label: "paid",
  // }
]
// 课程状态
export const courseStatusData = [
  {
    value: 1,
    label: "Draft",
  },
  {
    value: 2,
    label: "Online",
  },
  {
    value: 3,
    label: "Offline",
  },
  {
    value: 4,
    label: "Compeleted",
  }
]
// 步骤条数据
export const stepData = [
  {
    value: 1,
    label: "Basic",
  },
  {
    value: 2,
    label: "Catalog",
  },
  {
    value: 3,
    label: "Video",
  },
  {
    value: 4,
    label: "Question",
  },
  {
    value: 5,
    label: "Teacher",
  }
]
// 优惠卷类型数据
export const couponsTypeData = [
  {
    value: 1,
    label: "每满减",
  },
  {
    value: 4,
    label: "满减",
  },
  {
    value: 2,
    label: "折扣",
  },
  {
    value: 3,
    label: "无门槛",
  },
]
// 优惠券状态数据
export const couponsStatusData = [
  {
    value: 1,
    label: "待发放",
  },
  {
    value: 2,
    label: "未开始",
  },
  {
    value: 3,
    label: "进行中",
  },
  {
    value: 4,
    label: "已结束",
  },
  {
    value: 5,
    label: "已暂停",
  },
]
// 优惠券使用范围数据
export const couponsScopeData = [
  {
    value: 0,
    label: "不限定",
  },
  {
    value: 1,
    label: "指定课程分类",
  }
]
// 优惠券推广方式数据
export const couponsWayData = [
  {
    value: 1,
    label: "手动领取",
  },
  {
    value: 2,
    label: "指定发放",
  }
]
// 优惠券发放数量数据
export const couponsGrantData = [
  {
    value: 1,
    label: "无限量",
  },
  {
    value: 2,
    label: "指定数量",
  }
]

// 订单状态数据
export const orderStatusData = [
  {
    value: 1,
    label: "未支付",
  },
  {
    value: 2,
    label: "已支付",
  },
  {
    value: 3,
    label: "已关闭",
  },
  {
    value: 4,
    label: "已完成",
  },
  {
    value: 5,
    label: "已报名",
  },
  // {
  //   value: 6,
  //   label: "已退款",
  // }
]
// 退款状态数据
export const refundStatusData = [
  {
    value: 1,
    label: "待审批",
  },
  {
    value: 2,
    label: "学员取消退款",
  },
  {
    value: 3,
    label: "同意退款",
  },
  {
    value: 4,
    label: "拒绝退款",
  },
  {
    value: 5,
    label: "退款成功",
  },
  {
    value: 6,
    label: "退款失败",
  }
]
// 支付方式数据
export const payChannelCodeData = [
  {
    value: 'weixinPay',
    label: "微信",
  },
  {
    value: 'aliPay',
    label: "支付宝",
  },
  // {
  //   value: 'simulate',
  //   label: "模拟通道",
  // }
]
// 支付方式数据
export const resultData = [
  {
    value: 1,
    label: "同意",
  },
  {
    value: 2,
    label: "拒绝",
  }
]
// 问题状态
export const questionsData = [
  {
    value: 1,
    label: "Seen",
  },
  {
    value: 0,
    label: "Not see",
  }
]
// 性别
export const sexData = [
  {
    value: 1,
    label: "Male",
  },
  {
    value: 2,
    label: "Female",
  }
]
// 优惠券发放方式
export const grantTypeData = [
  {
    value: 1,
    label: "立刻发放",
  },
  {
    value: 2,
    label: "定时发放",
  }
]
// 优惠券发放方式
export const grantDeadlineData = [
  {
    value: 1,
    label: "固定天数",
  },
  {
    value: 2,
    label: "固定时间段",
  }
]
// 兑换码
export const redeemTypeData = [
  {
    value: 1,
    label: "未兑换",
  },
  {
    value: 2,
    label: "已兑换",
  }
]
// 兑换码
export const showStautsData = [
  {
    value: 0,
    label: "Show",
  },
  {
    value: 1,
    label: "Hide",
  }
]
