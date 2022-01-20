<template>
  <div>
    <el-dialog :visible.sync="dialogVisible" width="30%" :before-close="handleClose" center>
      <el-form ref="form" :model="form" label-width="60px">
        <el-form-item label="用户名">
          <el-input v-model="form.username" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password" show-password clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      dialogVisible: true,
      form: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    handleClose() {

    },
    onSubmit() {
      axios.post(
          // 'http://sherry.formeky.xyz:8091/essayList?page=1&rows=10'
          'http://localhost:8080/admin/login',
          {
            username:this.form.username,
            password:this.form.password
          }
      ).then(
          response => {
            if (response.data.code==200){
              this.$message.success('登录成功');
              this.$router.push('/admin')
            }else{
              this.$message.error('密码错误');
            }
          }, error => {
            this.$message.error('后端开了个小差，请稍后再试呢');
            console.log(error.message)
          }
      )
    }
  }
}
</script>

<style scoped>

</style>
