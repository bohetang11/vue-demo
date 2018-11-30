<template>
  <div class="login-container">
    <el-form ref="form" label-width="80px" size="mini">
      <el-form-item label="用户名">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="password"></el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="handerLogin" style="width: 100%">立即登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handerLogin() {
      axios
        .post("/login", { username: this.username, password: this.password })
        .then(res => {
          if (res.data.meta.status === 200) {
            console.log(res);
            localStorage.setItem("token", res.data.data.token);
            localStorage.setItem("userinfo", JSON.stringify(res.data.data));

            this.$router.push("/home");
            this.$message({
              message: "恭喜你!登录成功!",
              type: "success"
            });
          }else{
            this.$message({
              message: "登录失败!请重新登录!",
              type: "success"
            });
          }
        });
    }
  }
};
</script>

<style lang='less'>
.login-container{
  width: 500px;
  margin: 200px auto;
}

</style>

