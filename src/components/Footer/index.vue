<template>
  <footer>
    <div class="container">
      <div class="links">
          <span v-for="item in Links" :key="item.title" @click="goDetails(item.link)">{{item.title}}</span>
        </div>
        <div class="about fx-sb">
          <div class="info">
            <p>Talent Jet is committed to promoting the best education and providing the best courses</p>
          </div>
          <div class="logo">
            <img src="@/assets/logo.png" alt="" srcset="">
          </div>
        </div>
    </div>
  </footer>
</template>
<script setup>
  // 站内-友情链接
  const Links = [
    {title: '关于我们', link: '/'},
    {title: '管理团队', link: '/'},
    {title: '工作机会', link: '/'},
    {title: '客户服务', link: '/'},
    {title: '帮助文档', link: '/'},
    {title: '如何注册', link: '/'},
    {title: '如何选课', link: '/'},
    {title: '合作机构', link: '/'},
    {title: '合作导师', link: '/'}
  ]
  // 转入详情页
  const goDetails = (link) => {
    return false;
  }
</script>
<style lang="scss" scoped>
footer {
  width: 100%;
  background-color: var(--color-white);
  text-align: left;
  padding: 35px 0;
  font-size: 14px;
  .links {
    margin-bottom: 25px;
    cursor: pointer;
    span{
      margin-right: 30px;
    }
  }
  .about{
    line-height: 30px;
    color: var(--color-font2);
    img{
      width: 144px;
      height: 48px;
    }
  }
}
</style>
