<template>
  <div class="login">
    <el-row>
      <el-col :span="12" :offset="6">
        <el-card class="box-card">
          <div slot="header" class="login-title">
            <span>后台管理系统</span>
          </div>
          <el-form ref="form" class="demo-form-inline">
            <el-form-item prop="username">
              <el-input name="username" v-model="form.username" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="form.password" placeholder="密码"></el-input>
            </el-form-item>
            <div class="login-btn">
              <el-button type="primary" @click="logIn(form)">登录</el-button>
              <p v-if="msg">
                <i class="el-icon-warning"></i>{{msg}}</p>
            </div>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'form',
      'msg'
    ])
  },
  methods: {
    ...mapActions([
      'logIn'
    ])
  }
}
</script>

<style scoped lang='scss'>
.login {
  position: relative;
  top: -90px;
  width: 100%;
  height: 100%;
  background-color: #324157;
  .box-card {
    width: 420px;
    margin: 0 auto;
    margin-top: 30%;
    .login-title {
      text-align: center;
      font-size: 28px;
    }
    .demo-form-inline {
      padding: 20px 40px;
    }
    .login-btn {
      position: relative;
      text-align: center;
      button {
        width: 100%;
        height: 36px;
      }
      p {
        width: 100%;
        position: absolute;
        bottom: -20px;
        color: #ed3f14;
        i {
          margin-right: 4px;
        }
      }
    }
  }
}
</style>
