<template>
  <div class="notfound wrap">
    <div class="left">
      <p>404</p>
      <p>Page not found</p>
    </div>
    <div class="right">
      <img src="./../assets/img/001.jpg" alt="">
    </div>
    <div class="back">
      <router-link to="/index">返回首页</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.notfound {
  text-align: center;
  padding-top: 12%;
  .left {
    margin-right: 2%;
    p {
      font-size: 40px;
      margin: 40px 0;
      text-align: center;
      &:first-child {
        font-size: 60px;
        color: #ff4949;
      }
    }
  }
  .left,
  .right {
    display: inline-block;
    vertical-align: middle;
  }
  .back {
    a {
      font-size: 20px;
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      border: 1px solid #20a0ff;
      padding: 10px 15px;
      border-radius: 4px;
      color: #fff;
      background-color: #20a0ff;
    }
  }
}
</style>
