<template>
  <div class="home-container">
    <el-row class="tac">
      <el-col :span="4">
        <el-menu
          default-active="1-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
        >
          <el-submenu index="1">
            <template slot="title">
              <span>用户管理</span>
            </template>
            <el-menu-item index="1-1">用户列表</el-menu-item>
            <el-menu-item index="1-2">用户权限</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <span>用户管理</span>
            </template>
            <el-menu-item index="2-1">用户列表</el-menu-item>
            <el-menu-item index="2-2">用户权限</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <span>用户管理</span>
            </template>
            <el-menu-item index="3-1">用户列表</el-menu-item>
            <el-menu-item index="3-2">用户权限</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>

      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>


<script>
export default {
  created() {
    this.handleSelect();
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key);
      switch (key) {
        case "1-1":
          this.$router.push("/home/users");
      }
    }
  }
};
</script>