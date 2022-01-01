<template>
  <div class="app">
    <z-header :class="{'navBarWrap':navBarFixed}"></z-header>
    <el-row type="flex" justify="center" id="content">
      <el-col :xs="20" :md="20" :style="{'minHeight':minHeight+'px'}">
        <router-view></router-view>
      </el-col>
    </el-row>
    <z-footer></z-footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      minHeight: 0,
      navBarFixed: false
    };
  },
  components: {},
  methods: {
    watchScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      //  当滚动超过 50 时，实现吸顶效果
      this.navBarFixed = scrollTop > 50;
    }
  },
  mounted() {
    let that = this
    that.minHeight = document.documentElement.clientHeight
    window.addEventListener('scroll', that.watchScroll)
    window.onresize = function () {
      that.minHeight = document.documentElement.clientHeight
    }
  }
}
</script>

<style scoped>
.app {
  font-family: "microsoft yahei";
}

#content {
  background-color: #f8f5f5;
  padding: 30px 0;
  position: relative;
  background-attachment: fixed;
  background-position: center 0;
  background-image: url("./assets/background.jpg");
  background-repeat:no-repeat;
  background-size:cover;
  -moz-background-size:100% 100%;
}

.navBarWrap {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
}
</style>
