// 手机校验
export function validatePhone (rule, value, callback) {
  const reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
  if (value === "" || value === undefined || value === null) {
    if (rule.required) {
      callback("cellphone is empty")
    } else {
      callback()
    }
  } else {
    if (!reg.test(value) && value !== "") {
      callback("cellphone format err")
    } else {
      callback()
    }
  }
}
// 用户手机校验
export function validateuserPhone (rule, value, callback) {
  const reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
  if (value === "" || value === undefined || value === null) {
    if (rule.required) {
      callback("cellphone is empty")
    } else {
      callback()
    }
  } else {
    if (!reg.test(value) && value !== "") {
      callback("cellphone format err")
    } else {
      callback()
    }
  }
}
// 学生手机校验
export function validatestudentsPhone (rule, value, callback) {
  const reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
  if (value === "" || value === undefined || value === null) {
    if (rule.required) {
      callback("cellphone is empty")
    } else {
      callback()
    }
  } else {
    if (!reg.test(value) && value !== "") {
      callback("cellphone format err")
    } else {
      callback()
    }
  }
}
// 只能输入中英文
// 教师
export const validateContacts = (rule, value, callback) => {
  const reg = /[^\a-\z\A-\Z\u4E00-\u9FA5]$/g
  if (value === "" || value === undefined || value == null) {
    callback(new Error("name is empty, please input name"))
  } else {
    if (reg.test(value)) {
      callback(new Error("name format err, please input Chinese or English"))
    } else {
      callback()
    }
  }
}
// 员工
export const validatestaffs = (rule, value, callback) => {
  const reg = /[^\a-\z\A-\Z\u4E00-\u9FA5]$/g
  if (value === "" || value === undefined || value == null) {
    callback(new Error("name is empty"))
  } else {
    if (reg.test(value)) {
      callback(new Error("name format err, please input Chinese or English"))
    } else {
      callback()
    }
  }
}
// 学生
export const validatestudents = (rule, value, callback) => {
  const reg = /[^\a-\z\A-\Z\u4E00-\u9FA5]$/g
  if (value === "" || value === undefined || value == null) {
    callback(new Error("name is empty"))
  } else {
    callback()
  }
}
// 后台用户
export const validateuser = (rule, value, callback) => {
  const reg = /[^\a-\z\A-\Z\u4E00-\u9FA5]$/g
  if (value === "" || value === undefined || value == null) {
    callback(new Error("后台用户名称为空，请输入后台用户名称"))
  } else {
    callback()
  }
}
// 只能输入中、英文、数字
export const validateContent = (rule, value, callback) => {
  const reg = /[^\a-\z\A-\Z0-9\u4E00-\u9FA5]$/g
  if (value === "" || value === undefined || value == null) {
    callback(new Error("position is empty"))
  } else {
    if (reg.test(value)) {
      callback(new Error("position format err, please input Chinese, English or number"))
    } else {
      callback()
    }
  }
}
// 倒计时
export const timeCountdown = (obj) => {
  // obj包括timer、times show
  const TIME_COUNT = 60 // 默认倒计时秒数
  if (!obj.timer) {
    obj.times = TIME_COUNT
    obj.show = false
    obj.timer = setInterval(() => {
      if (obj.times > 0 && obj.times <= TIME_COUNT) {
        obj.times--
      } else {
        obj.show = true
        clearInterval(obj.timer) // 清空定时器
        obj.timer = null
      }
    }, 1000)
  }
  return {
    timer: obj.timer,
    show: obj.show,
    times: obj.times,
  }
}
// 身份证校验
export const validateIdentityCard = (value) => {
  const accountreg = /(^\d{15}$)|(^\d{17}(\d|X|x)$)/g
  let tipVal = ""
  if (value === undefined || value === "") {
    return "please input id card number"
  } else if (!accountreg.test(value)) {
    return "id card number format err"
  } else {
    return true
  }
}
export const indexValidate = (rule, value, callback) => {
  if (value === "" || value === undefined || value == null) {
    callback(new Error("category no. is empty"))
  } else {
    const re = /^[1-9][0-5]{0,1}$/
    const rsCheck = re.test(value)
    if (!rsCheck) {
      callback(new Error("please input number 1-15"))
    } else {
      callback()
    }
  }
}
// 分值只能输入正整数
export const isPositiveInteger = (rule, value, callback) => {
  if (value === undefined) {
    return callback(new Error("score is empty"))
  }
  if (!Number(value)) {
    callback(new Error("please set integer 1-50"))
  } else {
    const re = /(^[1-9]\d*$)/
    const rsCheck = re.test(value)
    if (!rsCheck) {
      callback(new Error("please set integer 1-50"))
    } else {
      callback()
    }
  }
}
// 解决首位是0的问题
export const first = (value, callback) => {
  if (value !== "") {
    // 以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
    // toString()转换成字符串
    if (value.toString().substr(0, 1) === "0" && value.length === 2) {
      callback(new Error("format err"))
    }
  }
}
// 价格校验
export const validatorPrice = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("price is empty"))
  }
  if (value > 100000 || value <= 0) {
    callback(new Error("price should be 0.01~100000.00"))
  }
  if (!Number(value)) {
    callback(new Error("price format err"))
  } else {
    const reg = /(^\d+\.?\d{0,2}$)/
    const rsCheck = reg.test(value)
    if (!rsCheck) {
      callback(new Error("price format err"))
    } else {
      callback()
    }
  }
}
// 金额校验
const amount = (value, callback) => {
  if (value) {
    first(value, callback)
  }
  if (!Number(value)) {
    callback(new Error("money format err"))
  } else {
    const re = /(^\d+\.?\d{0,2}$)/
    const rsCheck = re.test(value)
    if (!rsCheck) {
      callback(new Error("money format err"))
    } else {
      callback()
    }
  }
}
// 每满
export const amountConditionValid = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("amount condition is empty"))
  }
  if (value >= 10000 || value <= 0) {
    callback(new Error("money amount should be 0~10000.00"))
  }

  amount(Number(value), callback)
}
// 减
export const discountAmountValid = (rule, value, callback, num) => {
  if (!value) {
    return callback(new Error("discount is empty"))
  }
  if (value >= 10000 || value <= 0) {
    callback(new Error("discount amount should be 0~10000.00"))
  }
  if (Number(value) >= Number(num)) {
    callback(new Error("discount amount is too large"))
  }
  amount(Number(value), callback)
}
// 最高减
export const validatorMaxAmountValid = (rule, value, callback, num) => {
  if (!value) {
    return callback(new Error("max condition amount is empty"))
  }
  if (value >= 10000 || value <= 0) {
    callback(new Error("should be 0~10000.00"))
  }
  if (Number(value) < Number(num)) {
    callback(new Error("max condition amount is too small"))
  }
  amount(Number(value), callback)
}
// 每满金额减去打折后的价格，最高满减金额不能小于折扣后的价格 校验
export const discountRateValid = (rule, value, callback, num) => {
  if (!value) {
    return callback(new Error("max condition amount is empty"))
  }
  if (value >= 10000 || value <= 0) {
    callback(new Error("should be 0~10000.00"))
  }
  if (Number(value) < num) {
    callback(new Error("max condition amount is too small"))
  } else {
    callback()
  }
  amount(Number(value), callback)
}
// 无门榄
export const thresholdValid = (rule, value, callback, num) => {
  if (!value) {
    return callback(new Error("threshold is empty"))
  }
  if (value >= 10000 || value <= 0) {
    callback(new Error("should be 0~10000.00"))
  }
  amount(Number(value), callback)
}
// 校验折扣
export const validatorDiscountRate = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("discount is empty"))
  }
  if (value >= 10 || value <= 0.01) {
    callback(new Error("discount should be 0~10.0"))
  }
  if (!Number(value)) {
    callback(new Error("discount format err"))
  } else {
    const re = /(^\d+\.?\d{0,1}$)/
    const rsCheck = re.test(value)
    if (!rsCheck) {
      callback(new Error("discount format err"))
    } else {
      callback()
    }
  }
}
// 学习有效期校验
export const validatorValidDuration = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("available time is empty"))
  }
  first(value, callback)
  const re = /(^[1-9]\d*$)/
  const rsCheck = re.test(value)
  if (value <= 0 || value > 99) {
    callback(new Error("please input 1~99"))
  } else if (!rsCheck) {
    callback(new Error("format err"))
  } else {
    callback()
  }
}
// 结束时间应该晚于(大于)开始时间
export const validatorTime = (rule, value, callback, time, text) => {
  if (!value) {
    callback(new Error("receive deadline is empty"))
  } else {
    let start = new Date(time).getTime() //开始时间戳
    let end = new Date(value).getTime() //结束时间戳
    if (start === end) {
      callback(new Error(text))
    } else {
      callback()
    }
  }
}
