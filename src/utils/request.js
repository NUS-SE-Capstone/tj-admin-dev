import axios from "axios";
import { ElMessage, ElMessageBox } from "element-plus";
import { tryRefreshToken } from "./refreshToken";
import {USER_KEY, TOKEN_NAME} from "../config/global";
import  router  from '../router';
import proxy from '../config/proxy';
const env = import.meta.env.MODE || "development";
const host = env === 'mock' ? 'https://tjxt-dev.itheima.net/api' : proxy[env].host; // 如果是mock模式 就不配置host 会走本地Mock拦截
const CODE = {
  LOGIN_TIMEOUT: 1000,
  REQUEST_SUCCESS: 200,
  REQUEST_FOBID: 1001,
};
// 登录异常弹窗处理
let isLogin = true
// 刷新标记
// let refreshing = ref(false)

const instance = axios.create({
  baseURL:  host, // 'http://172.17.2.134/api-test',
  timeout: 1000,
  withCredentials: false,
});

instance.interceptors.request.use((config) => {
  const TOKEN = sessionStorage.getItem(TOKEN_NAME);
  config.headers = {
    "Content-Type": "application/json",
    "authorization": TOKEN
  }
  return config
});

instance.defaults.timeout = 5000;
async function refreshToken(err){
  // 尝试刷新token
  let success = await tryRefreshToken();
  if(success){
    // refreshing.value = false;
    return instance(err.config);
  }
  // refreshing.value = false;
  ElMessageBox.alert(
    'Login timeout, please relogin！',
    'Login timeout',
    {
      confirmButtonText: 'relogin',
      callback: () => {
        router.push('/login')
      },
    }
  )
  return false;
}
function alertLoginMessage() {
  isLogin = false;
  sessionStorage.removeItem(USER_KEY);
  sessionStorage.removeItem(TOKEN_NAME);
  ElMessageBox.confirm(
    'Login timeout, please relogin！',
    'Login timeout',
    {
      confirmButtonText: 'relogin',
      cancelButtonText: 'ignore',
      type: 'warning',
    }
    )
    .then(() => {
      router.push('/login')
    })
    .catch(() => {
      router.go(0)
    })
}
// const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
instance.interceptors.response.use(
  async (response) => {
    // 1.获取业务状态码
    let code = response.data.code;
    // 2.业务状态码为200，直接返回
    if (code === CODE.REQUEST_SUCCESS) {
      return response.data;
    }

    // 3.业务状态码为401，代表未登录
    if (code === 401 && isLogin) {
      isLogin = false;
      alertLoginMessage();
    }

    return response.data;
    /*    // 4.业务状态码为其它，返回异常
        ElMessage({
          message: response.data.msg,
          type: 'error'
        });
        throw new Error(response.data.msg);*/
  },
  async (err) => {
    if(err.response.status === 401 && isLogin){
      // 登录异常或超时，刷新token
      return refreshToken(err);
    }
    // refreshing = false;
    return Promise.reject(err);
  },
);

export default instance;
